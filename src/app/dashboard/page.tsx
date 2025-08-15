
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { History, Star, Ticket, Sparkles, Share2, Clock, LogIn, User } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

export default function DashboardPage() {
  const { user, loading, login } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleExtend = () => {
    toast({
        title: "Offer Extended!",
        description: "This offer is now valid for another 30 days.",
    });
  }

  const handleShare = () => {
    if (typeof navigator.clipboard !== 'undefined') {
        navigator.clipboard.writeText("Check out this amazing offer from Rody Wellness!");
        toast({
            title: "Link Copied!",
            description: "Share the offer with your friends.",
        });
    }
  }

  const handleLogin = () => {
    if (whatsappNumber.length < 10) {
      toast({
        title: "Invalid Number",
        description: "Please enter a valid WhatsApp number.",
        variant: "destructive",
      });
      return;
    }
    const mockName = 'Radwa'; // In a real app, you'd get this from your database
    login({ uid: whatsappNumber, email: `${whatsappNumber}@sure.com`, name: mockName });
    toast({
      title: `Welcome, ${mockName}!`,
      description: "You're in! Check out your exclusive offers.",
    });
  };

  if (loading) {
    return (
      <div className="container max-w-4xl px-4 py-12">
        <div className="space-y-4">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-6 w-3/4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container max-w-2xl px-4 py-12 text-center">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl text-primary">Access Your Sure Rewards</CardTitle>
            <CardDescription className="text-lg">Enter your WhatsApp number to view your exclusive offers and booking history.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="tel"
                placeholder="Your WhatsApp Number"
                className="bg-white text-center"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
              <Button onClick={handleLogin} className="w-full sm:w-auto">
                <LogIn className="mr-2 h-4 w-4" />
                Login with WhatsApp
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">No passwords, no hassle. Just instant access.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container max-w-5xl px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4">
            <User className="w-12 h-12 text-primary p-2 bg-primary/10 rounded-full" />
            <div>
                 <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    Welcome, {user.name || 'Valued Member'}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    This is your personal space for exclusive offers and wellness rewards with Sure.
                </p>
            </div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 md:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <Ticket className="text-primary"/>
                    Your Active Offers
                </CardTitle>
                <CardDescription>
                    These are your exclusive "Sure by Rody" offers. Ready to use!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-accent/50">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">Save 15% on any Massage</h3>
                            <p className="text-sm text-muted-foreground">Expires: 31 Dec, 2024</p>
                        </div>
                        <Button asChild size="sm">
                            <Link href="/services/wellness-and-spa">Book Now</Link>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4 border-t pt-3">
                        <Button onClick={handleShare} variant="outline" size="sm"><Share2 className="mr-2 h-4 w-4" /> Share</Button>
                        <Button onClick={handleExtend} variant="outline" size="sm"><Clock className="mr-2 h-4 w-4" /> Extend</Button>
                    </div>
                </div>
                 <div className="p-4 border rounded-lg bg-accent/50">
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">Free 24K Gold Mask Add-on</h3>
                            <p className="text-sm text-muted-foreground">with any Anti-Aging Facial</p>
                        </div>
                         <Button asChild size="sm">
                             <Link href="/services/facials">Book Now</Link>
                        </Button>
                    </div>
                     <div className="flex items-center gap-2 mt-4 border-t pt-3">
                        <Button onClick={handleShare} variant="outline" size="sm"><Share2 className="mr-2 h-4 w-4" /> Share</Button>
                        <Button onClick={handleExtend} variant="outline" size="sm"><Clock className="mr-2 h-4 w-4" /> Extend</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Star className="text-primary" />
              Loyalty Status
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Badge variant="default" className="text-2xl py-2 px-6 bg-primary/20 text-primary-foreground hover:bg-primary/30">MEMBER</Badge>
            <p className="text-muted-foreground mt-4">Thank you for being a valued member of the Sure by Rody family.</p>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <History className="text-primary" />
              Booking History
            </CardTitle>
             <CardDescription>
              Review your past and upcoming appointments. All payments are settled on delivery.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-10">
            <p className="text-muted-foreground">You have no upcoming appointments.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/services/wellness-and-spa">Explore Services</Link>
            </Button>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
