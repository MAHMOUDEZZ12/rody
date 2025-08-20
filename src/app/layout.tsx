
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/hooks/use-auth';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { MobileCtaBar } from '@/components/layout/mobile-cta-bar';

const siteName = 'Sure by Rody | Premium At-Home Spa & Beauty in Dubai';
const description = 'Experience the ultimate luxury of at-home wellness. Rody Spa offers premium massage, beauty, and spa treatments delivered to your door in Dubai.';
const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/dubai-wellness-oasis.firebasestorage.app/o/Untitled-12%20(1).png?alt=media&token=dee8858e-cfef-43aa-ab33-f900e34df57f';


export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | Rody Wellness`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: 'https://www.rody-wellness.com', // Replace with your actual domain
    siteName: 'Rody Wellness',
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'Rody Wellness Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${ptSans.variable} font-body antialiased`}>
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="min-h-screen flex-1 bg-transparent pb-20 md:pb-0">
              {children}
            </main>
            <Footer />
            <MobileCtaBar />
            <Toaster />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
