
import { HomeClient } from '@/components/page/home-client';
import { InteractiveHero } from '@/components/page/interactive-hero';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { services, packages } from '@/lib/data';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Sure by Rody | Premium At-Home Spa & Beauty in Dubai',
  description: 'Experience the ultimate luxury of at-home wellness. Rody Spa offers premium massage, beauty, and spa treatments delivered to your door in Dubai.',
};


export default function Home() {
  const heroImageUrl = '/images/hero-home.png';

  const allFeaturedServices = [
      ...services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments')).slice(0, 2),
      ...services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails')).slice(0, 2),
      ...services.filter(s => s.categories.includes('Treatment')).slice(0, 2)
  ];
  
  const serviceImageUrls: Record<string, string> = {};
  for (const service of allFeaturedServices) {
    serviceImageUrls[service.id] = `/images/service-${service.id}.png`;
  }

  const packageImageUrls: Record<string, string> = {};
  for(const pkg of packages) {
    packageImageUrls[pkg.id] = `/images/package-${pkg.id}.png`;
  }

  const latestPost = blogPosts[0];
  const latestPostImageUrl = latestPost ? `/images/blog-${latestPost.slug}.png` : '';


  return (
    <>
      <Suspense fallback={<Skeleton className="h-[70vh] w-full" />}>
        <InteractiveHero imageUrl={heroImageUrl} />
      </Suspense>
      <Suspense fallback={<div className="container"><Skeleton className="h-screen w-full" /></div>}>
        <HomeClient 
            serviceImageUrls={serviceImageUrls} 
            packageImageUrls={packageImageUrls} 
            latestPostImageUrl={latestPostImageUrl}
        />
      </Suspense>
    </>
  );
}
