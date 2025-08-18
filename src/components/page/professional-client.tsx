'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function ProfessionalClientActions() {
  const router = useRouter();

  return (
    <>
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </>
  );
}

export function BookServiceButton() {
    return (
        <Button asChild className="rounded-full">
            <Link href="/services">Explore Services to Book</Link>
        </Button>
    )
}