'use server';

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';
import { unstable_cache as cache } from 'next/cache';
import * as fs from 'fs';
import { Readable } from 'stream';
import type {MediaPart} from 'genkit';

const GenerateVideoInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate the video from.'),
});
export type GenerateVideoInput = z.infer<typeof GenerateVideoInputSchema>;

async function downloadVideo(video: MediaPart): Promise<string> {
    const fetch = (await import('node-fetch')).default;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set');
    }
    const videoDownloadResponse = await fetch(
      `${video.media!.url}&key=${apiKey}`
    );
    if (
      !videoDownloadResponse ||
      videoDownloadResponse.status !== 200 ||
      !videoDownloadResponse.body
    ) {
      throw new Error('Failed to fetch video');
    }
  
    const buffer = await videoDownloadResponse.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const contentType = video.media!.contentType || 'video/mp4';
    
    return `data:${contentType};base64,${base64}`;
}

const generateVideoFlow = ai.defineFlow(
  {
    name: 'generateVideoFlow',
    inputSchema: GenerateVideoInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    if (!process.env.GEMINI_API_KEY) {
      console.error(
        'GEMINI_API_KEY is not set for video generation. Please create a .env.local file and add your key to it.'
      );
      // Return a placeholder if the API key is not set. This could be a static image or a silent video.
      return 'https://placehold.co/600x400.png';
    }

    let { operation } = await ai.generate({
      model: googleAI.model('veo-3.0-generate-preview'),
      prompt: input.prompt,
      config: {
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    while (!operation.done) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
      throw new Error('failed to generate video: ' + operation.error.message);
    }
    
    const videoPart = operation.output?.message?.content.find((p) => !!p.media);
    if (!videoPart || !videoPart.media?.url) {
      throw new Error('Failed to find the generated video');
    }
    
    return await downloadVideo(videoPart as MediaPart);
  }
);

export const generateVideo = cache(
  async (input: GenerateVideoInput) => generateVideoFlow(input),
  ['generate-video-v4'],
  { revalidate: 3600 * 24 } // Cache for 24 hours
);
