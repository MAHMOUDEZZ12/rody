
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-headline text-xl font-bold text-primary">Rody Wellness</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-muted-foreground">
            <Link href="/services/wellness-and-spa" className="hover:text-primary">Wellness & SPA</Link>
            <Link href="/services/beauty" className="hover:text-primary">Beauty & Nails</Link>
            <Link href="/packages" className="hover:text-primary">Packages</Link>
            <Link href="/referral" className="hover:text-primary">Referral Program</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/faq" className="hover:text-primary">FAQ</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
            <Link href="/policy" className="hover:text-primary">Policies</Link>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rody Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
