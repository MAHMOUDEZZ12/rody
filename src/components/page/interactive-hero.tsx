
'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const spaImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/spa-hero.jpg?alt=media&token=1d0b1c0a-0b1a-4b0a-8b0a-1d0b1c0a0b1a";
const beautyImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/beauty-hero.jpg?alt=media&token=2e1b2c1a-1b2a-4c1a-9b1a-2e1b2c1a1b2a";


const CustomHandle = () => (
    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center cursor-ew-resize">
        <div className="w-2 h-8 bg-primary/50 rounded-full" />
    </div>
);


const HeroPanel = ({ title, description, href, className, buttonText }: { title: string; description: string; href: string; className?: string, buttonText: string }) => {
    return (
        <div className={cn("absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10", className)}>
             <div className="bg-black/50 p-8 rounded-lg animate-fade-in-up">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold">
                    {title}
                </h1>
                <p className="mt-4 md:text-xl text-lg text-neutral-200 max-w-2xl mx-auto">
                    {description}
                </p>
                <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
                    <Link href={href}>{buttonText}</Link>
                </Button>
            </div>
        </div>
    )
};


export function InteractiveHero() {

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <ReactCompareSlider
            handle={<CustomHandle />}
            itemOne={
                <div className="relative w-full h-full">
                    <ReactCompareSliderImage src={spaImage} alt="Wellness & SPA" />
                    <HeroPanel 
                        title="Wellness & SPA" 
                        description="Melt away stress and find your balance with our therapeutic massages and body treatments."
                        href="/services/massage"
                        buttonText='Explore SPA'
                    />
                </div>
            }
            itemTwo={
                 <div className="relative w-full h-full">
                    <ReactCompareSliderImage src={beautyImage} alt="Beauty & Nails" />
                    <HeroPanel 
                        title="Beauty & Nails" 
                        description="Enhance your natural radiance with our expert facials, lash artistry, and pristine nail care."
                        href="/services/facials"
                        buttonText='Explore Beauty'
                    />
                </div>
            }
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    </section>
  );
}
