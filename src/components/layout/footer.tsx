import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">Rody Wellness</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-muted-foreground">
            <Link href="/#services" className="hover:text-primary">Services</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="#" className="hover:text-primary">About Us</Link>
            <Link href="#" className="hover:text-primary">Contact</Link>
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rody Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
