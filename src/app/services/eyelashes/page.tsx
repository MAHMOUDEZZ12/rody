
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Eyelash Services | Rody Wellness',
  description: 'Enhance your eyes with our professional eyelash services, including classic and Russian volume extensions, lash lifts, and tints.',
};

async function ServiceImage({ serviceId, alt }: { serviceId: string; alt: string }) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful, artistic close-up photograph of a woman's eye, showcasing the result of the "${service.name}" eyelash service from Rody Wellness. She is relaxed in a luxurious home spa setting. A professional female therapist in an elegant uniform with a subtle brand emblem is visible in the soft-focus background. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`
    });
    return <ServiceCard service={service} imageUrl={imageUrl} theme="beauty" />
}


export default function EyelashesPage() {
  const eyelashServices = services.filter(s => s.categories.includes('Eyelashes'));

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
             <Suspense key={service.id} fallback={<Skeleton className="h-96 w-full" />}>
              <ServiceImage serviceId={service.id} alt={service.name} />
            </Suspense>
          ))}
        </div>
      </main>
    </div>
  );
}
