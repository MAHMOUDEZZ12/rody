
import { BeautyClient } from '@/components/page/beauty-client';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Home Beauty & Nail Services',
  description: 'Discover expert beauty treatments in Dubai. We offer bespoke facials, pristine nail artistry with gel & acrylics, and stunning eyelash extensions at your home.',
};

export default function BeautyPage() {
  const heroImageUrl = '/images/hero-beauty.png';

  const beautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails') || s.categories.includes('Eyelashes'));
  const serviceImageUrls: Record<string, string> = {};
  for (const service of beautyServices) {
    serviceImageUrls[service.id] = `/images/service-${service.id}.png`;
  }


  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BeautyClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
