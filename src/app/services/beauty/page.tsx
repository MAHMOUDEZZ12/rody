
import { BeautyClient } from '@/components/page/beauty-client';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Home Beauty & Nail Services',
  description: 'Discover expert beauty treatments in Dubai. We offer bespoke facials, pristine nail artistry with gel & acrylics, and stunning eyelash extensions at your home.',
};

export default async function BeautyPage() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
    'Artistry in Beauty: An elegant beauty treatment setting, with artistic pink background and splashes of color, a sense of luxury and professionalism. Bright and clean aesthetic, high resolution, photorealistic.',
  });

  const beautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails') || s.categories.includes('Eyelashes'));
  const serviceImageUrls: Record<string, string> = {};
  for (const service of beautyServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
  }


  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BeautyClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
