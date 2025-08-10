
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials, packages, services } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralBanner } from '@/components/referral-banner';
import { PackageCard } from '../package-card';
import { Button } from '../ui/button';
import { SectionTitle } from '../section-title';
import { ServiceCard } from '../service-card';

const heroImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/R%2FUntitled-2%20(1).png?alt=media&token=6626e426-3886-44ec-ac73-ac1a3fd5591e";
const beautyImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/R%2FUntitled-3%20(2).png?alt=media&token=97ed2705-acc6-4297-8527-3aae62a4927e";

export function HomeClient() {
  const featuredSpaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments').slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.category === 'Nails' || s.category === 'Facials').slice(0, 2);

  return (
    <div className="flex flex-col">
       <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white p-4 overflow-hidden">
        <Image
          src={heroImage}
          alt="Serene wellness background"
          fill
          className="object-cover z-0"
          priority
          data-ai-hint="wellness spa"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 animate-fade-in-up">
           <div className="bg-black/50 p-8 rounded-lg shadow-2xl backdrop-blur-sm border border-white/20">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
              Your Sanctuary, Delivered.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutral-200">
              Experience luxurious, five-star spa and beauty treatments in the comfort and privacy of your own home.
            </p>
             <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
                <Link href="/packages">Explore Packages</Link>
             </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Our Services" />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
                
                {/* SPA Section */}
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

                {/* Beauty Section */}
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
          <SectionTitle title="Curated Packages" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Indulge in our thoughtfully designed packages for a complete wellness experience.
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

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-5xl px-4">
          <ReferralBanner />
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container max-w-5xl px-4">
           <SectionTitle title="Words of Wellness" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who have experienced the Rody Wellness sanctuary.
          </p>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                       <Card className="text-center bg-card/80 backdrop-blur-sm shadow-lg h-full flex flex-col">
                        <CardContent className="p-8 flex-grow">
                           <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="pt-0">
                          <CardTitle className="font-body text-lg font-bold">{testimonial.name}</CardTitle>
                          <CardDescription className="text-muted-foreground">{testimonial.service}</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
