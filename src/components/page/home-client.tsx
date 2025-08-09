
'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { testimonials, packages } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralBanner } from '@/components/referral-banner';
import { InteractiveHero } from './interactive-hero';
import { PackageCard } from '../package-card';
import { Button } from '../ui/button';


export function HomeClient() {
  return (
    <div className="flex flex-col">
      <InteractiveHero />

       <section id="packages" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
            Curated Packages
          </h2>
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

      <section className="py-16 md:py-24 bg-transparent">
        <div className="container max-w-5xl px-4">
          <ReferralBanner />
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-5xl px-4">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
            Words of Wellness
          </h2>
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
