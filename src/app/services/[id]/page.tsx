'use client';

import { useState, useMemo, Suspense } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { services, professionals as allProfessionals, timeSlots, type Addon, type Service } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CalendarIcon, Clock, DollarSign, Gem, User, Users } from 'lucide-react';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';

const ServiceImage = async ({ service }: { service: Service }) => {
  const imageUrl = await generateBlogImage({ title: service.name, content: service.longDescription, dataAiHint: service.dataAiHint });
  return (
    <Image src={imageUrl} alt={service.name} layout="fill" objectFit="cover" />
  );
};

export default function ServiceBookingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();

  const service = services.find((s) => s.id === params.id);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);

  const serviceProfessionals = useMemo(() => {
    return allProfessionals.filter(p => service?.professionals.includes(p.id));
  }, [service]);

  const handleAddonToggle = (addon: Addon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const totalPrice = useMemo(() => {
    if (!service) return 0;
    const addonsPrice = selectedAddons.reduce((total, addon) => total + addon.price, 0);
    return service.price + addonsPrice;
  }, [service, selectedAddons]);

  if (!service) {
    notFound();
  }
  
  const handleBooking = () => {
    if (!selectedDate || !selectedProfessionalId || !selectedTime) {
      toast({
        title: "Incomplete Information",
        description: "Please select a date, professional, and time slot.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Booking Confirmed!",
      description: `Your ${service.name} is booked. You've earned ${Math.floor(totalPrice / 10)} loyalty points!`,
      duration: 5000,
    });
    router.push('/');
  }

  return (
    <div className="container max-w-7xl px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Services
      </Button>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Suspense fallback={<Skeleton className="w-full h-full" />}>
              <ServiceImage service={service} />
            </Suspense>
          </div>
          <h1 className="font-headline text-4xl text-primary mt-8">{service.name}</h1>
          <div className="flex items-center gap-8 mt-4 text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> {service.duration} minutes</div>
            <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /> Starts from AED {service.price}</div>
          </div>
          <Separator className="my-6" />
          <p className="text-lg leading-relaxed">{service.longDescription}</p>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Book Your Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="font-bold flex items-center gap-2"><Users className="h-4 w-4" /> Select Professional</Label>
                <Select value={selectedProfessionalId} onValueChange={setSelectedProfessionalId}>
                  <SelectTrigger><SelectValue placeholder="Choose a professional" /></SelectTrigger>
                  <SelectContent>
                    {serviceProfessionals.map((p) => (
                      <SelectItem key={p.id} value={p.id}>{p.name} - {p.specialty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-bold flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> Select Date</Label>
                <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}/>
              </div>

              <div className="space-y-2">
                <Label className="font-bold flex items-center gap-2"><Clock className="h-4 w-4" /> Select Time</Label>
                <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => (
                    <div key={time}>
                      <RadioGroupItem value={time} id={time} className="sr-only" />
                      <Label htmlFor={time} className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 text-sm hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                        {time}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {service.addons.length > 0 && (
                <div className="space-y-2">
                  <Label className="font-bold flex items-center gap-2"><Gem className="h-4 w-4" /> Service Add-ons</Label>
                  <div className="space-y-3 rounded-md border p-4">
                    {service.addons.map(addon => (
                      <div key={addon.id} className="flex items-start">
                        <Checkbox
                          id={addon.id}
                          onCheckedChange={() => handleAddonToggle(addon)}
                          className="mr-3 mt-1"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor={addon.id} className="font-medium cursor-pointer">
                            {addon.name} <span className="text-primary font-bold">(+AED {addon.price})</span>
                          </label>
                          <p className="text-sm text-muted-foreground">{addon.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />
              <div className="flex justify-between items-center font-bold text-xl">
                <span>Total:</span>
                <span className="text-primary">AED {totalPrice}</span>
              </div>
              <Button onClick={handleBooking} size="lg" className="w-full rounded-full font-bold">Confirm Booking</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
