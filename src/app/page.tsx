
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UserCheck, Star } from 'lucide-react';
import { Suspense, useEffect, useState } from 'react';

import { services, professionals, packages, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { ReferralBanner } from '@/components/referral-banner';
import { PackageCard } from '@/components/package-card';


function HeroImage() {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/360_F_561448547_ma1OzwUti7YFlxZaNsLYhHhz7l41vl1m.jpg?alt=media&token=25f072b5-808f-4dac-bb96-942ac1e9b9c2";
  
  if (!imageUrl) return <Skeleton className="absolute inset-0 -z-10 w-full h-full" />;

  return (
    <Image
      src={imageUrl}
      alt="Artistic spa setting with natural elements"
      fill
      className="object-cover object-center -z-10"
      priority
    />
  );
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
           <HeroImage />
        </Suspense>
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container max-w-4xl px-4 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold">
            Your Sanctuary, Delivered.
          </h1>
          <p className="mt-4 md:text-xl text-lg text-neutral-200 max-w-2xl mx-auto">
            Experience unparalleled luxury and wellness with our exclusive at-home services in Dubai.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
            <Link href="/services">Book Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-transparent">
        <div className="container max-w-5xl px-4">
          <ReferralBanner />
        </div>
      </section>

      <section id="testimonials" className="relative py-16 md:py-24 text-card-foreground bg-background/80">
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
                       <Card className="text-center bg-white/80 backdrop-blur-sm shadow-lg h-full flex flex-col text-card-foreground">
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
