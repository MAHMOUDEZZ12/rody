import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles, User } from 'lucide-react';
import { Separator } from '../ui/separator';

export function Header() {
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#professionals', label: 'Professionals' },
    { href: '/#recommendations', label: 'For You' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block font-headline text-xl font-bold text-primary">Dubai Wellness Oasis</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/#services">Book Now</Link>
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
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg text-primary">Dubai Wellness Oasis</span>
              </Link>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                ))}
                <Separator />
                <Button asChild className="w-full rounded-full">
                  <Link href="/#services">Book Now</Link>
                </Button>
                 <Button variant="outline" className="w-full rounded-full">
                  My Profile
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
