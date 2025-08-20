
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
      'Artistry in Beauty: An elegant lifestyle photograph showing a woman admiring her flawless manicure in a luxurious setting, reflecting the Rody Wellness brand. The scene has artistic splashes of pink and gold, conveying luxury, creativity, and professionalism. The aesthetic should be bright, modern, and clean. High resolution, photorealistic.',
  });

  const beautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails') || s.categories.includes('Eyelashes'));
  
  const imagePromises = beautyServices.map(service => generateSimpleImage({
    prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", possibly featuring a client enjoying the treatment or a therapist in a branded uniform performing the service. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`
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
