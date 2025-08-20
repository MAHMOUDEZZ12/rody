
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Nail Services | Rody Wellness',
  description: 'Experience pristine nail care with our range of manicures, pedicures, and advanced enhancements like gel, polygel, and acrylics.',
};

async function ServiceImage({ serviceId, alt }: { serviceId: string; alt: string }) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. The image should be an artistic still-life that captures the essence of "${service.name}". Keywords for the mood are: ${service.dataAiHint}. Use professional product photography style with a clean, elegant background and bright lighting. High resolution.`
    });
    return <ServiceCard service={service} imageUrl={imageUrl} theme="beauty" />
}

export default function NailsPage() {
  const nailServices = services.filter(s => s.categories.includes('Nails'));

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
            <Suspense key={service.id} fallback={<Skeleton className="h-96 w-full" />}>
              <ServiceImage serviceId={service.id} alt={service.name} />
            </Suspense>
          ))}
        </div>
      </main>
    </div>
  );
}
