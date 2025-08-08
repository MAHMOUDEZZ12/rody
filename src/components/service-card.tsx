
'use client';

import type { Service } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Gift, Tag } from 'lucide-react';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

function ServiceImage({ service }: { service: Service }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({ title: service.name, content: service.description, dataAiHint: service.dataAiHint })
      .then(setImageUrl)
      .catch(console.error);
  }, [service]);

  if (!imageUrl) return <Skeleton className="w-full h-full" />;

  return (
    <Image
      src={imageUrl}
      alt={service.name}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  const isDiscounted = service.originalPrice && service.originalPrice > service.price;
  const isBeauty = ['Nails', 'Facials', 'Eyelashes', 'Body Treatments'].includes(service.category);
  
  const primaryColor = isBeauty ? 'hsl(var(--beauty))' : 'hsl(var(--primary))';
  const hoverBorderColor = isBeauty ? 'hover:border-beauty/50' : 'hover:border-primary/50';
  const hoverShadowColor = isBeauty ? 'hover:shadow-pink-500/10' : 'hover:shadow-primary/10';

  return (
    <Card className={cn("flex flex-col overflow-hidden h-full transition-all duration-300 bg-card", hoverBorderColor, hoverShadowColor)}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <ServiceImage service={service} />
          </Suspense>
          {isDiscounted && (
            <Badge variant="destructive" className="absolute top-2 right-2">SALE</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Tag className="h-4 w-4" style={{ color: primaryColor }} />
            {isDiscounted ? (
              <div className="flex items-baseline gap-2">
                <span className="text-destructive font-bold">AED {service.price}</span>
                <span className="line-through text-muted-foreground text-xs">AED {service.originalPrice}</span>
              </div>
            ) : (
              <span>AED {service.price}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-2">
        <Button asChild className="w-full rounded-full font-bold" style={{ backgroundColor: primaryColor }}>
          <Link href={`/services/${service.id}`}>
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
         <Button asChild variant="outline" className="w-full rounded-full font-bold">
          <Link href={`/services/${service.id}?gift=true`}>
            Gift it Now <Gift className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
