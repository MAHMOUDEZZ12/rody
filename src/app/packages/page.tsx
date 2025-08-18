
import { packages } from '@/lib/data';
import { PackageCard } from '@/components/package-card';
import { Card, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/section-title';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Sure Offers | Rody Wellness',
  description: 'Explore our curated wellness packages for a complete, luxurious experience at a special value.',
};

export default async function PackagesPage() {
  const packageImageUrls: Record<string, string> = {};
  for(const pkg of packages) {
    packageImageUrls[pkg.id] = await generateSimpleImage({ prompt: `A beautiful and luxurious flatlay representing a spa package. Keywords: ${pkg.name}, ${pkg.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.` });
  }

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Suspense fallback={<>
                  <Skeleton className="h-96 w-full" />
                  <Skeleton className="h-96 w-full" />
                  <Skeleton className="h-96 w-full" />
                </>}>
                  {packages.map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} imageUrl={packageImageUrls[pkg.id]}/>
                  ))}
                </Suspense>
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
