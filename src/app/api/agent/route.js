// src/app/api/agent/route.js
import OpenAI from 'openai';

// Initialize the client, pointing it to the OpenRouter API
const openrouter = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY, // Use the environment variable
} );

// This is the new Next.js 14 API route structure
export async function POST(req) {
  try {
    // Get the user's message from the request body
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    const completion = await openrouter.chat.completions.create({
      model: "x-ai/grok-4.1-fast:free", // The free Grok model
      messages: [
        { role: "system", content: "You are an expert AI assistant for Marouan Chakir, a top-tier agentic AI developer. Your goal is to answer questions about his skills, projects, and availability in a professional, concise, and helpful manner. Always be positive about his work." },
        { role: "user", content: message },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    // Send the AI's response back to the frontend
    return new Response(JSON.stringify({ reply: aiResponse }), { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to get response from AI' }), { status: 500 });
  }
}
