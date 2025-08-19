
'use server';
/**
 * @fileOverview A simple flow for generating images.
 *
 * - generateSimpleImage - A function that generates an image based on a prompt.
 * - GenerateSimpleImageInput - The input type for the generateSimpleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import 'react';

const GenerateSimpleImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the image from.'),
});
export type GenerateSimpleImageInput = z.infer<
  typeof GenerateSimpleImageInputSchema
>;

// This flow is now intended to be called by a build script, not directly by the app.
const generateSimpleImageFlow = ai.defineFlow(
  {
    name: 'generateSimpleImageFlow',
    inputSchema: GenerateSimpleImageInputSchema,
    outputSchema: z.string(),
  },
  async input => {
    if (!process.env.GEMINI_API_KEY) {
      console.error(
        'GEMINI_API_KEY is not set. Please create a .env.local file for local development and add the secret to Secret Manager for production.'
      );
      // Return a placeholder if the API key is not set.
      return 'https://placehold.co/600x400.png';
    }

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
        console.error("Image generation failed. This might be due to a missing API key in the production environment, safety settings, or an issue with the generation service. Falling back to placeholder.", e);
        return 'https://placehold.co/600x400.png';
    }
  }
);

// We export the flow directly now, without the Next.js cache wrapper.
export const generateSimpleImage = generateSimpleImageFlow;
