
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/hooks/use-auth';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { MobileCtaBar } from '@/components/layout/mobile-cta-bar';

export const metadata: Metadata = {
  title: 'Sure by Rody',
  description: 'Premium home wellness services in Dubai.',
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
            <main className="min-h-screen flex-1 bg-transparent backdrop-blur-sm pb-20 md:pb-0">
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
