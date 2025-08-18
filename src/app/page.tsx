
import { HomeClient } from '@/components/page/home-client';
import { InteractiveHero } from '@/components/page/interactive-hero';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { services, packages, blogPosts } from '@/lib/data';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default async function Home() {
  const heroImageUrl = await generateSimpleImage({
    prompt:
    'Luxury Home Sanctuary: A beautiful and serene spa environment in a luxury home, soft lighting, orchids, and a sense of peace. The image should be bright and airy, with a luxury aesthetic. High resolution, photorealistic.',
  });

  const featuredSpaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments').slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.category === 'Facials' || s.category === 'Nails').slice(0, 2);
  const allFeaturedServices = [...featuredSpaServices, ...featuredBeautyServices];
  
  const serviceImageUrls: Record<string, string> = {};
  for (const service of allFeaturedServices) {
    serviceImageUrls[service.id] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.category} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
  }

  const packageImageUrls: Record<string, string> = {};
  for(const pkg of packages) {
    packageImageUrls[pkg.id] = await generateSimpleImage({ prompt: `A beautiful and luxurious flatlay representing a spa package. Keywords: ${pkg.name}, ${pkg.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.` });
  }

  const latestPost = blogPosts[0];
  const latestPostImageUrl = latestPost ? await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${latestPost.category}. Keywords: ${latestPost.title}, ${latestPost.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`}) : '';


  return (
    <>
      <Suspense fallback={<Skeleton className="h-[80vh] w-full" />}>
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
