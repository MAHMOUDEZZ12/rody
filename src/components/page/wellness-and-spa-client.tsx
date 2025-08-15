
'use client';

import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/section-title';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

async function HeroImage() {
  const imageUrl = await generateSimpleImage({
    prompt:
      'Sanctuary for the Senses: A tranquil, bright, and airy spa setting with golden light, orchids and balanced stones, soft focus background. A sense of peace and wellness.',
  });

  return (
    <Image
      src={imageUrl}
      alt="Serene spa setting"
      fill
      className="object-cover z-0"
      priority
    />
  );
}

export function WellnessAndSpaClient() {
  const massageServices = services.filter(s => s.category === 'Massage');
  const bodyServices = services.filter(s => s.category === 'Body Treatments');

  return (
    <>
      <section className="relative h-[50vh] w-full flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <Suspense fallback={<Skeleton className="absolute inset-0" />}>
          <HeroImage />
        </Suspense>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-spa-primary" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>Sanctuary for the Senses</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Step into a world of tranquility and healing. Our Wellness & SPA services are dedicated to restoring your body’s balance and rejuvenating your spirit.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="container max-w-7xl px-4">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <section className="mb-16 text-center max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl text-spa-primary">A Philosophy of Personalized Healing</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  At Rody Wellness, we believe that true well-being comes from a holistic approach. Our SPA philosophy is rooted in the art of personalization. We don’t just offer treatments; we curate therapeutic journeys designed to meet your unique needs. From ancient techniques that have stood the test of time to modern restorative therapies, each experience is a celebration of your personal health and harmony. Let our expert therapists guide you toward a state of profound peace and physical renewal.
                </p>
              </section>

              <main className="space-y-16">
                <section id="massage">
                  <SectionTitle title="Massage Therapy" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {massageServices.map((service, index) => (
                      <ServiceCard key={service.id} service={service} theme="spa" highlight={index === 0} />
                    ))}
                  </div>
                </section>
                <section id="body-treatments">
                  <SectionTitle title="Body Treatments" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {bodyServices.map((service) => (
                      <ServiceCard key={service.id} service={service} theme="spa" />
                    ))}
                  </div>
                </section>
              </main>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
