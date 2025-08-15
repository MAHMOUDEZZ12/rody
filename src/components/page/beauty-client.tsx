
'use client';

import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import Image from 'next/image';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function HeroImage() {
    return (
        <Image
          src={`https://placehold.co/1600x900.png`}
          alt="Elegant beauty treatment setting"
          data-ai-hint="pink artistic beauty background with splashes of color"
          fill
          className="object-cover z-0"
          priority
        />
    )
}

export function BeautyClient() {
  const facialServices = services.filter(s => s.category === 'Facials');
  const nailServices = services.filter(s => s.category === 'Nails');
  const eyelashServices = services.filter(s => s.category === 'Eyelashes');

  return (
    <>
      <section className="relative h-[50vh] w-full flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <HeroImage />
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
                <Card className="bg-card/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-beauty-primary">A Commitment to Radiance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mt-4 text-lg text-muted-foreground">
                        At Rody Wellness, we believe beauty is an art form. Our approach is centered on enhancing your unique features with meticulous care and high-quality products. Whether you seek a glowing complexion, perfectly sculpted nails, or captivating lashes, our master technicians are dedicated to delivering results that are both beautiful and personal. We blend modern techniques with timeless elegance to help you look and feel your absolute best.
                        </p>
                    </CardContent>
                </Card>
              </section>

              <main className="space-y-16">
                <section id="facials">
                  <SectionTitle title="Facial Treatments" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {facialServices.map((service, index) => (
                      <ServiceCard key={service.id} service={service} theme="beauty" highlight={index === 0}/>
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
