
import { HomeClient } from '@/components/page/home-client';
import { HeroSlider } from '@/components/page/hero-slider';
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
  // Hero Images for Slider
  const heroImagePrompts = [
    {
      title: 'Your Sanctuary, Delivered.',
      subtitle: 'Premium at-home wellness and beauty services in Dubai.',
      prompt:
        'A breathtakingly serene image of a woman with her eyes closed, receiving a luxurious massage in her beautiful Dubai home. A professional female therapist in an elegant, branded uniform with a subtle logo emblem is performing the treatment. Soft, natural sunlight streams through large windows, illuminating minimalist decor with soft pink and gold accents. Branded towels are neatly folded nearby. The aesthetic is bright, peaceful, and impeccably clean, evoking a sense of profound peace and high-end sanctuary. Ultra-realistic, high-resolution photography.',
    },
    {
      title: 'Artistry in Beauty',
      subtitle: 'Bespoke facials designed to reveal your natural radiance.',
      prompt:
        'A stunning close-up of a woman with glowing skin, enjoying a 24K Gold Facial. The therapist\'s hands, wearing nitrile gloves, are gently applying the gold leaf mask. The client is lying on a plush bed with branded, soft pink towels. The focus is on the luxurious texture of the gold and the client\'s blissful expression. High-end, professional photography.',
    },
    {
      title: 'Flawless from Fingertips to Toes',
      subtitle: 'Meticulous nail artistry in the comfort of your home.',
      prompt:
        'An elegant lifestyle photograph showing a woman admiring her flawless manicure in a luxurious home setting in Dubai. A professional female therapist in a branded uniform with a subtle emblem is visible in the soft-focus background, organizing her tools. The focus is on the perfectly polished nails. High resolution, photorealistic.',
    },
    {
      title: 'Revitalize Your Body & Mind',
      subtitle: 'Nourishing body treatments for silky smooth skin.',
      prompt:
        'A relaxing scene where a woman is lying on a massage table, having a Himalayan Salt Scrub applied to her back by a professional therapist in a branded uniform. The room is styled with orchids and soft lighting, creating a spa-like atmosphere. A branded towel is visible. The image evokes a sense of purification and renewal.',
    },
    {
      title: 'Captivating Eyes, Effortless Mornings',
      subtitle: 'Wake up beautiful with our stunning eyelash extensions.',
      prompt:
        'A close-up, artistic shot of a woman\'s eye, showcasing a perfect set of Russian Volume eyelash extensions. She is lying down comfortably, with a soft, branded headband keeping her hair back. The lighting is soft and flattering, highlighting the detail and artistry of the lash application.',
    },
  ];

  const heroImagePromises = heroImagePrompts.map(item => generateSimpleImage({ prompt: item.prompt }));

  // Services
  const allFeaturedServices = [
      ...services.filter(s => s.categories.includes('Massage')),
      ...services.filter(s => s.categories.includes('Body Treatments')),
      ...services.filter(s => s.categories.includes('Facials')),
      ...services.filter(s => s.categories.includes('Nails')),
      ...services.filter(s => s.categories.includes('Eyelashes')),
  ];
  const serviceImagePromises = allFeaturedServices.map(service => generateSimpleImage({
    prompt: `A beautiful and luxurious lifestyle photograph showing the experience of a ${service.categories[0]} service from Rody Wellness. The image should capture the essence of "${service.name}", featuring a client enjoying the treatment from a professional female therapist in an elegant uniform with a subtle brand emblem. Keywords for the mood are: ${service.dataAiHint}. Use professional photography style with a clean, elegant background featuring brand colors (soft pink, gold) and bright lighting. High resolution.`,
  }));

  // Packages
  const packageImagePromises = packages.map(pkg => generateSimpleImage({
    prompt: `A beautiful and luxurious lifestyle photograph representing a Rody Wellness spa package experience. The theme should reflect the package name: "${pkg.name}". The image should feature a person in a state of serene relaxation, perhaps wearing a branded robe or near branded towels in a luxurious home-spa environment. Use clean, bright lighting with brand colors of soft pink and gold. The aesthetic should be elegant, aspirational, and high-end. Professional photography, high resolution.`,
  }));
  
  // Blog
  const latestPost = blogPosts[0];
  const latestPostImagePromise = latestPost ? generateSimpleImage({
      prompt: `An artistic and luxurious lifestyle photograph for a Rody Wellness blog post about ${latestPost.category}. The image should capture the essence of the title: "${latestPost.title}". It can feature a person enjoying a serene moment related to the topic, or a product shot with branded elements. Keywords: ${latestPost.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`,
    }) : Promise.resolve('');


  const [
    heroImages, 
    serviceImages, 
    packageImages, 
    latestPostImageUrl
  ] = await Promise.all([
    Promise.all(heroImagePromises), 
    Promise.all(serviceImagePromises), 
    Promise.all(packageImagePromises), 
    latestPostImagePromise
  ]);

  const heroSlides = heroImagePrompts.map((item, index) => ({
    ...item,
    imageUrl: heroImages[index],
  }));

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
      <HeroSlider slides={heroSlides} />
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
