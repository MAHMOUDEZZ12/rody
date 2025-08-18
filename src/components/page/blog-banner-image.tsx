
import Image from 'next/image';

export default function BlogBannerImage({ imageUrl, alt }: { imageUrl: string, alt: string }) {
    return (
         <Image 
            src={imageUrl} 
            alt={alt} 
            fill
            className="object-cover"
        />
    )
}
