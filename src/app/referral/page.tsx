
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Gift, Send, Star, UserPlus, Award, Copy } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const referralFAQs = [
    {
        question: "What qualifies as a 'successful referral'?",
        answer: "A referral is considered successful after the new client (the person you referred) books using your code, and completes and pays for their first service."
    },
    {
        question: "How do I use my credits?",
        answer: "Your earned credits are stored in your Rody Wellness account and can be applied at checkout when you book your next service with us online or via WhatsApp."
    },
    {
        question: "Do my credits expire?",
        answer: "Yes, all earned credits are valid for 6 months from the date they are issued, giving you plenty of time to pamper yourself."
    },
    {
        question: "Can I combine my referral credits with other discounts or offers?",
        answer: "Referral credits cannot be combined with other promotional offers or package deals unless specified otherwise."
    },
    {
        question: "Is there a limit to how many friends I can refer?",
        answer: "There is no limit! We are honored by every single friend you introduce to the Rody Wellness experience."
    }
];

export default function ReferralPage() {
  const { user, loading } = useAuth();
  const { toast } = useToast();

  const referralCode = user ? `RODY-${user.uid.substring(0, 6).toUpperCase()}` : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: 'Copied to Clipboard!',
      description: 'Your referral code is ready to be shared.',
    });
  };

  return (
    <div className="container max-w-5xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          The Rody Wellness Circle
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Share the sanctuary, earn rewards. Introduce your friends to the luxury of Rody Wellness, and you both receive beautiful rewards. It’s our way of saying thank you for helping our community grow.
        </p>
      </header>
      
      <main>
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
                <section className="py-12">
                    <Card className="bg-card/50">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-2xl">Your Personal Referral Code</CardTitle>
                        <CardDescription>Share this code with friends. They get 50 AED off, you get 50 AED credit!</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        {loading ? (
                        <Skeleton className="h-12 w-64 mx-auto" />
                        ) : user ? (
                        <div className="flex items-center justify-center gap-4 p-4 border-2 border-dashed border-primary rounded-lg max-w-md mx-auto">
                            <span className="text-3xl font-bold tracking-widest text-primary">{referralCode}</span>
                            <Button onClick={copyToClipboard} variant="ghost" size="icon">
                            <Copy className="h-6 w-6" />
                            </Button>
                        </div>
                        ) : (
                        <div className="text-center">
                            <p className="text-lg text-muted-foreground mb-4">Log in to get your personal referral code.</p>
                            <Button asChild size="lg" className="rounded-full font-bold">
                                <Link href="/login">Login or Sign Up</Link>
                            </Button>
                        </div>
                        )}
                    </CardContent>
                    </Card>
                </section>

                <section id="how-it-works" className="py-12">
                    <h2 className="font-headline text-3xl text-primary text-center mb-10">A Simple Path to Rewards</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                                <Send className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Share Your Code</h3>
                            <p className="text-muted-foreground">Log in to your profile to find your personal referral code. Share it with friends who are new to Rody Wellness.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                                <Gift className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. Your Friend Gets a Gift</h3>
                            <p className="text-muted-foreground">Your friend uses your code at checkout to receive **50 AED off** their first treatment. A perfect welcome!</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                                <Star className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. You Get Rewarded!</h3>
                            <p className="text-muted-foreground">Once their appointment is complete, a **50 AED credit** is automatically added to your account for your next booking.</p>
                        </div>
                    </div>
                </section>

                <section id="rewards-journey" className="py-12 bg-card rounded-lg my-12">
                    <div className="container max-w-4xl">
                        <h2 className="font-headline text-3xl text-primary text-center mb-10">Your Rewards Journey</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center">
                                <CardHeader>
                                    <UserPlus className="w-12 h-12 mx-auto text-primary" />
                                    <CardTitle className="font-headline text-2xl pt-4">First Referral</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-3xl font-bold text-foreground">Give 50, Get 50</p>
                                <p className="text-muted-foreground mt-2">You both get 50 AED credit. A simple and beautiful thank you.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-primary/50 shadow-primary/10 shadow-lg">
                                <CardHeader>
                                    <Award className="w-12 h-12 mx-auto text-primary" />
                                    <CardTitle className="font-headline text-2xl pt-4">Wellness Ambassador</CardTitle>
                                    <p className="text-sm text-muted-foreground">(3 Successful Referrals)</p>
                                </CardHeader>
                                <CardContent>
                                <p className="text-3xl font-bold text-foreground">Bonus 75 AED Credit</p>
                                <p className="text-muted-foreground mt-2">Receive a bonus 75 AED credit as a special thank you for your loyalty.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Star className="w-12 h-12 mx-auto text-primary" />
                                    <CardTitle className="font-headline text-2xl pt-4">Rody VIP</CardTitle>
                                    <p className="text-sm text-muted-foreground">(5 Successful Referrals)</p>
                                </CardHeader>
                                <CardContent>
                                <p className="text-3xl font-bold text-foreground">Free Massage</p>
                                <p className="text-muted-foreground mt-2">Enjoy a complimentary 60-Min Relaxation Massage (a 300 AED value) on us.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-center text-muted-foreground mt-8 text-sm">*After your fifth referral, your rewards journey resets, and you can begin a new path to achieving Rody VIP status all over again!</p>
                    </div>
                </section>
                
                <section id="faq" className="py-12">
                    <h2 className="font-headline text-3xl text-primary text-center mb-10">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                    {referralFAQs.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </section>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
