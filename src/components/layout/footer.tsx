
import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <svg
    width="24"
    height="24"
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


export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
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
    