
import { AboutClient } from '@/components/page/about-client';
import { Card, CardContent } from '@/components/ui/card';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service, delivering a five-star sanctuary to your door.',
};

export default async function AboutUsPage() {
  const imageUrl1 = await generateSimpleImage({
    prompt:
    'A photograph of a serene and luxurious home environment in Dubai, with soft natural light, elegant furniture, and a sense of peace and tranquility. The aesthetic is bright, airy, and modern. High resolution detail, photorealistic.',
  });
  const imageUrl2 = await generateSimpleImage({
    prompt:
        'A professional and friendly female wellness therapist with a warm smile, wearing a clean, elegant uniform. The background should be a soft, out-of-focus luxury home interior, conveying trust and expertise. High resolution detail, photorealistic portrait.',
  });

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
