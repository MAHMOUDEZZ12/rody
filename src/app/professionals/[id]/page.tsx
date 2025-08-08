
'use client'

import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { professionals, services, type Professional } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBlogImage } from '@/ai/flows/generate-blog-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Briefcase, Calendar, Star, ThumbsUp } from 'lucide-react';
import Link from 'next/link';


function ProfessionalImage({ professional }: { professional: Professional }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    generateBlogImage({ title: professional.name, content: professional.specialty, dataAiHint: professional.dataAiHint })
      .then(url => setImageUrl(url))
      .catch(console.error);
  }, [professional]);

  if (!imageUrl) return <Skeleton className="w-full h-full rounded-full" />;

  return (
    <AvatarImage src={imageUrl} alt={professional.name} className="object-cover" />
  );
}


export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const professional = professionals.find(p => p.id === params.id);

  if (!professional) {
    notFound();
  }

  const professionalServices = services.filter(s => s.professionals.includes(professional.id));

  return (
    <div className="container max-w-5xl px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center">
          <Avatar className="w-48 h-48 border-4 border-primary mb-4">
             <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
                <ProfessionalImage professional={professional} />
              </Suspense>
            <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-3xl text-primary text-center">{professional.name}</h1>
          <p className="text-lg text-muted-foreground font-semibold text-center mt-1">{professional.specialty}</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>{professional.experience} Years of Experience</span>
          </div>
           <Button asChild className="mt-6 rounded-full w-full max-w-xs">
            <Link href="/services">Book with {professional.name.split(' ')[0]}</Link>
          </Button>
        </div>
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">About {professional.name.split(' ')[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{professional.bio}</p>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><Star className="text-primary"/> Areas of Excellence</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {professional.areasOfExcellence.map(area => (
                        <Badge key={area} variant="secondary" className="text-base py-1 px-3">{area}</Badge>
                    ))}
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><ThumbsUp className="text-primary"/> Services Offered</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {professionalServices.map(service => (
                       <Link key={service.id} href={`/services/${service.id}`} className="block">
                         <div key={service.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <h4 className="font-semibold">{service.name}</h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                       </Link>
                    ))}
                </CardContent>
            </Card>

             <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><Calendar className="text-primary"/> Availability</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">To view {professional.name.split(' ')[0]}'s real-time availability, please select a service and proceed to the booking calendar.</p>
                </CardContent>
            </Card>

        </div>
      </div>

    </div>
  )
}
