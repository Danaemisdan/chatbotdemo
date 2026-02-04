import { ADMISSION_INDIA_CONTEXT } from "@/lib/context";

// Force Node.js runtime for better error handling compatibility
export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(req: Request) {
    console.log('--- API POST REQUEST START (Raw Fetch) ---');
    try {
        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            console.error("FATAL: OPENROUTER_API_KEY is missing in process.env");
            return new Response(JSON.stringify({ error: "Configuration Error: Missing API Key" }), { status: 500 });
        }

        let body;
        try {
            body = await req.json();
        } catch (e) {
            console.error("Failed to parse request body:", e);
            return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
        }

        const { messages } = body;
        console.log('Received messages count:', messages?.length);

        // Prepare messages for OpenRouter
        const apiMessages = [
            {
                role: "system",
                content: `${ADMISSION_INDIA_CONTEXT}
                
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
`
            },
            ...messages.map((m: any) => ({
                role: m.role,
                content: m.content
            }))
        ];

        // Manual Fetch to OpenRouter
        console.log("Fetching OpenRouter...");
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Admission India"
            },
            body: JSON.stringify({
                "model": "stepfun/step-3.5-flash:free",
                "messages": apiMessages,
                "stream": false // Disable streaming for reliability
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("OpenRouter API Error:", response.status, errorText);
            return new Response(JSON.stringify({ error: "Upstream API Error", details: errorText }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "";
        console.log("Received Reply from OpenRouter:", reply.substring(0, 50));

        // Return as Vercel Text Stream format (0: "text")
        // This tricks the useChat hook into accepting the text as a stream chunk
        return new Response(`0:${JSON.stringify(reply)}\n`, {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });

    } catch (error: any) {
        console.error("CRITICAL API ERROR:", error);
        return new Response(JSON.stringify({
            error: "Internal Server Error",
            details: error instanceof Error ? error.message : String(error)
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
