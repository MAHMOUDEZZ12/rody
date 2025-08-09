
'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const spaImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/360_F_561448547_ma1OzwUti7YFlxZaNsLYhHhz7l41vl1m.jpg?alt=media&token=25f072b5-808f-4dac-bb96-942ac1e9b9c2";
const beautyImage = "https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/bright-summer-tropical-background-with-colorful-palm-leaves-and-bokeh-effects-trendy-botanical-wallpaper-with-blue-pink-yellow-colors-festive-mood-wide-banner-copy-space-mockup-for-design-photo.jpeg?alt=media&token=83f73be6-8a59-42b4-8ab5-332f0b4726cc";


const CustomHandle = () => (
    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center cursor-ew-resize">
        <div className="w-2 h-8 bg-primary/50 rounded-full" />
    </div>
);


const HeroPanel = ({ title, description, href, buttonText, theme, position }: { title: string; description:string; href: string; buttonText: string, theme: 'spa' | 'beauty', position: 'left' | 'right' }) => {
    return (
        <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10 pointer-events-none",
             position === 'left' ? 'w-1/2 left-0' : 'w-1/2 right-0'
            )}>
             <div className="bg-black/50 p-8 rounded-lg animate-fade-in-up animation-delay-500">
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
        <HeroPanel 
            title="Wellness & SPA" 
            description="Melt away stress and find your balance with our therapeutic massages and body treatments."
            href="/services/massage"
            buttonText='Explore SPA'
            theme="spa"
            position="left"
        />

        <ReactCompareSlider
            handle={<CustomHandle />}
            itemOne={
                <ReactCompareSliderImage 
                    src={spaImage} 
                    alt="Wellness & SPA" 
                    className="w-full h-full object-cover animate-ken-burns"
                />
            }
            itemTwo={
                <ReactCompareSliderImage 
                    src={beautyImage} 
                    alt="Beauty & Nails" 
                    className="w-full h-full object-cover animate-ken-burns"
                />
            }
            style={{
                width: '100%',
                height: '100%',
            }}
        />

        <HeroPanel 
            title="Beauty & Nails" 
            description="Enhance your natural radiance with our expert facials, lash artistry, and pristine nail care."
            href="/services/facials"
            buttonText='Explore Beauty'
            theme="beauty"
            position="right"
        />
    </section>
  );
}
