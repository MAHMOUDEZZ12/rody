
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Copy, Gift, History } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="container max-w-4xl px-4 py-12">
        <div className="space-y-4">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-6 w-3/4" />
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    );
  }
  
  const referralCode = `RODY-${user.uid.substring(0, 6).toUpperCase()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: 'Copied to Clipboard!',
      description: 'Your referral code is ready to be shared.',
    });
  };


  return (
    <div className="container max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Welcome, {user.email?.split('@')[0]}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          This is your personal space to manage your wellness journey with Rody.
        </p>
      </header>

      <main className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Gift className="text-primary" />
              Referral Program
            </CardTitle>
             <CardDescription>
              Share the sanctuary. You and your friends both get 50 AED.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Your unique referral code:</p>
            <div className="flex items-center justify-between gap-4 p-3 border-2 border-dashed border-primary/50 rounded-lg">
                <span className="text-2xl font-bold tracking-widest text-primary">{referralCode}</span>
                <Button onClick={copyToClipboard} variant="ghost" size="icon">
                  <Copy className="h-5 w-5" />
                </Button>
            </div>
             <Button asChild className="w-full mt-4">
              <Link href="/referral">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <History className="text-primary" />
              Booking History
            </CardTitle>
             <CardDescription>
              Review your past and upcoming appointments.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-10">
            <p className="text-muted-foreground">You have no upcoming appointments.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/services">Explore Services</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
