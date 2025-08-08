
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="https://firebasestorage.googleapis.com/v0/b/reodywellness.firebasestorage.app/o/IMG_9626.jpg?alt=media&token=31ea8498-6ec0-45d0-abf0-9193bef095f5" alt="Rody Wellness Logo" width={24} height={24} className="rounded-full" />
            <span className="font-headline text-xl font-bold text-primary">Rody Wellness</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary">Services</Link>
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

    