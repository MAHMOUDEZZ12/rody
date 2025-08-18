import Image from 'next/image';
import { type BlogPost } from '@/lib/blog';
import { generateSimpleImage } from '@/ai/flows/generate-simple-image-flow';

export default async function BlogBannerImage({ post }: { post: BlogPost }) {
    let imageUrl = post.image;
    try {
        imageUrl = await generateSimpleImage({prompt: `A beautiful and luxurious image representing a blog post about ${post.category}. Keywords: ${post.title}, ${post.dataAiHint}. Professional photography, clean background, elegant aesthetic, high resolution.`});
    } catch (e) {
        console.error(e);
    }

    return (
         <Image 
            src={imageUrl} 
            alt={post.title} 
            fill
            className="object-cover"
        />
    )
}
