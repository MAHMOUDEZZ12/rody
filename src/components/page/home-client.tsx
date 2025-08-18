
'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { testimonials, packages, services, Service } from '@/lib/data';
import { type BlogPost, blogPosts } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PackageCard } from '../package-card';
import { Button } from '../ui/button';
import { SectionTitle } from '../section-title';
import { ServiceCard } from '../service-card';
import { ReferralBanner } from '../referral-banner';
import { SureBanner } from './sure-banner';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import BlogBannerImage from './blog-banner-image';
import TestimonialsSection from './testimonials-section';

type HomeClientProps = {
    serviceImageUrls: Record<string, string>;
    packageImageUrls: Record<string, string>;
    latestPostImageUrl: string;
}

function BlogBanner({ latestPostImageUrl }: { latestPostImageUrl: string}) {
    const latestPost = blogPosts[0];

    if (!latestPost) return null;

    return (
        <section id="blog-banner" className="py-16 md:py-24">
            <div className="container max-w-7xl px-4">
                <SectionTitle title="From The Journal" />
                <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                    Explore our latest articles on wellness, beauty, and self-care rituals.
                </p>
                <div className="mt-12 max-w-4xl mx-auto">
                     <Link href={`/blog/${latestPost.slug}`} className="block group">
                        <Card className="grid md:grid-cols-2 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <Suspense fallback={<Skeleton className="w-full h-full" />}>
                                    <BlogBannerImage imageUrl={latestPostImageUrl} alt={latestPost.title} />
                                </Suspense>
                            </div>
                            <div className="flex flex-col p-8 bg-card/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl text-primary group-hover:underline">{latestPost.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground line-clamp-3">
                                    {latestPost.subtitle}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 h-auto font-semibold">
                                        Read More
                                    </Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function HomeClient({ serviceImageUrls, packageImageUrls, latestPostImageUrl }: HomeClientProps) {
  const featuredSpaServices = services.filter(s => s.categories.includes('Massage') || s.categories.includes('Body Treatments')).slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.categories.includes('Facials') || s.categories.includes('Nails')).slice(0, 2);
  const featuredTreatmentServices = services.filter(s => s.categories.includes('Treatment')).slice(0, 2);

  return (
    <>
      <section id="services" className="py-16 md:py-24">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Our Services" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-spa-primary">Wellness & SPA</h3>
                        <p className="text-muted-foreground mt-2">Restore your body’s balance and rejuvenate your spirit.</p>
                    </div>
                    <div className="grid gap-6">
                      {featuredSpaServices.map(service => (
                        <ServiceCard key={service.id} service={service} imageUrl={serviceImageUrls[service.id]} theme="spa" />
                      ))}
                    </div>
                    <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/wellness-and-spa">Explore All SPA Services</Link>
                        </Button>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-beauty-primary">Beauty & Nails</h3>
                        <p className="text-muted-foreground mt-2">Enhance your natural radiance with our expert treatments.</p>
                    </div>
                    <div className="grid gap-6">
                       {featuredBeautyServices.map(service => (
                        <ServiceCard key={service.id} service={service} imageUrl={serviceImageUrls[service.id]} theme="beauty" />
                      ))}
                    </div>
                     <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/beauty">Explore All Beauty Services</Link>
                        </Button>
                    </div>
                </div>
                 <div className="space-y-8 lg:col-span-1 md:col-span-2">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-primary">Featured Treatments</h3>
                        <p className="text-muted-foreground mt-2">Targeted solutions for corrective and therapeutic results.</p>
                    </div>
                    <div className="grid gap-6">
                       {featuredTreatmentServices.map(service => (
                        <ServiceCard key={service.id} service={service} imageUrl={serviceImageUrls[service.id]} theme="beauty" />
                      ))}
                    </div>
                     <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/wellness-and-spa">Explore All Treatments</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <SureBanner />

       <section id="packages" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Luxury Packages" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Indulge in our thoughtfully designed packages for a complete, luxurious experience at a special value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} imageUrl={packageImageUrls[pkg.id]} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container max-w-7xl px-4">
           <SectionTitle title="Words of Wellness" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who have experienced the Rody Wellness sanctuary.
          </p>
           <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><Skeleton className="h-48 w-full" /><Skeleton className="h-48 w-full" /><Skeleton className="h-48 w-full" /></div>}>
              <TestimonialsSection />
           </Suspense>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/50 container max-w-7xl">
        <ReferralBanner />
      </section>
      
      <BlogBanner latestPostImageUrl={latestPostImageUrl} />

    </>
  );
}
