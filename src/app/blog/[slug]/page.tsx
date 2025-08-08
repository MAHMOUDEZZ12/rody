import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

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

// Statically generate routes for each blog post
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

// Custom component to render markdown-like text
const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.split('\n').map((paragraph, index) => {
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return <h3 key={index} className="font-headline text-2xl mt-6 mb-2 text-primary">{paragraph.slice(2, -2)}</h3>;
        }
        if (paragraph.startsWith('- ')) {
            return <p key={index} className="ml-4">{paragraph}</p>;
        }
        return <p key={index} className="mb-4">{paragraph}</p>;
      })}
    </div>
  );
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  const relatedPosts = blogPosts.filter(p => p.category === post?.category && p.slug !== post?.slug).slice(0, 2);

  if (!post) {
    notFound();
  }

  const [imageUrl, relatedImages] = await Promise.all([
    generateBlogImage({ title: post.title, content: post.content, dataAiHint: post.dataAiHint }),
    Promise.all(relatedPosts.map(p => generateBlogImage({ title: p.title, content: p.content, dataAiHint: p.dataAiHint })))
  ]);


  return (
    <article className="container max-w-4xl px-4 py-12">
      <Link href="/blog" className="flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
            </div>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground">{post.subtitle}</p>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12">
        <Image src={imageUrl} alt={post.title} layout="fill" objectFit="cover" />
      </div>

      <div className="text-lg leading-relaxed space-y-6">
        <MarkdownContent content={post.content} />
      </div>

      {relatedPosts.length > 0 && (
        <aside className="mt-16 border-t pt-8">
            <h2 className="font-headline text-2xl text-primary mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-8">
                {relatedPosts.map((related, index) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                        <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                            <div className="relative h-40 w-full">
                               <Image src={relatedImages[index]} alt={related.title} layout="fill" objectFit="cover" />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-headline text-lg group-hover:underline">{related.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{related.date}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </aside>
      )}

      <div className="mt-16 text-center">
        <Button asChild size="lg" className="rounded-full font-bold">
            <Link href="/#services">Explore Our Services</Link>
        </Button>
      </div>
    </article>
  );
}
