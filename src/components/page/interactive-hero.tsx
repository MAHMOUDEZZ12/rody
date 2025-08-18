
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import Image from 'next/image';

async function HeroImage() {
    let imageUrl;
    try {
        imageUrl = await generateSimpleImage({
            prompt:
            'Luxury Home Sanctuary: A beautiful and serene spa environment in a luxury home, soft lighting, orchids, and a sense of peace. The image should be bright and airy, with a luxury aesthetic.',
        });
    } catch (error) {
        console.error("Failed to generate hero image, falling back to placeholder.", error);
        imageUrl = "https://placehold.co/1920x1080.png";
    }
    
    return (
        <Image
        src={imageUrl}
        alt="Serene luxury spa setting in a home"
        fill
        className="object-cover"
        priority
        />
    );
}

export function InteractiveHero() {
  return (
    <section className="relative h-[80vh] w-full text-white">
      <Suspense fallback={<Skeleton className="absolute inset-0" />}>
        <HeroImage />
      </Suspense>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 to-transparent text-center p-4">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative z-10 animate-fade-in-up">
          <h1
            className="font-headline text-4xl md:text-6xl font-bold"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Your Sanctuary, Delivered.
          </h1>
          <p
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
          >
            Premium at-home wellness and beauty services in Dubai.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full font-bold">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
