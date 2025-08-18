
'use client';

import { Phone } from 'lucide-react';

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

export function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="container h-full mx-auto">
        <div className="grid grid-cols-2 h-full gap-2">
          <a
            href="https://wa.me/message/S46XZJVEVAOJF1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full text-lg font-semibold text-primary"
          >
            <WhatsAppIcon className="mr-2 h-6 w-6 text-green-500" />
            WhatsApp
          </a>
          <a
            href="tel:+971529774530"
            className="flex items-center justify-center h-full text-lg font-semibold text-primary"
          >
            <Phone className="mr-2 h-6 w-6" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
