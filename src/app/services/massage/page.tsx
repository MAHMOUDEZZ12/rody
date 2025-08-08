import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'Massage Therapy | Rody Wellness',
  description: 'Discover our range of bespoke massage therapies, from deep tissue to relaxing aromatherapy, all delivered to your home in Dubai.',
};

export default function MassagePage() {
  const massageServices = services.filter(s => s.category === 'Massage');

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Massage Therapy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Our approach to massage therapy is rooted in healing and personalization. Each session is tailored to address your unique needs, whether you seek to release chronic tension, recover from athletic activity, or simply find a moment of peace.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {massageServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
