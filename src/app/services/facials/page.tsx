import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Facial Treatments | Rody Wellness',
  description: 'Rejuvenate your skin with our luxurious facial treatments, from deep cleansing and hydrating to anti-aging and specialized masks.',
};

export default function FacialsPage() {
  const facialServices = services.filter(s => s.category === 'Facials');

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Facial Treatments
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Unlock a radiant complexion with our range of advanced facial treatments. We use premium products and techniques to target your specific skin concerns, from hydration to anti-aging.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facialServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
