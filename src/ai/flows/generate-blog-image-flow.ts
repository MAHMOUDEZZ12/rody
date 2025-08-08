'use server';
/**
 * @fileOverview A flow for generating images for blog posts.
 *
 * - generateBlogImage - A function that generates an image based on the blog title and content.
 * - GenerateBlogImageInput - The input type for the generateBlogImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogImageInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The content of the blog post.'),
  dataAiHint: z.string().describe('A hint for the AI to generate a relevant image.'),
});
export type GenerateBlogImageInput = z.infer<typeof GenerateBlogImageInputSchema>;

const generateBlogImageFlow = ai.defineFlow(
  {
    name: 'generateBlogImageFlow',
    inputSchema: GenerateBlogImageInputSchema,
    outputSchema: z.string(),
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a high-quality, visually appealing image for a luxury wellness spa blog post.
      The image should be serene, elegant, and professional.
      Theme: ${input.dataAiHint}.
      Blog Post Title: "${input.title}"
      Key concepts from the blog post: ${input.content.substring(0, 200)}...
      The image should be suitable for a blog header. Avoid text and clutter. Focus on a clean, luxurious aesthetic.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });
    return media!.url;
  }
);

export async function generateBlogImage(input: GenerateBlogImageInput): Promise<string> {
  return generateBlogImageFlow(input);
}
