
import { HomeClient } from '@/components/page/home-client';
import { InteractiveHero } from '@/components/page/interactive-hero';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { services, packages } from '@/lib/data';
import { blogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sure by Rody | Premium At-Home Spa & Beauty in Dubai',
  description: 'Experience the ultimate luxury of at-home wellness. Rody Spa offers premium massage, beauty, and spa treatments delivered to your door in Dubai.',
};


export default async function Home() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
    'Luxury Home Sanctuary: A beautiful and serene spa environment in a luxury home, soft lighting, orchids, and a sense of peace. The image should be bright and airy, with a luxury aesthetic. High resolution, photorealistic.',
  });

  const featuredSpaServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments')).slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails')).slice(0, 2);
  const featuredTreatmentServices = services.filter(s => s.categories.includes('Treatment')).slice(0, 2);
  const allFeaturedServices = [...featuredSpaServices, ...featuredBeautyServices, ...featuredTreatmentServices];
  
  const serviceImageUrls: Record<string, string> = {};
  for (const service of allFeaturedServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
  }

  const packageImageUrls: Record<string, string> = {};
  for(const pkg of packages) {
    packageImageUrls[pkg.id] = await generateSimpleImage({ prompt: `A beautiful and luxurious flatlay representing a spa package. Keywords: ${pkg.name}, ${pkg.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.` });
  }

  const latestPost = blogPosts[0];
  const latestPostImageUrl = latestPost ? await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${latestPost.category}. Keywords: ${latestPost.title}, ${latestPost.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`}) : '';


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
