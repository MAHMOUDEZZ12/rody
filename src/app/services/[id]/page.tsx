
'use client';

import { useState, useMemo } from 'react';
import { notFound, useRouter, useSearchParams } from 'next/navigation';
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
import { ArrowLeft, CalendarIcon, Clock, CreditCard, CheckCircle, Gem, Gift, Sparkles, Truck, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { handleBooking as handleBookingAction } from '@/app/actions';

export default function ServiceBookingPage({ params }: { params: { id:string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isGifting = searchParams.get('gift') === 'true';

  const { toast } = useToast();

  const service = services.find((s) => s.id === params.id);
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [isSureMember, setIsSureMember] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const serviceProfessionals = useMemo(() => {
    if (!service) return [];
    return allProfessionals.filter(p => service.professionals.includes(p.id));
  }, [service]);

  const handleAddonToggle = (addon: Addon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    );
  };
  
  if (!service) {
    notFound();
  }
  
  const originalPrice = service.originalPrice || service.price;
  const surePrice = service.price;
  const addonsPrice = selectedAddons.reduce((total, addon) => total + addon.price, 0);

  const totalPrice = isSureMember ? surePrice + addonsPrice : originalPrice + addonsPrice;

  const handleBooking = async () => {
    if (!selectedDate || !selectedProfessionalId || !selectedTime) {
      toast({
        title: "Incomplete Information",
        description: "Please select a date, professional, and time slot.",
        variant: "destructive",
      });
      return;
    }

    const bookingData = {
      serviceName: service.name,
      totalPrice,
      isGifting,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      professionalId: selectedProfessionalId,
      addons: selectedAddons.map(a => a.name),
    };

    const result = await handleBookingAction(bookingData);

    if (result.success) {
      toast({
        title: isGifting ? "Gift Purchased!" : "Booking Confirmed!",
        description: `Your ${service.name} is booked. Payment of AED ${totalPrice} is due on delivery.`,
        duration: 5000,
      });
      router.push('/dashboard');
    } else {
       toast({
        title: "Booking Failed",
        description: "Could not complete your booking. Please try again.",
        variant: "destructive",
      });
    }
  }

  const handleJoinSure = () => {
    if (whatsappNumber.length < 10) {
       toast({
        title: "Invalid Number",
        description: "Please enter a valid WhatsApp number.",
        variant: "destructive",
      });
      return;
    }
    setIsSureMember(true);
    toast({
      title: "Welcome to Sure!",
      description: `You've unlocked the exclusive price for ${service.name}.`,
    });
  }

  const whatToExpect = [
    {
      title: 'Therapist Arrival',
      description: 'Your certified therapist will arrive at your location within a 15-minute window of your booking time, fully equipped with a professional massage table, fresh linens, and all necessary products.',
    },
    {
      title: 'Space Setup',
      description: 'We require a small, clean, and quiet space (approx. 2x3 meters) to set up. Your therapist will transform your room into a serene spa environment in minutes.',
    },
    {
      title: 'Your Comfort',
      description: 'For massages and body treatments, you can undress to your comfort level. You will be professionally draped at all times, ensuring your privacy and comfort throughout the session.',
    },
    {
      title: 'Payment',
      description: 'Once your treatment is complete and you are fully satisfied, payment can be settled with your therapist via cash, credit card machine, or a secure payment link.',
    },
  ];

  return (
    <div className="container max-w-7xl px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft />
        Back to Services
      </Button>
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image 
                src={service.image} 
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />
             {isSureMember && (
              <Badge variant="destructive" className="absolute top-4 left-4 text-base py-1 px-3 bg-primary text-white">SURE OFFER</Badge>
            )}
          </div>
          <h1 className="font-headline text-3xl md:text-4xl mt-8 text-primary">{service.name}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-4 text-muted-foreground">
            <div className="flex items-center gap-2"><Clock /> {service.duration} minutes</div>
            <div className="flex items-center gap-2"><Truck /> Free Delivery</div>
          </div>
          <Separator className="my-6" />
          <p className="text-lg leading-relaxed">{service.longDescription}</p>

          <Card className="mt-8 bg-card/80">
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2 text-primary"><Sparkles /> Sure by Rody Offer</CardTitle>
            </CardHeader>
            <CardContent>
                {isSureMember ? (
                     <div className="text-center p-6 bg-green-100/50 rounded-lg">
                        <h3 className="text-2xl font-bold text-green-700">You've unlocked the Sure price!</h3>
                        <p className="text-muted-foreground mt-2">Continue with your booking to enjoy the savings.</p>
                     </div>
                ) : (
                    <>
                        <CardDescription>Join "Sure by Rody" for FREE with your WhatsApp number to unlock exclusive pricing on this service and more!</CardDescription>
                        <div className="flex items-baseline gap-4 mt-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Standard Price</p>
                                <p className="text-2xl font-bold line-through">AED {originalPrice}</p>
                            </div>
                            <div>
                                <p className="text-sm text-primary font-bold">Sure Price</p>
                                <p className="text-3xl font-bold text-primary">AED {surePrice}</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-6">
                            <Input 
                                placeholder="Enter your WhatsApp number" 
                                className="bg-white" 
                                value={whatsappNumber}
                                onChange={(e) => setWhatsappNumber(e.target.value)}
                            />
                            <Button onClick={handleJoinSure} className="w-full sm:w-auto">Get Sure Offer</Button>
                        </div>
                    </>
                )}
            </CardContent>
          </Card>

           <section className="mt-12">
            <h2 className="font-headline text-3xl text-primary mb-6">What to Expect</h2>
            <div className="space-y-6">
              {whatToExpect.map((item, index) => (
                <Card key={index} className="bg-card/80">
                  <CardContent className="flex items-start gap-4 p-6">
                    <CheckCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>

        <div className="md:col-span-2">
          <Card className="shadow-lg bg-white/80 backdrop-blur-sm sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{isGifting ? 'Gift This Service' : 'Book Your Session'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isGifting && (
                <>
                  <div className="space-y-2">
                    <Label className="font-bold flex items-center gap-2"><Users /> Select Professional</Label>
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
                    <Label className="font-bold flex items-center gap-2"><CalendarIcon /> Select Date</Label>
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border bg-white" disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}/>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold flex items-center gap-2"><Clock /> Select Time</Label>
                    <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map(time => (
                        <div key={time}>
                          <RadioGroupItem value={time} id={time} className="sr-only" />
                          <Label htmlFor={time} className="flex items-center justify-center rounded-md border-2 border-muted bg-white p-2 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            {time}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </>
              )}
              
              {service.addons.length > 0 && (
                <div className="space-y-2">
                  <Label className="font-bold flex items-center gap-2"><Gem /> Service Add-ons</Label>
                  <div className="space-y-3 rounded-md border p-4 max-h-60 overflow-y-auto bg-white">
                    {service.addons.map(addon => (
                      <div key={addon.id} className="flex items-start">
                        <Checkbox
                          id={addon.id}
                          onCheckedChange={() => handleAddonToggle(addon)}
                          className="mr-3 mt-1"
                          checked={selectedAddons.some(a => a.id === addon.id)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor={addon.id} className="font-medium cursor-pointer">
                            {addon.name} <span className="font-bold text-primary">(+AED {addon.price})</span>
                          </label>
                          <p className="text-sm text-muted-foreground">{addon.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

               <div className="space-y-2">
                  <Label className="font-bold flex items-center gap-2"><CreditCard /> Payment</Label>
                  <div className="text-sm text-muted-foreground p-3 border rounded-lg bg-white">
                    All payments are settled upon delivery. We accept <span className="font-bold">Cash, Card, or Payment Link</span>.
                  </div>
                </div>
              
              <div className="flex justify-between items-center font-bold text-3xl">
                <span>Total:</span>
                <span className="text-primary">AED {totalPrice}</span>
              </div>
              
              {isGifting ? (
                 <Button onClick={handleBooking} size="lg" className="w-full rounded-full font-bold">
                    Purchase Gift <Gift />
                  </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button onClick={handleBooking} size="lg" className="w-full rounded-full font-bold">Confirm Booking</Button>
                  <Button onClick={() => router.push(`/services/${service.id}?gift=true`)} size="lg" variant="outline" className="w-full rounded-full font-bold">
                    Gift this <Gift />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
