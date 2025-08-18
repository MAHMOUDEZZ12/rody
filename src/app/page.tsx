
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
    'A breathtakingly serene and luxurious spa environment inside a modern Dubai villa. Soft, natural sunlight streams through large windows, illuminating elegant orchids, minimalist decor, and a tranquil water feature. The aesthetic is bright, airy, and impeccably clean, evoking a sense of profound peace and high-end sanctuary. Ultra-realistic, high-resolution photography.',
  });

  const featuredSpaServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments')).slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails')).slice(0, 2);
  const featuredTreatmentServices = services.filter(s => s.categories.includes('Treatment')).slice(0, 2);
  const allFeaturedServices = [...featuredSpaServices, ...featuredBeautyServices, ...featuredTreatmentServices];
  
  const serviceImageUrls: Record<string, string> = {};
  for (const service of allFeaturedServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `An artistic and luxurious lifestyle photograph representing a ${service.categories[0]} service. The image should feature elements related to the service: ${service.name} and its key benefit: ${service.dataAiHint}. The setting is a clean, elegant, and bright. The overall aesthetic is one of premium quality and relaxation. High-resolution, professional product photography.`});
  }

  const packageImageUrls: Record<string, string> = {};
  for(const pkg of packages) {
    packageImageUrls[pkg.id] = await generateSimpleImage({ prompt: `A beautiful and luxurious flatlay composition representing a spa package. Keywords for the mood are: ${pkg.name}, ${pkg.dataAiHint}. Use clean, bright lighting on a minimalist background. The aesthetic should be elegant, aspirational, and high-end. Professional product photography, high resolution.` });
  }

  const latestPost = blogPosts[0];
  const latestPostImageUrl = latestPost ? await generateSimpleImage({prompt: `A beautiful, editorial-style image for a luxury wellness blog post about "${latestPost.title}". The image should visually capture the essence of: ${latestPost.dataAiHint}. Use a professional photography style with a clean, bright background, an elegant aesthetic, and high resolution.`}) : '';


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
