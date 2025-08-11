
'use client';

import type { Package } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Tag } from 'lucide-react';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from './ui/badge';

interface PackageCardProps {
  pkg: Package;
}

function PackageImage({ pkg }: { pkg: Package }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({ title: pkg.name, content: pkg.description, dataAiHint: pkg.dataAiHint })
      .then(setImageUrl)
      .catch(console.error);
  }, [pkg]);

  if (!imageUrl) return <Skeleton className="w-full h-full" />;

  return (
    <Image
      src={imageUrl}
      alt={pkg.name}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-white/80 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <PackageImage pkg={pkg} />
          </Suspense>
          <Badge variant="destructive" className="absolute top-2 left-2 flex items-center gap-1"><Sparkles className="h-3 w-3" /> SURE OFFER</Badge>
          <Badge variant="secondary" className="absolute top-2 right-2">SAVE {Math.round(100 - (pkg.price / pkg.originalPrice) * 100)}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{pkg.name}</CardTitle>
        <CardDescription>{pkg.description}</CardDescription>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <ul className="list-disc list-inside text-sm">
            {pkg.services.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 font-semibold text-foreground">
            <Tag className="h-4 w-4 text-primary" />
            <div className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-lg">AED {pkg.price}</span>
                <span className="line-through text-muted-foreground text-sm">AED {pkg.originalPrice}</span>
            </div>
        </div>
        <Button asChild className="w-full rounded-full font-bold">
          <Link href="/services">
            Book Package <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
