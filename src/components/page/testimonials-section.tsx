
'use client';

import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Skeleton } from '../ui/skeleton';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
    const isMobile = useIsMobile();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"><Skeleton className="h-48 w-full" /><Skeleton className="h-48 w-full" /><Skeleton className="h-48 w-full" /></div>;
    }

    return (
         <div className="relative mt-12">
            {isMobile ? (
                <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="text-center bg-white/80 backdrop-blur-sm shadow-lg">
                            <CardContent className="p-6">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardHeader className="pt-0">
                            <CardTitle className="font-body text-base font-bold">{testimonial.name}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">{testimonial.service}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="text-center bg-white/80 backdrop-blur-sm shadow-lg break-inside-avoid">
                            <CardContent className="p-6">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardHeader className="pt-0">
                            <CardTitle className="font-body text-base font-bold">{testimonial.name}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">{testimonial.service}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
