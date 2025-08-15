'use server';
/**
 * @fileOverview A simple flow for generating images.
 *
 * - generateSimpleImage - A function that generates an image based on a prompt.
 * - GenerateSimpleImageInput - The input type for the generateSimpleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {unstable_cache as cache} from 'next/cache';
import 'react';

const GenerateSimpleImageInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the image from.'),
});
export type GenerateSimpleImageInput = z.infer<
  typeof GenerateSimpleImageInputSchema
>;

const generateSimpleImageFlow = ai.defineFlow(
  {
    name: 'generateSimpleImageFlow',
    inputSchema: GenerateSimpleImageInputSchema,
    outputSchema: z.string(),
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });
    return media!.url;
  }
);

export const generateSimpleImage = cache(
  async (input: GenerateSimpleImageInput) => generateSimpleImageFlow(input),
  ['generate-simple-image-v3'],
  {revalidate: 3600 * 24} // Cache for 24 hours
);
