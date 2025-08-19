
import { AboutClient } from '@/components/page/about-client';
import { Card, CardContent } from '@/components/ui/card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service, delivering a five-star sanctuary to your door.',
};

export default function AboutUsPage() {
  const imageUrl1 = '/images/about-1.png';
  const imageUrl2 = '/images/about-2.png';

  return (
    <div className="container max-w-5xl px-4 py-12">
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
                <Suspense fallback={<div className="space-y-4"><Skeleton className="h-96 w-full" /><Skeleton className="h-96 w-full" /></div>}>
                    <AboutClient imageUrl1={imageUrl1} imageUrl2={imageUrl2} />
                </Suspense>
            </CardContent>
        </Card>
    </div>
  );
}
