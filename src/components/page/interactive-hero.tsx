
'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const spaImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/high-quality-spa.jpg?alt=media&token=c191a32a-abce-4a7b-8356-02e48c48a804";
const beautyImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/high-quality-beauty.jpg?alt=media&token=7c1c5a1a-0e3a-4e3a-867c-941913c7a3dd";


const CustomHandle = () => (
    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center cursor-ew-resize">
        <div className="w-2 h-8 bg-primary/50 rounded-full" />
    </div>
);


const HeroPanel = ({ title, description, href, buttonText, theme }: { title: string; description:string; href: string; buttonText: string, theme: 'spa' | 'beauty' }) => {
    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center text-white p-4">
             <div className="bg-black/50 p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold">
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
                        theme === 'spa' && "bg-spa-primary text-spa-primary-foreground hover:bg-spa-primary/90",
                        theme === 'beauty' && "bg-beauty-primary text-beauty-primary-foreground hover:bg-beauty-primary/90"
                    )}
                >
                    <Link href={href}>{buttonText}</Link>
                </Button>
            </div>
        </div>
    )
};


export function InteractiveHero() {

  return (
    <section className="relative h-screen w-full overflow-hidden">
        <ReactCompareSlider
            handle={<CustomHandle />}
            itemOne={
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns" style={{backgroundImage: `url(${spaImage})`}} />
                     <ReactCompareSliderImage 
                        srcSet={spaImage}
                        alt="Wellness & SPA"
                    />
                    <HeroPanel 
                        title="Wellness & SPA" 
                        description="Melt away stress and find your balance with our therapeutic massages and body treatments."
                        href="/services/massage"
                        buttonText='Explore SPA'
                        theme="spa"
                    />
                </div>
            }
            itemTwo={
                 <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns" style={{backgroundImage: `url(${beautyImage})`}} />
                     <ReactCompareSliderImage 
                        srcSet={beautyImage}
                        alt="Beauty & Nails" 
                    />
                    <HeroPanel 
                        title="Beauty & Nails" 
                        description="Enhance your natural radiance with our expert facials, lash artistry, and pristine nail care."
                        href="/services/facials"
                        buttonText='Explore Beauty'
                        theme="beauty"
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
