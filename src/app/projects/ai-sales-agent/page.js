// src/app/projects/ai-sales-agent/page.js (Live Agent Version)
"use client";

import Link from 'next/link';
import Chat from '@/components/Chat'; // We will reuse our Chat component!

export default function ProjectPage() {
  return (
    <main className="container mx-auto px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
          &larr; Back to All Projects
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Live Demo: AI Sales Agent</h1>
          <p className="text-lg sm:text-xl text-gray-400">
            This is a real, interactive demo. Try asking about services, insurance, or booking an appointment.
          </p>
        </div>

        {/* 
          This is the magic. We are reusing the same Chat component,
          but telling it to act as the 'AI_SALES_AGENT'.
        */}
        <Chat 
          agentType="AI_SALES_AGENT" 
          title="Clinic Sales Agent"
          placeholder="Ask about our dental services..."
        />

      </div>
    </main>
  );
}
