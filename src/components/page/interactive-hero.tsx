
'use client';

import { Suspense, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';

function HeroImage({
  dataAiHint,
  title,
  alt
}: {
  dataAiHint: string;
  title: string;
  alt: string;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({ title, content: dataAiHint, dataAiHint })
      .then(setImageUrl)
      .catch(console.error);
  }, [title, dataAiHint]);

  if (!imageUrl) {
    return <Skeleton className="w-full h-full" />;
  }

  return (
    <ReactCompareSliderImage
      src={imageUrl}
      alt={alt}
    />
  );
}

export function InteractiveHero() {
    return (
        <section className="relative h-[80vh] w-full text-white">
            <style jsx global>{`
                .rcs-handle-root {
                    width: 48px !important;
                    height: 48px !important;
                }
                .rcs-handle-root button {
                    background-color: rgba(255, 255, 255, 0.8) !important;
                    backdrop-filter: blur(4px) !important;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
                    border: 2px solid white !important;
                }
                .rcs-handle-root button div {
                    background-color: hsl(var(--primary)) !important;
                    height: 24px !important;
                }
                 .rcs-handle-root button svg {
                    color: hsl(var(--primary)) !important;
                    width: 18px !important;
                    height: 18px !important;
                }
            `}</style>
            <ReactCompareSlider
                itemOne={
                    <Suspense fallback={<Skeleton className="w-full h-full" />}>
                        <HeroImage
                            dataAiHint="serene spa setting with orchids and balanced stones"
                            title="Sanctuary for the Senses"
                            alt="Serene spa setting"
                        />
                    </Suspense>
                }
                itemTwo={
                     <Suspense fallback={<Skeleton className="w-full h-full" />}>
                        <HeroImage
                            dataAiHint="elegant beauty treatment setting with soft pink tones"
                            title="Artistry in Beauty"
                            alt="Elegant beauty treatment setting"
                        />
                    </Suspense>
                }
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 text-center p-4">
                <h1 className="font-headline text-4xl md:text-6xl font-bold animate-fade-in-up"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    Your Sanctuary, Delivered.
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up"
                    style={{ animationDelay: '0.3s', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    Premium at-home wellness and beauty services in Dubai.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-full font-bold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Link href="#services">Explore Services</Link>
                </Button>
            </div>
        </section>
    );
}
