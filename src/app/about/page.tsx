
import { AboutClient } from '@/components/page/about-client';
import { Card, CardContent } from '@/components/ui/card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service, delivering a five-star sanctuary to your door.',
};

async function AboutImages() {
  const [imageUrl1, imageUrl2] = await Promise.all([
    generateSimpleImage({
      prompt:
        'A photograph of a serene and luxurious home environment in Dubai, with soft natural light, elegant furniture, and a sense of peace and tranquility. The aesthetic is bright, airy, and modern, reflecting the Rody Wellness brand colors of soft pink and gold. High resolution detail, photorealistic.',
    }),
    generateSimpleImage({
      prompt:
        'A professional and friendly female wellness therapist with a warm smile, wearing a clean, elegant uniform with a subtle, abstract brand emblem on it. The background should be a soft, out-of-focus luxury home interior, conveying trust and expertise. High resolution detail, photorealistic portrait.',
    }),
  ]);

  return <AboutClient imageUrl1={imageUrl1} imageUrl2={imageUrl2} />;
}


export default function AboutUsPage() {
  return (
    <div className="container max-w-5xl px-4 py-12">
        <Alert className="mb-8">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Seeing Placeholder Images?</AlertTitle>
          <AlertDescription>
            To see your AI-generated images on the live site, you must add your Gemini API Key as a secret to your production environment. Please see the updated instructions in the README.md file.
          </AlertDescription>
        </Alert>
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
                <Suspense fallback={<div className="space-y-4"><Skeleton className="h-96 w-full" /><Skeleton className="h-96 w-full" /></div>}>
                    <AboutImages />
                </Suspense>
            </CardContent>
        </Card>
    </div>
  );
}
