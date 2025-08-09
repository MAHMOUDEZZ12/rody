
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Wellness & SPA | Rody Wellness',
  description: 'Explore our complete range of wellness and spa treatments, including therapeutic massages and revitalizing body scrubs, designed to restore balance and rejuvenate your body and mind.',
};

export default function WellnessAndSpaPage() {
  const spaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments');
  const massageServices = spaServices.filter(s => s.category === 'Massage' && !s.id.endsWith('-page'));
  const bodyServices = spaServices.filter(s => s.category === 'Body Treatments' && !s.id.endsWith('-page'));


  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-spa-primary">
          Wellness & SPA
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Step into a world of tranquility and healing. Our Wellness & SPA services are dedicated to restoring your body’s balance and rejuvenating your spirit. From ancient therapeutic techniques to modern restorative treatments, each experience is tailored to your personal well-being.
        </p>
      </header>
      <main className="space-y-16">
        <section>
          <h2 className="font-headline text-3xl text-primary mb-8 text-center">Massage Therapy</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {massageServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-headline text-3xl text-primary mb-8 text-center">Body Treatments</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bodyServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
