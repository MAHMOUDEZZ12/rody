
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import { BlogPostContent } from '@/components/page/blog-post-content';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

async function BlogPostImages({ post }: { post: (typeof blogPosts)[0]}) {
    const postImageUrl = await generateSimpleImage({
        prompt: `An artistic and luxurious lifestyle photograph for a blog post about ${post.category}, reflecting the Rody Wellness brand. The image should capture the essence of the title: "${post.title}". It can feature a person enjoying a serene moment related to the topic, or a high-end product shot with branded elements. Keywords: ${post.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`,
    });

    const relatedPosts = blogPosts.filter(p => p.category === post?.category && p.slug !== post?.slug).slice(0, 2);

    const relatedImagePromises = relatedPosts.map(p => generateSimpleImage({
        prompt: `An artistic and luxurious lifestyle photograph for a blog post about ${p.category}, reflecting the Rody Wellness brand. The image should capture the essence of the title: "${p.title}". It can feature a person enjoying a serene moment related to the topic, or a branded product. Keywords: ${p.dataAiHint}. Use professional photography style, clean background, elegant aesthetic with hints of soft pink and gold, and high resolution.`
    }));

    const relatedImageUrls = await Promise.all(relatedImagePromises);

    const relatedPostsImageUrls: Record<string, string> = {};
    relatedPosts.forEach((p, index) => {
        relatedPostsImageUrls[p.slug] = relatedImageUrls[index];
    });

    return <BlogPostContent post={post} relatedPosts={relatedPosts} postImageUrl={postImageUrl} relatedPostsImageUrls={relatedPostsImageUrls} />
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <BlogPostImages post={post} />
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
    description: post.subtitle,
  };
}
