
'use client';

import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'About Us | Rody Wellness',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service.',
};

function AboutImage({ dataAiHint, alt }: { dataAiHint: string; alt: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({ title: alt, content: dataAiHint, dataAiHint })
      .then(setImageUrl)
      .catch(console.error);
  }, [alt, dataAiHint]);

  if (!imageUrl) {
    return <Skeleton className="w-full h-80 rounded-lg" />;
  }

  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="container max-w-5xl px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Our Story: The Art of the In-Home Sanctuary
        </h1>
      </header>

      <main className="space-y-24">

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg leading-relaxed space-y-4 text-muted-foreground order-2 md:order-1">
            <p>
              In the vibrant heart of Dubai, where the pulse of the city beats with limitless ambition, we noticed a paradox. The pursuit of wellness, meant to be a moment of peace, often felt like another task on an endless to-do list—another appointment to race to, another journey through traffic.
            </p>
            <p>
              Rody Wellness was born from a simple yet profound vision: <strong className="text-foreground">What if the ultimate luxury wasn’t a destination you had to travel to, but a world-class experience that came directly to you?</strong>
            </p>
             <p>
              Our founder envisioned a service that would transcend the traditional spa model. A service that didn’t just offer treatments, but curated moments of pure, uninterrupted tranquility. We sought to eliminate the stress of the journey so our clients could focus solely on the destination: their own well-being. This is how the Rody Wellness story began—with a commitment to delivering a five-star sanctuary to your front door.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Suspense fallback={<Skeleton className="w-full h-80 rounded-lg" />}>
              <AboutImage dataAiHint="luxury home interior" alt="A serene and luxurious home environment" />
            </Suspense>
          </div>
        </section>
        
        <section className="py-16 bg-card/50 rounded-lg">
          <div className="container max-w-4xl">
            <h2 className="font-headline text-3xl text-primary mb-8 text-center">Our Philosophy: The Pillars of Rody Wellness</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">1. Bespoke Luxury, Personalized for You</h3>
                <p className="text-muted-foreground">
                  We believe that true wellness is not one-size-fits-all. Your needs are unique, and your treatments should be too. From the moment you book with us, your journey is personalized. Our expert therapists conduct consultations to understand your specific goals—whether it’s releasing muscle tension with a Deep Tissue Massage, achieving a pre-event glow with a 24K Gold Facial, or designing the perfect Russian Volume lashes. Every service is an experience tailored exclusively for you.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">2. Excellence in Every Detail</h3>
                <p className="text-muted-foreground">
                  Luxury is found in the details. At Rody Wellness, we are uncompromising in our pursuit of quality. This means sourcing and using only the finest, most effective products from around the globe.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 pl-4 text-muted-foreground">
                  <li><strong className="font-semibold text-foreground/90">Our Skincare:</strong> Features potent, clinically-proven botanicals and advanced formulations like pure Hyaluronic Acid and rejuvenating Vitamin C to deliver visible results.</li>
                  <li><strong className="font-semibold text-foreground/90">Our Body Treatments:</strong> Utilize mineral-rich Himalayan salts and aromatic Arabica coffee to purify, exfoliate, and invigorate your skin.</li>
                  <li><strong className="font-semibold text-foreground/90">Our Nail Lacquers & Gels:</strong> Are chosen for their rich pigments, exceptional durability, and high-gloss finish, ensuring a flawless, long-lasting manicure.</li>
                </ul>
                 <p className="mt-4 text-muted-foreground">
                  We invest in the best so you can feel the difference.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">3. The Sanctuary Comes to You</h3>
                <p className="text-muted-foreground">
                  Your home is your sanctuary, and we treat it as such. We have perfected the art of transforming your space into a serene spa environment. Forget the outside world as our therapists arrive with a professional massage table, plush, clean linens, calming aromatherapy, and soothing music. We handle every detail, allowing you to transition seamlessly from your busy day into a state of blissful relaxation, without ever stepping outside.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
             <Suspense fallback={<Skeleton className="w-full h-80 rounded-lg" />}>
              <AboutImage dataAiHint="friendly therapist portrait" alt="A professional and friendly wellness therapist" />
            </Suspense>
          </div>
          <div className="text-lg leading-relaxed space-y-4 text-muted-foreground order-2">
            <h2 className="font-headline text-3xl text-primary">The Heart of Rody: Our Professional Team</h2>
            <p>
              A vision is only as strong as the people who bring it to life. Our team is the heart and soul of Rody Wellness.
            </p>
            <p>
              We have meticulously assembled a <strong className="text-foreground">full professional team of certified female therapists</strong>, each considered a master of her craft. They are the guardians of your tranquility. Every member is not only technically exceptional in her chosen specialty—be it the art of Maderotherapy or the precision of lash application—but is also chosen for her intuition, discretion, and genuine passion for wellness.
            </p>
            <p>
              They arrive not just as therapists, but as trusted partners in your self-care journey, dedicated to providing a comfortable, safe, and profoundly rejuvenating experience.
            </p>
          </div>
        </section>
        
        <section className="py-16 text-center bg-card rounded-lg p-8">
          <h2 className="font-headline text-3xl text-primary mb-4">Our Promise</h2>
          <p className="text-xl max-w-2xl mx-auto text-card-foreground">
            Our promise is to deliver more than a service. We deliver a feeling—of being cared for, of being restored, and of being utterly at peace in your own space. We invite you to experience the new standard of luxury wellness in Dubai.
          </p>
           <p className="mt-6 font-bold text-2xl font-headline text-foreground">Welcome to Rody Wellness.</p>
        </section>
      </main>
    </div>
  );
}
