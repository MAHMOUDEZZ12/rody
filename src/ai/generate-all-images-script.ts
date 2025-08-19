/**
 * @fileOverview A build-time script to generate all necessary static images for the website.
 * This script calls the AI image generation flow for all services, packages, blog posts,
 * and other assets, saving them to the public/images directory. This ensures that
 * all images are available statically at runtime, improving reliability and performance.
 */

import 'dotenv/config';
import { generateSimpleImage } from '../ai/flows/generate-simple-image-flow';
import { services, packages, professionals } from '../lib/data';
import { blogPosts } from '../lib/blog';
import * as fs from 'fs';
import * as path from 'path';

const imageDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

async function downloadAndSaveImage(imageUrl: string, fileName: string) {
  if (imageUrl.startsWith('data:')) {
    const base64Data = imageUrl.split(',')[1];
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(path.join(imageDir, fileName), buffer);
  } else {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        console.error(`Failed to fetch image: ${imageUrl}`);
        return;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(path.join(imageDir, fileName), buffer);
  }
  console.log(`Saved image: ${fileName}`);
}

async function generateAllImages() {
  console.log('Starting image generation...');

  if (!process.env.GEMINI_API_KEY) {
    console.error(
      'GEMINI_API_KEY is not set. Please create a .env file with your key.'
    );
    // Create a placeholder if the API key is not set to avoid build failures.
    const placeholderUrl = 'https://placehold.co/600x400.png';
    const response = await fetch(placeholderUrl);
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(path.join(imageDir, 'placeholder.png'), buffer);
    console.log("Created a placeholder image. Please add your API key to generate real images.");
    return;
  }
  
  // Generate Hero Images
  const heroImageUrl = await generateSimpleImage({
    prompt:
    'A breathtakingly serene and luxurious spa environment inside a modern Dubai villa. Soft, natural sunlight streams through large windows, illuminating elegant orchids, minimalist decor, and a tranquil water feature. The aesthetic is bright, airy, and impeccably clean, evoking a sense of profound peace and high-end sanctuary. Ultra-realistic, high-resolution photography.',
  });
  await downloadAndSaveImage(heroImageUrl, 'hero-home.png');

  const wellnessHeroUrl = await generateSimpleImage({
    prompt:
    'Sanctuary for the Senses: A tranquil, bright, and airy spa setting with a soft, golden light. The image features orchids, perfectly balanced stones, and a soft-focus background that evokes peace and wellness. This is a photorealistic, high-resolution photograph.',
  });
  await downloadAndSaveImage(wellnessHeroUrl, 'hero-wellness.png');

  const beautyHeroUrl = await generateSimpleImage({
    prompt:
    'Artistry in Beauty: An elegant, abstract beauty treatment setting. Features artistic splashes of pink and gold on a clean white background, conveying a sense of luxury, creativity, and professionalism. The aesthetic should be bright, modern, and clean. High resolution, photorealistic render.',
  });
  await downloadAndSaveImage(beautyHeroUrl, 'hero-beauty.png');
  
  // About Page Images
  const aboutImageUrl1 = await generateSimpleImage({
    prompt:
    'A photograph of a serene and luxurious home environment in Dubai, with soft natural light, elegant furniture, and a sense of peace and tranquility. The aesthetic is bright, airy, and modern. High resolution detail, photorealistic.',
  });
  await downloadAndSaveImage(aboutImageUrl1, 'about-1.png');

  const aboutImageUrl2 = await generateSimpleImage({
    prompt:
        'A professional and friendly female wellness therapist with a warm smile, wearing a clean, elegant uniform. The background should be a soft, out-of-focus luxury home interior, conveying trust and expertise. High resolution detail, photorealistic portrait.',
  });
  await downloadAndSaveImage(aboutImageUrl2, 'about-2.png');


  // Generate Service Images
  for (const service of services) {
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful and luxurious image representing a ${service.categories[0]} service. The image should be an artistic still-life that captures the essence of "${service.name}". Keywords for the mood are: ${service.dataAiHint}. Use professional product photography style with a clean, elegant background and bright lighting. High resolution.`,
    });
    await downloadAndSaveImage(imageUrl, `service-${service.id}.png`);
  }

  // Generate Package Images
  for (const pkg of packages) {
    const imageUrl = await generateSimpleImage({
      prompt: `A beautiful and luxurious flatlay composition representing a spa package. The theme should reflect the package name: "${pkg.name}". Keywords: ${pkg.dataAiHint}. Use clean, bright lighting on a minimalist background. The aesthetic should be elegant, aspirational, and high-end. Professional product photography, high resolution.`,
    });
    await downloadAndSaveImage(imageUrl, `package-${pkg.id}.png`);
  }

  // Generate Blog Post Images
  for (const post of blogPosts) {
    const imageUrl = await generateSimpleImage({
      prompt: `An artistic and luxurious image for a blog post about ${post.category}. The image should capture the essence of the title: "${post.title}". Keywords: ${post.dataAiHint}. Use professional photography style, clean background, elegant aesthetic, and high resolution.`,
    });
    await downloadAndSaveImage(imageUrl, `blog-${post.slug}.png`);
  }
  
  // Generate Professional Images
  for (const prof of professionals) {
      const imageUrl = await generateSimpleImage({
          prompt: `A warm and professional headshot of a female therapist. She should have a friendly and trustworthy expression. Name: ${prof.name}, Specialty: ${prof.specialty}. Keywords: ${prof.dataAiHint}. The background should be soft and professional. High-resolution, photorealistic portrait.`
      });
      await downloadAndSaveImage(imageUrl, `professional-${prof.id}.png`);
  }


  console.log('Image generation complete.');
}

generateAllImages();
