
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ChevronDown, LogOut, Menu, User, Phone } from 'lucide-react';
import { Separator } from '../ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from '@/hooks/use-auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full"
  >
    <circle cx="12" cy="12" r="12" fill="hsl(var(--primary))" />
    <path
      d="M8.28,18.06C8.28,18.06 8.28,18.06 8.28,18.06C7.38,17.16 6.84,15.91 6.84,14.52C6.84,11.43 9.42,9 12.48,9C14.76,9 16.68,10.26 17.58,12.06M15.72,5.94C15.72,5.94 15.72,5.94 15.72,5.94C16.62,6.84 17.16,8.09 17.16,9.48C17.16,12.57 14.58,15 11.52,15C9.24,15 7.32,13.74 6.42,11.94"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const whatsappNumber = "971507797488";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const serviceLinks = [
    { href: '/services/massage', label: 'Massage Therapy' },
    { href: '/services/facials', label: 'Facial Treatments' },
    { href: '/services/body-treatments', label: 'Body Treatments' },
    { href: '/services/nails', label: 'Nail Services' },
    { href: '/services/eyelashes', label: 'Eyelash Services' },
  ];

  const mainLinks = [
    { href: '/#professionals', label: 'Professionals' },
    { href: '/#recommendations', label: 'For You' },
    { href: '/blog', label: 'Blog' },
  ];
  
  const MobileLink = ({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) => {
    const handleClick = () => {
      onNavigate();
      router.push(href);
    }
    return (
      <Link href={href} onClick={handleClick} className="text-base transition-colors hover:text-primary py-2">
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Logo />
          <span className="hidden sm:inline-block font-headline text-xl font-bold text-primary">Rody Wellness</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary font-medium outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
               <DropdownMenuSeparator />
               <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <Link href="/login">Log In</Link>
            </Button>
          )}

          <Button asChild variant="outline" className="hidden md:inline-flex rounded-full">
            <Link href={whatsappLink} target="_blank">
              <Phone className="mr-2 h-4 w-4"/>
              Book on WhatsApp
            </Link>
          </Button>

          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/services">Book Now</Link>
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
                   <Logo />
                  <span className="font-bold font-headline text-lg text-primary">Rody Wellness</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon"><span className="sr-only">Close</span></Button>
                </SheetClose>
              </div>
              <div className="flex flex-col h-[calc(100vh-8rem)]">
                <div className="flex-grow">
                   <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b-0">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Services</AccordionTrigger>
                      <AccordionContent className="pl-4 flex flex-col items-start gap-1">
                        {serviceLinks.map((link) => (
                          <SheetClose key={link.href} asChild><MobileLink href={link.href} onNavigate={() => {}}>{link.label}</MobileLink></SheetClose>
                        ))}
                        <SheetClose asChild><MobileLink href="/services" onNavigate={() => {}}>All Services</MobileLink></SheetClose>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Separator className="my-2"/>
                  {mainLinks.map((link) => (
                     <SheetClose key={link.href} asChild><MobileLink href={link.href} onNavigate={() => {}}>{link.label}</MobileLink></SheetClose>
                  ))}
                  <Separator className="my-2" />
                </div>
                <div className="flex flex-col gap-4">
                  <Button asChild className="w-full rounded-full">
                    <Link href={whatsappLink} target="_blank">
                      <Phone /> Book on WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href="/services">Book Online</Link>
                  </Button>
                   {user ? (
                     <>
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link href="/dashboard">My Profile</Link>
                      </Button>
                       <Button onClick={handleLogout} variant="ghost" className="w-full rounded-full">
                        Logout
                      </Button>
                     </>
                   ) : (
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link href="/login">Login / Sign Up</Link>
                      </Button>
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
