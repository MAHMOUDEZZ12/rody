
import { WellnessAndSpaClient } from '@/components/page/wellness-and-spa-client';
import { services } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Home Wellness & SPA Services',
  description: 'Explore our complete range of at-home wellness and spa treatments in Dubai, including therapeutic massages and revitalizing body scrubs to restore balance.',
};

export default function WellnessAndSpaPage() {
    const heroImageUrl = '/images/hero-wellness.png';
    
    const wellnessServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments'));
    const serviceImageUrls: Record<string, string> = {};
    for (const service of wellnessServices) {
        serviceImageUrls[service.id] = `/images/service-${service.id}.png`;
    }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <WellnessAndSpaClient heroImageUrl={heroImageUrl} serviceImageUrls={serviceImageUrls} />
    </Suspense>
  );
}
