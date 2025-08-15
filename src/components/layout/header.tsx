
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { LogIn, Menu, User } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

export function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

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
  
  const MobileLink = ({ href, children }: { href: string; children: React.ReactNode; }) => {
    return (
        <SheetClose asChild>
            <Link href={href} className="text-base transition-colors hover:text-primary py-2 w-full text-left pl-8">
                {children}
            </Link>
        </SheetClose>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/Untitled-9%20(2).png?alt=media&token=6873a894-fa14-49cb-9ae2-77bee72107cc" alt="Rody Wellness Logo" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Button asChild variant="ghost">
            <Link href="/services/wellness-and-spa">Wellness & SPA</Link>
          </Button>
          
          <Button asChild variant="ghost">
            <Link href="/services/beauty">Beauty & Nails</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/packages">Sure Offers</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
            <Button onClick={() => router.push('/dashboard')} variant="ghost" size="sm" className="hidden md:inline-flex">
                <User /> My Dashboard
            </Button>

          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/services/wellness-and-spa">Book Now</Link>
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
                 <SheetClose asChild>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                      <Image src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/Untitled-9%20(2).png?alt=media&token=6873a894-fa14-49cb-9ae2-77bee72107cc" alt="Rody Wellness Logo" width={120} height={40} />
                    </Link>
                </SheetClose>
              </div>
              <div className="flex flex-col h-[calc(100vh-8rem)]">
                <div className="flex-grow">
                   <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="spa">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Wellness & SPA</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-start gap-1">
                         <MobileLink href="/services/wellness-and-spa">View All</MobileLink>
                        {wellnessLinks.map((link) => (
                          <MobileLink key={link.href} href={link.href}>{link.label}</MobileLink>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="beauty">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Beauty & Nails</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-start gap-1">
                         <MobileLink href="/services/beauty">View All</MobileLink>
                        {beautyLinks.map((link) => (
                           <MobileLink key={link.href} href={link.href}>{link.label}</MobileLink>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                     <SheetClose asChild>
                      <Link href="/packages" className="block text-lg font-semibold py-3 hover:no-underline border-b w-full text-left">Sure Offers</Link>
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
                      <SheetClose asChild><Button onClick={() => router.push('/dashboard')} variant="outline" className="w-full rounded-full">Member Access</Button></SheetClose>
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
