
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Gift, Send, Star, UserPlus, Award } from 'lucide-react';

export const metadata = {
  title: 'Referral Program | Rody Wellness',
  description: 'Share the sanctuary with your friends and earn rewards with the Rody Wellness Circle referral program.',
};

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
        
        <section className="text-center py-12">
             <h2 className="font-headline text-3xl text-primary mb-4">Ready to Share the Wellness?</h2>
            <p className="text-lg text-muted-foreground mb-8">Your friends deserve to be pampered. Log in to your profile now to find your unique code.</p>
            <Button asChild size="lg" className="rounded-full font-bold">
                <Link href="/login">Find My Referral Code</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}

    