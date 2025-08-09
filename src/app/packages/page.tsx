
import { packages } from '@/lib/data';
import { PackageCard } from '@/components/package-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/section-title';

export const metadata = {
  title: 'Service Packages | Rody Wellness',
  description: 'Explore our curated wellness packages for a complete, luxurious experience at a special value.',
};

export default function PackagesPage() {
  return (
    <div className="container max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <SectionTitle title="Curated Wellness Packages" />
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Indulge in a complete journey of rejuvenation with our thoughtfully designed packages. Each offers a unique combination of our most popular services at an exceptional value, perfect for a gift or a well-deserved treat for yourself.
        </p>
      </header>
      <main>
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
