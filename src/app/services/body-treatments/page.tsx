
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Body Treatments | Rody Wellness',
  description: 'Indulge in our luxurious body treatments, including exfoliating scrubs that leave your skin feeling soft, smooth, and revitalized.',
};

export default function BodyTreatmentsPage() {
  const bodyServices = services.filter(s => s.category === 'Body Treatments');

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Body Treatments
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Revitalize your skin from head to toe with our nourishing body scrubs. Each treatment is designed to exfoliate, detoxify, and hydrate, revealing a radiant and healthy glow.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bodyServices.map((service) => (
            <ServiceCard key={service.id} service={service} theme="spa"/>
          ))}
        </div>
      </main>
    </div>
  );
}

    