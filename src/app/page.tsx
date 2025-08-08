
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UserCheck } from 'lucide-react';
import { Suspense } from 'react';

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
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { ReferralBanner } from '@/components/referral-banner';


export default function Home() {
  const recommendedServices = services.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
           <HeroImage />
        </Suspense>
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container max-w-4xl px-4 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
            Your Sanctuary, Delivered.
          </h1>
          <p className="mt-4 md:text-xl text-lg text-neutral-200 max-w-2xl mx-auto">
            Experience unparalleled luxury and wellness with our exclusive at-home services in Dubai.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
            <Link href="/services">Explore Services</Link>
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
                  <CarouselItem key={service.id} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <ServiceCard service={service} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="professionals" className="relative py-16 md:py-24 text-card-foreground">
        <Suspense fallback={<Skeleton className="w-full h-full absolute inset-0 -z-20" />}>
          <ProfessionalsBgImage />
        </Suspense>
        <div className="absolute inset-0 bg-background/80 -z-10" />
        <div className="container max-w-7xl px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
            Meet Our Elite Professionals
          </h2>
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Our certified and experienced therapists are dedicated to providing you with an exceptional wellness experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 justify-center">
            {professionals.map((prof) => (
               <Link key={prof.id} href={`/professionals/${prof.id}`} className="block group">
                 <Card className="text-center border-transparent bg-card/80 backdrop-blur-sm shadow-lg max-w-xs mx-auto">
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="w-28 h-28 border-4 border-primary/50 group-hover:border-primary transition-colors">
                      <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
                        <ProfessionalImage professional={prof} />
                      </Suspense>
                      <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-bold font-body group-hover:text-primary transition-colors">{prof.name}</h3>
                    <p className="text-primary font-semibold">{prof.specialty}</p>
                   </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl px-4">
          <ReferralBanner />
        </div>
      </section>
    </div>
  );
}


async function HeroImage() {
  const imageUrl = await generateBlogImage({ title: "Luxury Spa", content: "A serene and luxurious spa setting.", dataAiHint: "luxury spa" });
  return (
    <Image
      src={imageUrl}
      alt="Luxury spa setting"
      fill
      className="object-cover object-center -z-10"
    />
  );
};

async function ProfessionalImage({ professional }: { professional: (typeof professionals)[0] }) {
  const imageUrl = await generateBlogImage({ title: professional.name, content: professional.specialty, dataAiHint: professional.dataAiHint });
  return (
    <AvatarImage src={imageUrl} alt={professional.name} />
  )
}

async function ProfessionalsBgImage() {
  const imageUrl = await generateBlogImage({ title: "Lush Leaves", content: "A background of lush green leaves.", dataAiHint: "green leaves background" });
  return (
    <Image
      src={imageUrl}
      alt="Leafy background"
      fill
      className="object-cover object-center -z-10"
    />
  );
}
