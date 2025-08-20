
import { HomeClient } from '@/components/page/home-client';
import { InteractiveHero } from '@/components/page/interactive-hero';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { services, packages } from '@/lib/data';
import { blogPosts } from '@/lib/blog';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Sure by Rody | Premium At-Home Spa & Beauty in Dubai',
  description: 'Experience the ultimate luxury of at-home wellness. Rody Spa offers premium massage, beauty, and spa treatments delivered to your door in Dubai.',
};

async function HomePageData() {
  // Hero Image
  const heroImagePromise = generateSimpleImage({
    prompt:
      'A breathtakingly serene and luxurious spa environment inside a modern Dubai villa, styled with the Rody Wellness brand aesthetic. Soft, natural sunlight streams through large windows, illuminating elegant orchids, minimalist decor with soft pink and gold accents, and a tranquil water feature. The aesthetic is bright, airy, and impeccably clean, evoking a sense of profound peace and high-end sanctuary. Ultra-realistic, high-resolution photography.',
  });

  // Services
  const allFeaturedServices = [
      ...services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments')).slice(0, 2),
      ...services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails')).slice(0, 2),
      ...services.filter(s => s.categories.includes('Treatment')).slice(0, 2)
  ];
  const serviceImagePromises = allFeaturedServices.map(service => generateSimpleImage({
    prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service from Rody Wellness. The image should be an artistic still-life that captures the essence of "${service.name}". Keywords for the mood are: ${service.dataAiHint}. Use professional product photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution. Include a subtly branded element, like a product bottle with a simple "R" logo.`,
  }));

  // Packages
  const packageImagePromises = packages.map(pkg => generateSimpleImage({
    prompt: `A beautiful and luxurious flatlay composition representing a Rody Wellness spa package. The theme should reflect the package name: "${pkg.name}". Keywords: ${pkg.dataAiHint}. Use clean, bright lighting on a minimalist background with brand colors of soft pink and gold. The aesthetic should be elegant, aspirational, and high-end. Professional product photography, high resolution. Perhaps include a small, branded "Rody" tag on one of the items.`,
  }));
  
  // Blog
  const latestPost = blogPosts[0];
  const latestPostImagePromise = latestPost ? generateSimpleImage({
      prompt: `An artistic and luxurious image for a Rody Wellness blog post about ${latestPost.category}. The image should capture the essence of the title: "${latestPost.title}". Keywords: ${latestPost.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`,
    }) : Promise.resolve('');


  const [
    heroImageUrl, 
    serviceImages, 
    packageImages, 
    latestPostImageUrl
  ] = await Promise.all([
    heroImagePromise, 
    Promise.all(serviceImagePromises), 
    Promise.all(packageImagePromises), 
    latestPostImagePromise
  ]);

  const serviceImageUrls: Record<string, string> = {};
  allFeaturedServices.forEach((service, index) => {
    serviceImageUrls[service.id] = serviceImages[index];
  });

  const packageImageUrls: Record<string, string> = {};
  packages.forEach((pkg, index) => {
    packageImageUrls[pkg.id] = packageImages[index];
  });


  return (
    <>
      <InteractiveHero imageUrl={heroImageUrl} />
      <HomeClient 
        serviceImageUrls={serviceImageUrls} 
        packageImageUrls={packageImageUrls} 
        latestPostImageUrl={latestPostImageUrl}
      />
    </>
  )
}


export default function Home() {
  return (
    <Suspense fallback={<div className="container"><Skeleton className="h-screen w-full" /></div>}>
      <HomePageData />
    </Suspense>
  );
}
