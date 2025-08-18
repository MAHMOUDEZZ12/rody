
import { BeautyClient } from '@/components/page/beauty-client';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Beauty & Nails | Rody Wellness',
  description: 'Explore our expert beauty treatments, including bespoke facials, pristine nail artistry, and stunning eyelash extensions.',
};

export default async function BeautyPage() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
    'Artistry in Beauty: An elegant beauty treatment setting, with artistic pink background and splashes of color, a sense of luxury and professionalism. Bright and clean aesthetic, high resolution, photorealistic.',
  });

  const beautyServices = services.filter(s => s.category === 'Facials' || s.category === 'Nails' || s.category === 'Eyelashes');
  const serviceImageUrls: Record<string, string> = {};
  for (const service of beautyServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.category} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
  }


  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BeautyClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
