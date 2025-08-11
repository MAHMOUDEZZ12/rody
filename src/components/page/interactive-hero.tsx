
'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Suspense, useEffect, useState } from 'react';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '../ui/skeleton';


const spaImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/R%2FUntitled-2%20(1).png?alt=media&token=6626e426-3886-44ec-ac73-ac1a3fd5591e";
const beautyImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/R%2FUntitled-3%20(2).png?alt=media&token=97ed2705-acc6-4297-8527-3aae62a4927e";


const CustomHandle = () => (
    <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center cursor-ew-resize border border-border">
        <div className="w-2 h-8 bg-primary/50 rounded-full" />
    </div>
);

const HeroPanel = ({ title, description, href, buttonText, theme }: { title: string; description:string; href: string; buttonText: string, theme: 'spa' | 'beauty' }) => {
    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center text-white p-4">
             <div className="bg-black/60 p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <h1 className={cn("font-headline text-4xl md:text-5xl lg:text-7xl font-bold",
                    theme === 'beauty' ? 'text-beauty-primary' : 'text-spa-primary'
                )}>
                    {title}
                </h1>
                <p className="mt-4 md:text-xl text-lg text-neutral-200 max-w-2xl mx-auto">
                    {description}
                </p>
                <Button 
                    asChild 
                    size="lg" 
                    className={cn(
                        "mt-8 rounded-full font-bold text-base px-8 py-6 pointer-events-auto",
                         theme === 'beauty' ? "bg-beauty-primary text-beauty-primary-foreground hover:bg-beauty-primary/90" : "bg-spa-primary text-spa-primary-foreground hover:bg-spa-primary/90"
                    )}
                >
                    <Link href={href}>{buttonText}</Link>
                </Button>
            </div>
        </div>
    )
};

function GeneratedHeroImage({ title, content, dataAiHint, alt }: { title: string, content: string, dataAiHint: string, alt: string }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        generateBlogImage({ title, content, dataAiHint })
            .then(setImageUrl)
            .catch(console.error);
    }, [title, content, dataAiHint]);

    if (!imageUrl) {
        return <Skeleton className="w-full h-full" />;
    }

    return (
        <ReactCompareSliderImage
            src={imageUrl}
            alt={alt}
        />
    )
}

export function InteractiveHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
        <Suspense fallback={<div className="w-full h-full grid grid-cols-2"><Skeleton className="w-full h-full rounded-none" /><Skeleton className="w-full h-full rounded-none" /></div>}>
            <ReactCompareSlider
                handle={<CustomHandle />}
                itemOne={
                    <GeneratedHeroImage 
                        title="Wellness & SPA"
                        content="A serene, luxurious spa setting with orchids, balanced stones, and soft, natural lighting."
                        dataAiHint="serene spa"
                        alt="Wellness & SPA"
                    />
                }
                itemTwo={
                    <GeneratedHeroImage 
                        title="Beauty & Nails"
                        content="An elegant and artistic flat lay of luxury beauty products, nail polish bottles, and makeup brushes on a pink marble background."
                        dataAiHint="luxury beauty products"
                        alt="Beauty & Nails" 
                    />
                }
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </Suspense>
        <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
                <HeroPanel 
                    title="Wellness & SPA" 
                    description="Melt away stress and find your balance with our therapeutic massages and body treatments."
                    href="/services/wellness-and-spa"
                    buttonText='Explore SPA'
                    theme="spa"
                />
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
                <HeroPanel 
                    title="Beauty & Nails" 
                    description="Enhance your natural radiance with our expert facials, lash artistry, and pristine nail care."
                    href="/services/beauty"
                    buttonText='Explore Beauty'
                    theme="beauty"
                />
            </div>
        </div>
    </section>
  );
}
