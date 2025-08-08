
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UserCheck } from 'lucide-react';

import { services, professionals } from '@/lib/data';
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

export default function Home() {
  const recommendedServices = services.slice(0, 4);

  const serviceCategories = [...new Set(services.map(s => s.category))];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Luxury spa setting"
          data-ai-hint="luxury spa"
          fill
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container max-w-4xl px-4 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
            Your Sanctuary, Delivered.
          </h1>
          <p className="mt-4 md:text-xl text-lg text-neutral-200 max-w-2xl mx-auto">
            Experience unparalleled luxury and wellness with our exclusive at-home services in Dubai.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </section>

      <section id="recommendations" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
            Recommended For You
          </h2>
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            AI-powered suggestions based on your preferences for a truly personalized wellness journey.
          </p>
          <div className="mt-12">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {recommendedServices.map((service) => (
                  <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <ServiceCard service={service} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl px-4">
          {serviceCategories.map(category => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
                {category}
              </h2>
              <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                Indulge in our curated selection of {category.toLowerCase()} treatments, designed for ultimate relaxation and rejuvenation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {services.filter(s => s.category === category).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="professionals" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
            Meet Our Elite Professionals
          </h2>
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Our certified and experienced therapists are dedicated to providing you with an exceptional wellness experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 justify-center">
            {professionals.map((prof) => (
               <Card key={prof.id} className="text-center border-transparent bg-transparent shadow-none max-w-xs mx-auto">
                <CardContent className="flex flex-col items-center p-4">
                  <Avatar className="w-28 h-28 border-4 border-primary/50">
                    <AvatarImage src={prof.image} alt={prof.name} data-ai-hint={prof.dataAiHint} />
                    <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-bold font-body">{prof.name}</h3>
                  <p className="text-primary font-semibold">{prof.specialty}</p>
                 </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-5xl px-4">
          <Card className="bg-gradient-to-r from-primary/80 to-accent/80 border-none">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
              <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-background">
                  Ready for a Transformation?
                </h2>
                <p className="mt-2 text-lg text-background/80">
                  Book your first at-home session today and step into a world of pure bliss.
                </p>
              </div>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-primary rounded-full font-bold text-base px-8 py-6 flex-shrink-0">
                <Link href="#services">
                  Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
