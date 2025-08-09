
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/hooks/use-auth';

export const metadata: Metadata = {
  title: 'Rody Wellness',
  description: 'Premium home wellness services in Dubai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased app-background">
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="min-h-screen flex-1 bg-background/80 backdrop-blur-sm">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
