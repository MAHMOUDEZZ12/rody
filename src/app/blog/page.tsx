
import { BlogPageContent } from '@/components/page/blog-page-content';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { blogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Rody Wellness Journal',
  description: 'Explore expert articles, tips, and insights on wellness, beauty, and self-care rituals from the specialists at Rody Wellness, your at-home spa in Dubai.',
};

export default async function BlogPage() {
  const imageUrls: Record<string, string> = {};
  for (const post of blogPosts) {
    imageUrls[post.slug] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${post.category}. Keywords: ${post.title}, ${post.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`});
  }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BlogPageContent posts={blogPosts} imageUrls={imageUrls} />
    </Suspense>
  );
}
