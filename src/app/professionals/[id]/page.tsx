
'use client'

import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { professionals, services, type Professional } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Briefcase, Calendar, Star } from 'lucide-react';
import Link from 'next/link';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function ProfessionalImage({ professional }: { professional: Professional }) {
    let imageUrl;
    try {
        imageUrl = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a professional. Keywords: ${professional.name}, ${professional.dataAiHint}. Professional product photography, clean background, elegant aesthetic, high resolution.`});
    } catch (e) {
        console.error(e);
        imageUrl = professional.image;
    }

    return (
        <AvatarImage 
            src={imageUrl}
            alt={professional.name} 
            className="object-cover" 
        />
    )
}

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const professional = professionals.find(p => p.id === params.id);

  if (!professional) {
    notFound();
  }

  const professionalServices = services.filter(s => s.professionals.includes(professional.id));

  return (
    <div className="container max-w-6xl px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <Avatar className="w-48 h-48 border-4 border-primary mb-4">
            <Suspense fallback={<Skeleton className='w-full h-full rounded-full' />}>
                <ProfessionalImage professional={professional} />
            </Suspense>
            <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-3xl text-primary">{professional.name}</h1>
          <p className="text-lg text-muted-foreground font-semibold mt-1">{professional.specialty}</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>{professional.experience} Years of Experience</span>
          </div>
          <Card className="mt-6 w-full">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center justify-center gap-2"><Star className="text-primary"/> Areas of Excellence</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 justify-center">
                {professional.areasOfExcellence.map(area => (
                    <Badge key={area} variant="default" className="text-base py-1 px-3 bg-primary/20 text-primary-foreground hover:bg-primary/30">{area}</Badge>
                ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">About {professional.name.split(' ')[0]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professional.bio.split('. ').map((sentence, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {sentence}{sentence.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </CardContent>
            </Card>

             <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><Calendar className="text-primary"/> Availability & Booking</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">To view {professional.name.split(' ')[0]}'s real-time availability and book a session, please select a service below.</p>
                     <Button asChild className="rounded-full">
                      <Link href="/services">Explore Services to Book</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>

       <div className="mt-12 border-t pt-8">
         <h2 className="font-headline text-3xl text-primary text-center mb-8">Services Offered by {professional.name.split(' ')[0]}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalServices.map(service => (
                 <Link key={service.id} href={`/services/${service.id}`} className="block group h-full">
                   <div key={service.id} className="p-6 border rounded-lg hover:bg-muted/50 transition-colors h-full flex flex-col">
                      <h4 className="font-semibold text-lg group-hover:text-primary">{service.name}</h4>
                      <p className="text-sm text-muted-foreground flex-grow mt-2">{service.description}</p>
                      <Button variant="link" className="p-0 h-auto mt-4 self-start">View Details &rarr;</Button>
                  </div>
                 </Link>
              ))}
          </div>
      </div>

    </div>
  )
}
