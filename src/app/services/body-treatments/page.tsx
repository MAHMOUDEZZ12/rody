
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Body Treatments | Rody Wellness',
  description: 'Indulge in our luxurious body treatments, including exfoliating scrubs that leave your skin feeling soft, smooth, and revitalized.',
};

async function ServiceImage({ serviceId, alt }: { serviceId: string; alt: string }) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;
    const imageUrl = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
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
