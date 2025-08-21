
'use server';
/**
 * @fileOverview A simple flow for generating images, with caching and fallbacks.
 *
 * - generateSimpleImage - A function that generates an image based on a prompt.
 * - GenerateSimpleImageInput - The input type for the generateSimpleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { unstable_cache as cache } from 'next/cache';

const GenerateSimpleImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the image from.'),
});
export type GenerateSimpleImageInput = z.infer<
  typeof GenerateSimpleImageInputSchema
>;

// This flow is designed to be called directly from pages/components.
// It will generate an image once and cache it for future requests.
const generateSimpleImageFlow = ai.defineFlow(
  {
    name: 'generateSimpleImageFlow',
    inputSchema: GenerateSimpleImageInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    // If the API key is not set, immediately return a placeholder.
    // This prevents errors in development and production if the key is missing.
    if (!process.env.GEMINI_API_KEY) {
      console.error(
        'GEMINI_API_KEY is not set. Returning placeholder image. Please create a .env.local file for local development and add the secret to Secret Manager for production.'
      );
      return 'https://placehold.co/600x400.png';
    }
    
    const maxRetries = 3;
    for (let i = 0; i < maxRetries; i++) {
        try {
            const {media} = await ai.generate({
                model: 'googleai/gemini-2.0-flash-preview-image-generation',
                prompt: input.prompt,
                config: {
                    responseModalities: ['TEXT', 'IMAGE'],
                },
            });

            if (!media?.url) {
                throw new Error('No media URL returned from image generation.');
            }
            return media.url;
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : String(e);
            console.warn(`Image generation attempt ${i + 1} of ${maxRetries} failed. Retrying... Error: ${errorMessage}`);
            if (i === maxRetries - 1) {
                console.error("All image generation attempts failed. This might be due to a missing API key in the production environment, safety settings, or an issue with the generation service. Falling back to placeholder.", e);
                // If all retries fail, return a placeholder.
                return 'https://placehold.co/600x400.png';
            }
            // Wait for a short period before retrying
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    // This line should be unreachable, but as a fallback, return placeholder.
    return 'https://placehold.co/600x400.png';
  }
);

// We wrap the flow in Next.js's `cache` function.
// This creates a new function that will only execute the flow once for a given input.
// Subsequent calls with the same input will return the cached result.
// The key includes a version number ('v1') so we can invalidate caches if we change the prompt.
export const generateSimpleImage = cache(
  async (input: GenerateSimpleImageInput) => generateSimpleImageFlow(input),
  ['generate-simple-image-v1'],
  { revalidate: 3600 * 24 } // Cache for 24 hours
);
