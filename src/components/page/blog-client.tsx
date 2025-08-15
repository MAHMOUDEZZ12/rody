
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function PostImage({ post }: { post: BlogPost }) {
  const imageUrl = await generateBlogImage({ title: post.title, content: post.content, dataAiHint: post.dataAiHint });

  return (
     <Image
        src={imageUrl}
        alt={post.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
  );
}

export function BlogClient() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          The Rody Wellness Journal
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your source for expert advice on beauty, relaxation, and self-care rituals.
        </p>
      </header>
      
      <main>
        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="block mb-16 group">
          <Card className="grid md:grid-cols-2 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                 {/* @ts-expect-error Async Server Component */}
                <PostImage post={featuredPost} />
              </Suspense>
            </div>
            <div className="flex flex-col p-8">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="font-headline text-3xl text-primary group-hover:underline">{featuredPost.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {featuredPost.content.split('\n\n')[0]}
                </p>
              </CardContent>
              <CardFooter>
                 <span className="font-semibold flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </CardFooter>
            </div>
          </Card>
        </Link>
        
        {/* Grid of Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Suspense fallback={<Skeleton className="w-full h-full" />}>
                       {/* @ts-expect-error Async Server Component */}
                      <PostImage post={post} />
                    </Suspense>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <h3 className="font-headline text-xl mb-2 group-hover:underline">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="font-semibold flex items-center text-sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
