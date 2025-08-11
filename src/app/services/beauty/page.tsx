
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import Image from 'next/image';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import React from 'react';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent } from '@/components/ui/card';


async function HeroImage() {
    const imageUrl = await generateBlogImage({
        title: 'Artistry in Beauty',
        content: 'Enhance your natural radiance with our suite of expert beauty treatments, from advanced facials to flawless nail and lash artistry.',
        dataAiHint: 'pink artistic beauty background with splashes of color',
    });
    return (
        <Image
          src={imageUrl}
          alt="Elegant beauty treatment setting"
          fill
          className="object-cover z-0 animate-ken-burns"
          priority
          data-ai-hint="beauty treatment"
        />
    )
}

export const metadata = {
  title: 'Beauty & Nails | Rody Wellness',
  description: 'Explore our expert beauty treatments, including bespoke facials, pristine nail artistry, and stunning eyelash extensions.',
};

export default function BeautyPage() {
  const facialServices = services.filter(s => s.category === 'Facials' && !s.id.endsWith('-page'));
  const nailServices = services.filter(s => s.category === 'Nails' && !s.id.endsWith('-page'));
  const eyelashServices = services.filter(s => s.category === 'Eyelashes' && !s.id.endsWith('-page'));

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <HeroImage />
        </Suspense>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-beauty-primary">Artistry in Beauty</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Enhance your natural radiance with our suite of expert beauty treatments, from advanced facials to flawless nail and lash artistry.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="container max-w-7xl px-4">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <section className="mb-16 text-center max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl text-beauty-primary">A Commitment to Radiance</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  At Rody Wellness, we believe beauty is an art form. Our approach is centered on enhancing your unique features with meticulous care and high-quality products. Whether you seek a glowing complexion, perfectly sculpted nails, or captivating lashes, our master technicians are dedicated to delivering results that are both beautiful and personal. We blend modern techniques with timeless elegance to help you look and feel your absolute best.
                </p>
              </section>

              <main className="space-y-16">
                <section id="facials">
                  <SectionTitle title="Facial Treatments" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {facialServices.map((service) => (
                      <ServiceCard key={service.id} service={service} theme="beauty"/>
                    ))}
                  </div>
                </section>
                <section id="nails">
                  <SectionTitle title="Nail Services" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {nailServices.map((service) => (
                      <ServiceCard key={service.id} service={service} theme="beauty" />
                    ))}
                  </div>
                </section>
                 <section id="eyelashes">
                  <SectionTitle title="Eyelash Services" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {eyelashServices.map((service) => (
                      <ServiceCard key={service.id} service={service} theme="beauty"/>
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
