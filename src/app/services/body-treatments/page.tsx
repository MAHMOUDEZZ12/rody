
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Body Treatments | Rody Wellness',
  description: 'Indulge in our luxurious body treatments, including exfoliating scrubs that leave your skin feeling soft, smooth, and revitalized.',
};

async function ServiceImage({ serviceId, alt }: { serviceId: string; alt: string }) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", possibly featuring a client enjoying the treatment or a therapist in a branded uniform performing the service. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`
    });
    return <ServiceCard service={service} imageUrl={imageUrl} theme="spa" />
}

export default function BodyTreatmentsPage() {
  const bodyServices = services.filter(s => s.categories.includes('Body Treatments'));

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
            <Suspense key={service.id} fallback={<Skeleton className="h-96 w-full" />}>
              <ServiceImage serviceId={service.id} alt={service.name} />
            </Suspense>
          ))}
        </div>
      </main>
    </div>
  );
}
