
import { BlogPageContent } from '@/components/page/blog-page-content';
import { blogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'The Rody Wellness Journal',
  description: 'Explore expert articles, tips, and insights on wellness, beauty, and self-care rituals from the specialists at Rody Wellness, your at-home spa in Dubai.',
};

async function BlogImages() {
  const imagePromises = blogPosts.map(post => generateSimpleImage({
    prompt: `An artistic and luxurious lifestyle photograph for a blog post about ${post.category}, reflecting the Rody Wellness brand. The image should capture the essence of the title: "${post.title}". It can feature a person enjoying a serene moment related to the topic, or a high-end product shot with branded elements. Keywords: ${post.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`
  }));
  const resolvedImageUrls = await Promise.all(imagePromises);

  const imageUrls: Record<string, string> = {};
  blogPosts.forEach((post, index) => {
    imageUrls[post.slug] = resolvedImageUrls[index];
  });

  return <BlogPageContent posts={blogPosts} imageUrls={imageUrls} />;
}

export default function BlogPage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BlogImages />
    </Suspense>
  );
}
