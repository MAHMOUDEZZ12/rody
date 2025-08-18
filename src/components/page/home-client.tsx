
'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { testimonials, packages, services } from '@/lib/data';
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

function BlogBanner() {
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
                                    <BlogBannerImage post={latestPost} />
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

export function HomeClient() {
  const featuredSpaServices = services.filter(s => s.category === 'Massage' || s.category === 'Body Treatments').slice(0, 2);
  const featuredBeautyServices = services.filter(s => s.category === 'Facials' || s.category === 'Nails').slice(0, 2);
  const surePackages = packages.slice(0, 3);

  return (
    <div className="flex flex-col">
      <SureBanner />

      <section id="services" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Our Services" />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="font-headline text-3xl text-spa-primary">Wellness & SPA</h3>
                        <p className="text-muted-foreground mt-2">Restore your body’s balance and rejuvenate your spirit.</p>
                    </div>
                    <div className="grid gap-6">
                      {featuredSpaServices.map(service => (
                        <ServiceCard key={service.id} service={service} theme="spa" />
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
                        <ServiceCard key={service.id} service={service} theme="beauty" />
                      ))}
                    </div>
                     <div className="text-center">
                        <Button asChild variant="outline">
                            <Link href="/services/beauty">Explore All Beauty Services</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

       <section id="packages" className="py-16 md:py-24">
        <div className="container max-w-7xl px-4">
          <SectionTitle title="Luxury Packages" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Indulge in our thoughtfully designed packages for a complete, luxurious experience at a special value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 container max-w-7xl">
        <ReferralBanner />
      </section>
      
      <BlogBanner />

      <section id="testimonials" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-7xl px-4">
           <SectionTitle title="Words of Wellness" />
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who have experienced the Rody Wellness sanctuary.
          </p>
          <div className="relative mt-12">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="text-center bg-white/80 backdrop-blur-sm shadow-lg break-inside-avoid">
                        <CardContent className="p-6">
                           <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="pt-0">
                          <CardTitle className="font-body text-base font-bold">{testimonial.name}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">{testimonial.service}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
