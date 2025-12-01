import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@lang-chain/core/prompts";

// Make sure to set these environment variables in your Vercel project settings
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const TAVILY_API_KEY = process.env.TAVILY_API_KEY;

// 1. Define the tools the agent can use
const tools = [new TavilySearchResults({ maxResults: 3, apiKey: TAVILY_API_KEY })];

// 2. Create the Agent
// We are using a Free model from OpenRouter for this example
const llm = new ChatOpenAI({
  model: "mistralai/mistral-7b-instruct:free",
  apiKey: OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
} );

const prompt = ChatPromptTemplate.fromMessages([
  ("system", "You are a powerful AI assistant. Your name is Manus. You have access to a web search tool."),
  new MessagesPlaceholder("chat_history"),
  ("human", "{input}"),
  new MessagesPlaceholder("agent_scratchpad"),
]);

const agent = createOpenAIFunctionsAgent({
  llm,
  tools,
  prompt,
});

// 3. Create the Agent Executor
const agentExecutor = new AgentExecutor({
  agent,
  tools,
  verbose: true, // Set to `false` in production
});

// 4. Define the API handler
export async function POST(req) {
  try {
    const body = await req.json();
    const userInput = body.input;
    const chatHistory = body.chat_history || [];

    if (!userInput) {
      return new Response(JSON.stringify({ error: "Input is required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`Invoking agent with input: "${userInput}"`);

    // This is where the magic happens
    const result = await agentExecutor.invoke({
      input: userInput,
      chat_history: chatHistory,
    });

    console.log("Agent output:", result.output);

    return new Response(JSON.stringify({ output: result.output }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Agent API Error:", error);
    return new Response(JSON.stringify({ error: "An internal server error occurred." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
