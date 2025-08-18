
import { BlogPageContent } from '@/components/page/blog-page-content';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { blogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Blog | Rody Wellness',
  description: 'Explore articles on wellness, beauty, and self-care from the experts at Rody Wellness.',
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
