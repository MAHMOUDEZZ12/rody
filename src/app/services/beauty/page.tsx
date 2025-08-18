
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
    'Artistry in Beauty: An elegant, abstract beauty treatment setting. Features artistic splashes of pink and gold on a clean white background, conveying a sense of luxury, creativity, and professionalism. The aesthetic should be bright, modern, and clean. High resolution, photorealistic render.',
  });

  const beautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails') || s.categories.includes('Eyelashes'));
  const serviceImageUrls: Record<string, string> = {};
  for (const service of beautyServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. The image should be an artistic still-life that captures the essence of "${service.name}". Keywords for the mood are: ${service.dataAiHint}. Use professional product photography style with a clean, elegant background and bright lighting. High resolution.`});
  }


  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BeautyClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
