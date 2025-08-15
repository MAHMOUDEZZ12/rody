
'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';

function HeroImages() {
    return (
         <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={`https://placehold.co/1600x900.png`} data-ai-hint="serene spa setting orchids" alt="Serene spa setting" />}
            itemTwo={<ReactCompareSliderImage src={`https://placehold.co/1600x900.png`} data-ai-hint="elegant beauty treatment" alt="Elegant beauty treatment setting" />}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}

export function InteractiveHero() {

    return (
        <section className="relative h-[80vh] w-full text-white">
            <style jsx global>{`
                .rcs-handle-root {
                    width: 56px !important;
                    height: 56px !important;
                }
                .rcs-handle-root button {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                    backdrop-filter: blur(4px) !important;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
                    border: 2px solid white !important;
                }
                .rcs-handle-root button div {
                    background-color: hsl(var(--primary)) !important;
                    height: 28px !important;
                }
                 .rcs-handle-root button svg {
                    color: hsl(var(--primary)) !important;
                    width: 24px !important;
                    height: 24px !important;
                }
            `}</style>
            
            <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <HeroImages />
            </Suspense>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 text-center p-4 pointer-events-none">
                <div className="pointer-events-auto">
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
            </div>
        </section>
    );
}
