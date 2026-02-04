
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { ADMISSION_INDIA_CONTEXT } from "@/lib/context";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const openai = createOpenAI({
            baseURL: process.env.OPENAI_BASE_URL || 'https://openrouter.ai/api/v1',
            apiKey: "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",
        });

        const result = await streamText({
            model: openai('sourceful/riverflow-v2-fast') as any,
            messages,
            system: `${ADMISSION_INDIA_CONTEXT}
      
      STRICT PROTOCOL:
      1. You are a helpful AI for Admission India.
      2. Keep answers SHORT (max 1-2 sentences).
      3. If user asks to go to a page, YOU MUST say something like "Opening that page for you" AND include the [[NAVIGATE:/path]] tag.
         - Medical -> [[NAVIGATE:/medical]]
         - Engineering -> [[NAVIGATE:/engineering]]
         - Management -> [[NAVIGATE:/management]]
         - Study Abroad -> [[NAVIGATE:/study-abroad]]
         - Contact -> [[NAVIGATE:/contact]]
      4. Example: "Certainly! Here is the Medical Colleges page. [[NAVIGATE:/medical]]"
      5. Do NOT list services if you are navigating. Just navigate.
      `,
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
