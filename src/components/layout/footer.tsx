
import Link from "next/link";
import Image from "next/image";

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

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);


export function Footer() {
  const whatsappUrl = "https://wa.me/message/S46XZJVEVAOJF1?text=Hello%20Rody%20Wellness!%20I'm%20interested%20in%20booking%20a%20service.";
  const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/reodywellness.appspot.com/o/logo.png?alt=media&token=c13838a3-2646-455c-91ce-7153f3a55255';

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4 w-full">
                 <Image 
                    src={logoUrl}
                    alt="Rody Wellness Logo" 
                    width={180} 
                    height={60}
                 />
            </Link>
            <p className="text-sm max-w-xs">Your Sanctuary, Delivered. Experience premium at-home wellness and beauty services in Dubai.</p>
            <p className="text-xs mt-4 opacity-80">&copy; {new Date().getFullYear()} Rody Wellness. All rights reserved.</p>
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
             <div className="flex flex-col gap-4 w-full max-w-xs">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2 rounded-full transition-colors w-full">
                    <WhatsAppIcon className="h-5 w-5"/>
                    <span>Chat on WhatsApp</span>
                </a>
                 <div className="flex items-center justify-center gap-4">
                    <a href="https://www.facebook.com/Rodyuae" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                        <FacebookIcon className="h-7 w-7"/>
                    </a>
                    <a href="https://www.instagram.com/rodyuae/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
                        <InstagramIcon className="h-7 w-7"/>
                    </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
