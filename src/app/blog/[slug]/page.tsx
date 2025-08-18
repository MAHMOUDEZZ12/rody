
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import { BlogPostContent } from '@/components/page/blog-post-content';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.category === post?.category && p.slug !== post?.slug).slice(0, 2);

  const postImageUrl = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${post.category}. Keywords: ${post.title}, ${post.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`});
  
  const relatedPostsImageUrls: Record<string, string> = {};
  for (const p of relatedPosts) {
    relatedPostsImageUrls[p.slug] = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${p.category}. Keywords: ${p.title}, ${p.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`});
  }


  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BlogPostContent post={post} relatedPosts={relatedPosts} postImageUrl={postImageUrl} relatedPostsImageUrls={relatedPostsImageUrls} />
    </Suspense>
  )
}

// Statically generate routes for each blog post
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Rody Wellness Blog`,
    description: post.content.substring(0, 160),
  };
}
