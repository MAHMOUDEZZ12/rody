
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import { BlogPostContent } from '@/components/page/blog-post-content';


type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.category === post?.category && p.slug !== post?.slug).slice(0, 2);

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />;
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
