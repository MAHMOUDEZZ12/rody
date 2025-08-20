
import { BeautyClient } from '@/components/page/beauty-client';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'At-Home Beauty & Nail Services',
  description: 'Discover expert beauty treatments in Dubai. We offer bespoke facials, pristine nail artistry with gel & acrylics, and stunning eyelash extensions at your home.',
};

async function BeautyPageData() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
      'Artistry in Beauty: An elegant lifestyle photograph showing a woman admiring her flawless manicure in a luxurious home setting in Dubai. The scene is bright, modern, and clean, reflecting the Rody Wellness brand aesthetic. A professional female therapist in a branded uniform is visible in the soft-focus background, conveying luxury, creativity, and professionalism. High resolution, photorealistic.',
  });

  const beautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails') || s.categories.includes('Eyelashes'));
  
  const imagePromises = beautyServices.map(service => generateSimpleImage({
    prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", featuring a client enjoying the treatment from a professional female therapist in an elegant uniform. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`
  }));

  const resolvedImageUrls = await Promise.all(imagePromises);

  const serviceImageUrls: Record<string, string> = {};
  beautyServices.forEach((service, index) => {
    serviceImageUrls[service.id] = resolvedImageUrls[index];
  });

  return <BeautyClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />;
}

export default function BeautyPage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BeautyPageData />
    </Suspense>
  );
}
