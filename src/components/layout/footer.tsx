
import Link from "next/link";
import { Sparkles } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Sparkles className="h-8 w-8"/>
                <span className="font-headline text-2xl font-bold">Rody Wellness</span>
            </Link>
            <p className="text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Rody Wellness. All rights reserved.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold font-headline text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/services/wellness-and-spa" className="hover:underline">Wellness & SPA</Link>
                <Link href="/services/beauty" className="hover:underline">Beauty & Nails</Link>
                <Link href="/packages" className="hover:underline">Packages</Link>
                <Link href="/referral" className="hover:underline">Referral Program</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/about" className="hover:underline">About Us</Link>
                <Link href="/policy" className="hover:underline">Policies</Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-bold font-headline text-lg mb-4">Connect With Us</h3>
             <a href="https://wa.me/97100000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors">
                <WhatsAppIcon className="h-5 w-5"/>
                <span>Chat on WhatsApp</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
