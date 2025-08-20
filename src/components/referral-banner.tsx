
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Gift, ArrowRight } from 'lucide-react';

export function ReferralBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl px-4">
        <Card className="bg-gradient-to-r from-primary/20 to-accent/60">
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
            <div className="flex items-center gap-6">
                <div className="hidden sm:block">
                    <Gift className="w-16 h-16 text-primary" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                        Share the Sanctuary, Get Rewards
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Introduce friends to Rody Wellness and you both get 50 AED off. It's simple with your Sure by Rody card!
                    </p>
                </div>
            </div>
            <Button asChild size="lg" className="rounded-full font-bold text-base px-8 py-6 flex-shrink-0">
              <Link href="/referral">
                Get Your Code <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
