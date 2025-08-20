
'use client';

import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

export default function BlogBannerImage({ imageUrl, alt }: { imageUrl: string, alt: string }) {
    if (!imageUrl) {
        return <Skeleton className="w-full h-full" />;
    }
    
    return (
         <Image 
            src={imageUrl} 
            alt={alt} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
    )
}
