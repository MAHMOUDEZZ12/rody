
import { WellnessAndSpaClient } from '@/components/page/wellness-and-spa-client';
import { services } from '@/lib/data';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Wellness & SPA | Rody Wellness',
  description: 'Explore our complete range of wellness and spa treatments, including therapeutic massages and revitalizing body scrubs, designed to restore balance and rejuvenate your body and mind.',
};

export default async function WellnessAndSpaPage() {
    const heroImageUrl = await generateSimpleImage({
        prompt:
        'Sanctuary for the Senses: A tranquil, bright, and airy spa setting with golden light, orchids and balanced stones, soft focus background. A sense of peace and wellness. High resolution, photorealistic.',
    });
    
    const wellnessServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments'));
    const serviceImageUrls: Record<string, string> = {};
    for (const service of wellnessServices) {
        serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
    }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <WellnessAndSpaClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
