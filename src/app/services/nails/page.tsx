import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Nail Services | Rody Wellness',
  description: 'Experience pristine nail care with our range of manicures, pedicures, and advanced enhancements like gel, polygel, and acrylics.',
};

export default function NailsPage() {
  const nailServices = services.filter(s => s.category === 'Nails');

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Nail Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          From classic manicures to glamorous extensions, our expert nail technicians provide meticulous care to ensure your hands and feet look flawless and feel rejuvenated.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nailServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
