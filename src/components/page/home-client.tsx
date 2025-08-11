
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, Sparkles } from 'lucide-react';
import { testimonials, packages, services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PackageCard } from '../package-card';
import { Button } from '../ui/button';
import { SectionTitle } from '../section-title';
import { ServiceCard } from '../service-card';
import { Input } from '../ui/input';
import { Suspense, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { ReferralBanner } from '../referral-banner';

function HeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({
      title: 'Luxury Wellness Background',
      content: 'A serene and luxurious spa-like background image, elegant and calming, suitable for a hero section.',
      dataAiHint: 'serene spa background'
    })
      .then(setImageUrl)
      .catch(console.error);
  }, []);

  if (!imageUrl) return <Skeleton className="w-full h-full" />;

  return (
    <Image
      src={imageUrl}
      alt="Luxury wellness background"
      layout="fill"
      objectFit="cover"
      className="z-0 animate-ken-burns"
      priority
    />
  );
}

function SureBannerImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({
      title: 'Sure by Rody Card',
      content: 'An elegant, minimalist pink card design representing an exclusive membership.',
      dataAiHint: 'elegant pink card'
    })
      .then(setImageUrl)
      .catch(console.error);
  }, []);

  if (!imageUrl) return <Skeleton className="w-full h-full" />;
  
  return (
      <Image 
          src={imageUrl}
          alt="Sure by Rody card"
          layout="fill"
          objectFit="cover"
      />
  );
}


function SureBanner() {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const { toast } = useToast();
    const router = useRouter();
    const { login } = useAuth();

    const handleJoin = () => {
        if (whatsappNumber.length < 10) {
            toast({
                title: "Invalid Number",
                description: "Please enter a valid WhatsApp number.",
                variant: "destructive",
            });
            return;
        }
        login({ uid: whatsappNumber, email: `${whatsappNumber}@sure.com`});
        toast({
            title: "Welcome to Sure!",
            description: "You're in! Check out your exclusive offers in the dashboard.",
        });
        router.push('/dashboard');
    }

    return (
        <section id="sure-banner" className="py-16 md:py-24">
            <div className="container max-w-4xl px-4">
                <Card className="bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <Sparkles className="h-12 w-12 text-primary mb-4" />
                            <h2 className="font-headline text-3xl md:text-4xl text-primary">Introducing <br/>Sure by Rody</h2>
                            <p className="mt-4 text-muted-foreground">Join for free with your WhatsApp number to get instant access to exclusive offers, member-only pricing, and a seamless booking experience. No passwords, no hassle.</p>
                            <div className="flex flex-col sm:flex-row gap-2 mt-6">
                                <Input 
                                    placeholder="Your WhatsApp Number" 
                                    className="bg-white"
                                    value={whatsappNumber}
                                    onChange={(e) => setWhatsappNumber(e.target.value)}
                                />
                                <Button onClick={handleJoin} className="w-full sm:w-auto">Join Now</Button>
                            </div>
                        </div>
                        <div className="hidden md:block relative min-h-[300px]">
                           <Suspense fallback={<Skeleton className="w-full h-full" />}>
                                <SureBannerImage />
                            </Suspense>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}


export function HomeClient() {
  const featuredSpaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments').slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.category === 'Nails' || s.category === 'Facials').slice(0, 2);

  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <HeroImage />
        </Suspense>
        <div className="relative z-20 animate-fade-in-up text-white">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">Your Sanctuary, Delivered</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Experience Dubai's most luxurious at-home spa and beauty services. Ultimate convenience, uncompromising quality.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full font-bold px-10 py-7 text-lg">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </section>

      <SureBanner />

      <section id="services" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Our Services" />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-spa-primary">Wellness & SPA</h3>
                        <p className="text-muted-foreground mt-2">Restore your body’s balance and rejuvenate your spirit.</p>
                    </div>
                    <div className="grid gap-6">
                      {featuredSpaServices.map(service => (
                        <ServiceCard key={service.id} service={service} theme="spa" />
                      ))}
                    </div>
                    <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/wellness-and-spa">Explore All SPA Services</Link>
                        </Button>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-beauty-primary">Beauty & Nails</h3>
                        <p className="text-muted-foreground mt-2">Enhance your natural radiance with our expert treatments.</p>
                    </div>
                    <div className="grid gap-6">
                       {featuredBeautyServices.map(service => (
                        <ServiceCard key={service.id} service={service} theme="beauty" />
                      ))}
                    </div>
                     <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/beauty">Explore All Beauty Services</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

       <section id="packages" className="py-16 md:py-24">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Sure Packages" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Indulge in our thoughtfully designed packages, exclusively for Sure members.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 container max-w-7xl">
        <ReferralBanner />
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
           <SectionTitle title="Words of Wellness" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who have experienced the Rody Wellness sanctuary.
          </p>
          <div className="relative mt-12">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="text-center bg-white/80 backdrop-blur-sm shadow-lg break-inside-avoid">
                        <CardContent className="p-6">
                           <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="pt-0">
                          <CardTitle className="font-body text-base font-bold">{testimonial.name}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">{testimonial.service}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
