
import type { Service } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Sparkles, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

async function ServiceImage({ service }: { service: Service }) {
  let imageUrl;
  try {
    imageUrl = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a ${service.category} service. Keywords: ${service.name}, ${service.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
  } catch (e) {
    console.error(e);
    imageUrl = service.image;
  }
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

interface ServiceCardProps {
  service: Service;
  highlight?: boolean;
  theme?: 'spa' | 'beauty';
}

export function ServiceCard({ service, highlight = false, theme = 'spa' }: ServiceCardProps) {
  const isDiscounted = service.originalPrice && service.originalPrice > service.price;
  const primaryColorClass = theme === 'beauty' ? 'text-beauty-primary' : 'text-spa-primary';
  const ringColorClass = theme === 'beauty' ? 'hover:border-beauty-primary/50' : 'hover:border-spa-primary/50';

  return (
    <Card className={cn(
        "flex flex-col overflow-hidden h-full transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-lg",
        ringColorClass,
        highlight && "border-primary/30 shadow-lg ring-2 ring-primary/20 shadow-primary/10"
      )}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
            <Suspense fallback={<Skeleton className='w-full h-full' />}>
                <ServiceImage service={service} />
            </Suspense>
          {isDiscounted && (
            <Badge variant="destructive" className="absolute top-2 left-2 flex items-center gap-1"><Sparkles className="h-3 w-3"/> SURE OFFER</Badge>
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
            <Tag className={cn("h-4 w-4", primaryColorClass)} />
            {isDiscounted ? (
              <div className="flex items-baseline gap-2">
                <span className={cn("font-bold", primaryColorClass)}>AED {service.price}</span>
                <span className="line-through text-muted-foreground text-xs">AED {service.originalPrice}</span>
              </div>
            ) : (
              <span>AED {service.price}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full rounded-full font-bold">
          <Link href={`/services/${service.id}`}>
            View Offer & Book <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
