
import { WellnessAndSpaClient } from '@/components/page/wellness-and-spa-client';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'At-Home Wellness & SPA Services',
  description: 'Explore our complete range of at-home wellness and spa treatments in Dubai, including therapeutic massages and revitalizing body scrubs to restore balance.',
};

async function WellnessPageData() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
      'Sanctuary for the Senses: A tranquil, bright, and airy photograph of a woman enjoying a spa experience in her home, reflecting the Rody Wellness brand. The scene has a soft, golden light and features orchids, balanced stones, and a soft-focus background that evokes peace and wellness, with hints of the brand\'s pink and gold colors. This is a photorealistic, high-resolution photograph.',
  });

  const wellnessServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments'));
  
  const imagePromises = wellnessServices.map(service => generateSimpleImage({
    prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", possibly featuring a client in a serene state of relaxation receiving the treatment from a therapist in a branded uniform. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`
  }));

  const resolvedImageUrls = await Promise.all(imagePromises);

  const serviceImageUrls: Record<string, string> = {};
  wellnessServices.forEach((service, index) => {
    serviceImageUrls[service.id] = resolvedImageUrls[index];
  });

  return <WellnessAndSpaClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />;
}

export default function WellnessAndSpaPage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <WellnessPageData />
    </Suspense>
  );
}
