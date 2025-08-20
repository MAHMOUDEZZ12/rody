
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import Image from 'next/image';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Massage Therapy | Rody Wellness',
  description: 'Discover our range of bespoke massage therapies, from deep tissue to relaxing aromatherapy, all delivered to your home in Dubai.',
};

async function ServiceImage({ serviceId, alt }: { serviceId: string; alt: string }) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", possibly featuring a client in a serene state of relaxation receiving the massage from a therapist in a branded uniform. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`
    });
    return <ServiceCard service={service} imageUrl={imageUrl} theme="spa" />
}

export default function MassagePage() {
  const massageServices = services.filter(s => s.categories.includes('Massage'));

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
            <Suspense key={service.id} fallback={<Skeleton className="h-96 w-full" />}>
              <ServiceImage serviceId={service.id} alt={service.name} />
            </Suspense>
          ))}
        </div>
      </main>
    </div>
  );
}
