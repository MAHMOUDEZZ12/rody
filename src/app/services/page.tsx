
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export const metadata = {
  title: 'All Services | Rody Wellness',
  description: 'Explore our full range of luxury at-home wellness services in Dubai.',
};

export default function ServicesPage() {
  const serviceCategories = [...new Set(services.map(s => s.category))];
  const pageServices = services.filter(s => !s.id.endsWith('-page'));
  const backgroundColors = ['bg-transparent', 'bg-secondary/30', 'bg-primary/5'];

  return (
    <div className="py-12">
      <header className="mb-12 text-center container">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Indulge in our curated selection of treatments, from therapeutic massages to rejuvenating facials and pristine nail care, all designed for ultimate relaxation and rejuvenation in the comfort of your home.
        </p>
      </header>

      <main className="overflow-hidden">
        {serviceCategories.map((category, index) => (
            <section 
              key={category} 
              id={category.toLowerCase().replace(/\s/g, '-')} 
              className={`py-16 ${backgroundColors[index % backgroundColors.length]}`}
            >
              <div className="container max-w-7xl">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {pageServices.filter(s => s.category === category).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            </section>
          ))}
      </main>
    </div>
  );
}
