
import { packages } from '@/lib/data';
import { PackageCard } from '@/components/package-card';
import { Card, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/section-title';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export const metadata: Metadata = {
  title: 'Sure Offers & Packages',
  description: 'Indulge and save with our curated wellness packages. Each package combines our most popular at-home spa and beauty services at an exceptional value.',
};

async function PackageImages() {
  const imagePromises = packages.map(pkg => generateSimpleImage({
    prompt: `A beautiful and luxurious flatlay composition representing a Rody Wellness spa package. The theme should reflect the package name: "${pkg.name}". Keywords: ${pkg.dataAiHint}. Use clean, bright lighting on a minimalist background with brand colors of soft pink and gold. The aesthetic should be elegant, aspirational, and high-end. Professional product photography, high resolution. Perhaps include a small, branded "Rody" tag on one of the items.`,
  }));
  const resolvedImageUrls = await Promise.all(imagePromises);

  const packageImageUrls: Record<string, string> = {};
  packages.forEach((pkg, index) => {
    packageImageUrls[pkg.id] = resolvedImageUrls[index];
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} imageUrl={packageImageUrls[pkg.id]}/>
      ))}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <SectionTitle title="Sure Offers" />
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Indulge in a complete journey of rejuvenation with our thoughtfully designed packages. Each offers a unique combination of our most popular services at an exceptional value, perfect for a gift or a well-deserved treat for yourself.
        </p>
      </header>
      <main>
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
              </div>}>
                <PackageImages />
              </Suspense>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
