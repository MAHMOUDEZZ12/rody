
import { BlogPageContent } from '@/components/page/blog-page-content';
import { blogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Rody Wellness Journal',
  description: 'Explore expert articles, tips, and insights on wellness, beauty, and self-care rituals from the specialists at Rody Wellness, your at-home spa in Dubai.',
};

export default function BlogPage() {
  const imageUrls: Record<string, string> = {};
  for (const post of blogPosts) {
    imageUrls[post.slug] = `/images/blog-${post.slug}.png`;
  }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BlogPageContent posts={blogPosts} imageUrls={imageUrls} />
    </Suspense>
  );
}
