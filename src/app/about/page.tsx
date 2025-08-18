
import { AboutClient } from '@/components/page/about-client';
import { Card, CardContent } from '@/components/ui/card';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'About Us | Rody Wellness',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service.',
};

export default async function AboutUsPage() {
  const imageUrl1 = await generateSimpleImage({
    prompt:
    'A serene and luxurious home environment, with soft natural light, elegant furniture, and a sense of peace and tranquility. Bright and airy aesthetic. High resolution detail, photorealistic.',
  });
  const imageUrl2 = await generateSimpleImage({
    prompt:
        'A professional and friendly wellness therapist with a warm smile, wearing a clean uniform. The background should be soft and out of focus, conveying trust and expertise. High resolution detail, photorealistic.',
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
