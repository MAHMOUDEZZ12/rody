
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"

type Slide = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

type HeroSliderProps = {
  slides: Slide[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <Carousel
      className="relative w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[70vh] md:h-[80vh] w-full text-white">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 to-transparent text-center p-4">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="relative z-10 animate-fade-in-up">
                  <h1
                    className="font-headline text-4xl md:text-6xl font-bold"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
                    style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
                  >
                    {slide.subtitle}
                  </p>
                  <Button asChild size="lg" className="mt-8 rounded-full font-bold">
                    <Link href="/services/wellness-and-spa">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
    </Carousel>
  );
}
