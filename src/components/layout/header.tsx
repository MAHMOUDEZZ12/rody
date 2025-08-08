
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    { href: '/services', label: 'All Services' },
  ];

  const mainLinks = [
    { href: '/#professionals', label: 'Professionals' },
    { href: '/#recommendations', label: 'For You' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/logo-light-bg.png?alt=media&token=85158a18-e77c-47d0-9d32-2150399863a3" alt="Rody Wellness Logo" width={40} height={40} className="rounded-full" />
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
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
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
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                 <Image src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/logo-light-bg.png?alt=media&token=85158a18-e77c-47d0-9d32-2150399863a3" alt="Rody Wellness Logo" width={40} height={40} className="rounded-full" />
                <span className="font-bold font-headline text-lg text-primary">Rody Wellness</span>
              </Link>
              <div className="flex flex-col gap-6">
                <p className="text-lg font-semibold">Services</p>
                <div className="flex flex-col gap-4 pl-4">
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-base transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Separator/>
                {mainLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                ))}
                <Separator />
                 <Button asChild className="w-full rounded-full">
                  <Link href={whatsappLink} target="_blank">
                    <Phone className="mr-2 h-4 w-4"/>
                    Book on WhatsApp
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
