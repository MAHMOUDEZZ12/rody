
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Wellness & SPA | Rody Wellness',
  description: 'Explore our complete range of wellness and spa treatments, including therapeutic massages and revitalizing body scrubs, designed to restore balance and rejuvenate your body and mind.',
};

export default function WellnessAndSpaPage() {
  const spaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments');
  const massageServices = spaServices.filter(s => s.category === 'Massage' && !s.id.endsWith('-page'));
  const bodyServices = spaServices.filter(s => s.category === 'Body Treatments' && !s.id.endsWith('-page'));


  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/spa-hero-bg.jpg?alt=media&token=e9f456c1-1e9a-4c2c-80d5-3b951c360c70"
          alt="Serene spa setting"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Sanctuary for the Senses</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Step into a world of tranquility and healing. Our Wellness & SPA services are dedicated to restoring your body’s balance and rejuvenating your spirit.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container max-w-7xl px-4 py-16">
          <section className="mb-16 text-center max-w-4xl mx-auto">
             <h2 className="font-headline text-3xl text-primary">A Philosophy of Personalized Healing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Rody Wellness, we believe that true well-being comes from a holistic approach. Our SPA philosophy is rooted in the art of personalization. We don’t just offer treatments; we curate therapeutic journeys designed to meet your unique needs. From ancient techniques that have stood the test of time to modern restorative therapies, each experience is a celebration of your personal health and harmony. Let our expert therapists guide you toward a state of profound peace and physical renewal.
            </p>
          </section>

          <main className="space-y-16">
            <section id="massage">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 text-center">Massage Therapy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {massageServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
            <section id="body-treatments">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10 text-center">Body Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bodyServices.map((service) => (
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
