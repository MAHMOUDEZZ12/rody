import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Eyelash Services | Rody Wellness',
  description: 'Enhance your eyes with our professional eyelash services, including classic and Russian volume extensions, lash lifts, and tints.',
};

export default function EyelashesPage() {
  const eyelashServices = services.filter(s => s.category === 'Eyelashes');

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Eyelash Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Frame your eyes perfectly with our stunning eyelash treatments. Whether you desire a natural enhancement or full, dramatic volume, our lash artists deliver beautiful, lasting results.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eyelashServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
