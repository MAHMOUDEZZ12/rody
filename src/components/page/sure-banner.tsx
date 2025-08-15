
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionTitle } from '../section-title';

export function SureBanner() {
  return (
    <section className="py-16 md:py-24 bg-card/80">
        <div className="container max-w-5xl px-4">
            <Card className="bg-gradient-to-br from-primary/20 via-transparent to-accent/20">
                <CardContent className="flex flex-col items-center text-center p-8 md:p-12">
                    <Sparkles className="w-16 h-16 text-primary mb-4" />
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                        Unlock Exclusive Offers with Sure
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join "Sure by Rody" for free with your WhatsApp number and instantly access exclusive members-only pricing on our most popular services and packages. Why pay more?
                    </p>
                    <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base px-8 py-6">
                    <Link href="/packages">
                        See All Sure Offers <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
