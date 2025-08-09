
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import Image from 'next/image';

export const metadata = {
  title: 'Beauty Services | Dubai Wellness Oasis',
  description: 'Explore our expert beauty treatments, including bespoke facials, pristine nail artistry, and stunning eyelash extensions.',
};

export default function BeautyPage() {
  const facialServices = services.filter(s => s.category === 'Facials' && !s.id.endsWith('-page'));
  const nailServices = services.filter(s => s.category === 'Nails' && !s.id.endsWith('-page'));
  const eyelashServices = services.filter(s => s.category === 'Eyelashes' && !s.id.endsWith('-page'));

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/high-quality-beauty.jpg?alt=media&token=7c1c5a1a-0e3a-4e3a-867c-941913c7a3dd"
          alt="Elegant beauty treatment setting"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          data-ai-hint="beauty treatment"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Artistry in Beauty</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Enhance your natural radiance with our suite of expert beauty treatments, from advanced facials to flawless nail and lash artistry.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container max-w-7xl px-4 py-16">
          <section className="mb-16 text-center max-w-4xl mx-auto">
             <h2 className="font-headline text-3xl text-primary">A Commitment to Radiance</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Dubai Wellness Oasis, we believe beauty is an art form. Our approach is centered on enhancing your unique features with meticulous care and high-quality products. Whether you seek a glowing complexion, perfectly sculpted nails, or captivating lashes, our master technicians are dedicated to delivering results that are both beautiful and personal. We blend modern techniques with timeless elegance to help you look and feel your absolute best.
            </p>
          </section>

          <main className="space-y-16">
            <section id="facials">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 text-center">Facial Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facialServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
            <section id="nails">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 text-center">Nail Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nailServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
             <section id="eyelashes">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 text-center">Eyelash Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eyelashServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
