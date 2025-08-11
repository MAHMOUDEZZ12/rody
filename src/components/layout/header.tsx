
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { LogIn, Menu, Sparkles, User } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Header() {
  const { user, login, logout } = useAuth();
  const router = useRouter();

  const handleLoginClick = () => {
    // Simulate login and redirect to dashboard
    login({ uid: '123', email: 'user@sure.com' });
    router.push('/dashboard');
  }

  const handleLogoutClick = () => {
    logout();
    router.push('/');
  }

  const wellnessLinks = [
    { href: '/services/massage', label: 'Massage Therapy' },
    { href: '/services/body-treatments', label: 'Body Treatments' },
  ];
  
  const beautyLinks = [
    { href: '/services/facials', label: 'Facial Treatments' },
    { href: '/services/nails', label: 'Nail Services' },
    { href: '/services/eyelashes', label: 'Eyelash Services' },
  ];
  
  const MobileLink = ({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) => {
    const handleClick = () => {
      onNavigate();
      router.push(href);
    }
    return (
      <Link href={href} onClick={handleClick} className="text-base transition-colors hover:text-primary py-2 w-full text-left pl-8">
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Sparkles className="h-6 w-6 text-primary"/>
          <span className="font-headline text-xl font-bold text-primary">Sure by Rody</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Button asChild variant="ghost">
            <Link href="/services/wellness-and-spa">Wellness & SPA</Link>
          </Button>
          
          <Button asChild variant="ghost">
            <Link href="/services/beauty">Beauty & Nails</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/packages">Sure Packages</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
           {user ? (
             <Button onClick={() => router.push('/dashboard')} variant="ghost" size="sm" className="hidden md:inline-flex">
                <User /> My Dashboard
              </Button>
          ) : (
            <Button onClick={handleLoginClick} variant="ghost" size="sm" className="hidden md:inline-flex">
              <LogIn /> Member Access
            </Button>
          )}

          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/packages">Book Now</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-between items-center mb-8">
                 <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg text-primary">Sure by Rody</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon"><span className="sr-only">Close</span></Button>
                </SheetClose>
              </div>
              <div className="flex flex-col h-[calc(100vh-8rem)]">
                <div className="flex-grow">
                   <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="spa">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Wellness & SPA</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-start gap-1">
                         <SheetClose asChild><MobileLink href="/services/wellness-and-spa" onNavigate={() => {}}>View All</MobileLink></SheetClose>
                        {wellnessLinks.map((link) => (
                          <SheetClose key={link.href} asChild><MobileLink href={link.href} onNavigate={() => {}}>{link.label}</MobileLink></SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="beauty">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Beauty & Nails</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-start gap-1">
                         <SheetClose asChild><MobileLink href="/services/beauty" onNavigate={() => {}}>View All</MobileLink></SheetClose>
                        {beautyLinks.map((link) => (
                          <SheetClose key={link.href} asChild><MobileLink href={link.href} onNavigate={() => {}}>{link.label}</MobileLink></SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <SheetClose asChild>
                      <Link href="/packages" className="block text-lg font-semibold py-3 hover:no-underline border-b">Sure Packages</Link>
                    </SheetClose>
                  </Accordion>
                </div>
                <div className="flex flex-col gap-4 mt-4 border-t pt-4">
                  {user ? (
                     <>
                      <SheetClose asChild><Link href="/dashboard"><Button variant="outline" className="w-full rounded-full">My Dashboard</Button></Link></SheetClose>
                      <Button onClick={() => { handleLogoutClick(); }} variant="ghost" className="w-full rounded-full">Logout</Button>
                     </>
                   ) : (
                      <SheetClose asChild><Button onClick={handleLoginClick} variant="outline" className="w-full rounded-full">Member Access</Button></SheetClose>
                   )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    