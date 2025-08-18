
import { WellnessAndSpaClient } from '@/components/page/wellness-and-spa-client';
import { services } from '@/lib/data';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Home Wellness & SPA Services',
  description: 'Explore our complete range of at-home wellness and spa treatments in Dubai, including therapeutic massages and revitalizing body scrubs to restore balance.',
};

export default async function WellnessAndSpaPage() {
    const heroImageUrl = await generateSimpleImage({
        prompt:
        'Sanctuary for the Senses: A tranquil, bright, and airy spa setting with a soft, golden light. The image features orchids, perfectly balanced stones, and a soft-focus background that evokes peace and wellness. This is a photorealistic, high-resolution photograph.',
    });
    
    const wellnessServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments'));
    const serviceImageUrls: Record<string, string> = {};
    for (const service of wellnessServices) {
        serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. The image should be an artistic still-life that captures the essence of "${service.name}". Keywords for the mood are: ${service.dataAiHint}. Use professional product photography style with a clean, elegant background and bright lighting. High resolution.`});
    }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <WellnessAndSpaClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
