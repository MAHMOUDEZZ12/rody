
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ChevronDown, LogOut, Menu, User, Phone } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
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

export function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const whatsappNumber = "971507797488";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const wellnessLinks = [
    { href: '/services/massage', label: 'Massage Therapy' },
    { href: '/services/body-treatments', label: 'Body Treatments' },
  ];
  
  const beautyLinks = [
    { href: '/services/facials', label: 'Facial Treatments' },
    { href: '/services/nails', label: 'Nail Services' },
    { href: '/services/eyelashes', label: 'Eyelash Services' },
  ];

  const allServiceLinks = [
      ...wellnessLinks,
      ...beautyLinks,
  ]
  
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
          <span className="font-headline text-xl font-bold text-primary">Rody Wellness</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {/* Wellness & SPA Dropdown */}
          <Button asChild variant="ghost">
            <Link href="/services/wellness-and-spa">Wellness & SPA</Link>
          </Button>
          
          <Button asChild variant="ghost">
            <Link href="/services/beauty">Beauty</Link>
          </Button>

          {/* All Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">All Services <ChevronDown className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Services</DropdownMenuLabel>
               <DropdownMenuGroup>
                {allServiceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
               <DropdownMenuItem asChild><Link href="/services">View All</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
           <Button asChild variant="link">
              <Link href="/#testimonials">Testimonials</Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/referral">Referrals</Link>
            </Button>

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
                  <span className="font-bold font-headline text-lg text-primary">Rody Wellness</span>
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
                         <SheetClose asChild><MobileLink href="/professionals" onNavigate={() => {}}>Therapists</MobileLink></SheetClose>
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="beauty">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-2">Beauty</AccordionTrigger>
                      <AccordionContent className="flex flex-col items-start gap-1">
                         <SheetClose asChild><MobileLink href="/services/beauty" onNavigate={() => {}}>View All</MobileLink></SheetClose>
                        {beautyLinks.map((link) => (
                          <SheetClose key={link.href} asChild><MobileLink href={link.href} onNavigate={() => {}}>{link.label}</MobileLink></SheetClose>
                        ))}
                         <SheetClose asChild><MobileLink href="/professionals" onNavigate={() => {}}>Masters</MobileLink></SheetClose>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex flex-col gap-4 mt-4 border-t pt-4">
                  {user ? (
                     <>
                      <SheetClose asChild><Link href="/dashboard"><Button variant="outline" className="w-full rounded-full">My Profile</Button></Link></SheetClose>
                      <Button onClick={() => { handleLogout(); }} variant="ghost" className="w-full rounded-full">Logout</Button>
                     </>
                   ) : (
                      <SheetClose asChild><Link href="/login"><Button variant="outline" className="w-full rounded-full">Login / Sign Up</Button></Link></SheetClose>
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
