// src/app/projects/ai-sales-agent/page.js
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <main className="container mx-auto px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* --- Back to Projects Link --- */}
        <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
          &larr; Back to All Projects
        </Link>

        {/* --- Project Header --- */}
        <div className="text-center border-b border-white/10 pb-8 mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">AI Sales Agent for Clinics</h1>
          <p className="text-lg sm:text-xl text-gray-400">
            An autonomous agent that qualifies leads, answers questions, and books appointments 24/7.
          </p>
        </div>

        {/* --- Project Content --- */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Using prose classes from Tailwind for beautiful typography */}
          
          <h2>The Challenge</h2>
          <p>Medical and dental clinics lose a significant number of potential patients who visit their website after hours. Staff can't answer questions or book appointments, leading to lost revenue and a poor customer experience.</p>
          
          <h2>The Solution</h2>
          <p>I developed an autonomous AI Sales Agent that integrates directly into the clinic's website. This agent acts as a virtual receptionist, available 24/7 to engage visitors, answer frequently asked questions about services and insurance, qualify them as potential patients, and book appointments directly into the clinic's calendar system.</p>

          {/* --- Key Features --- */}
          <h3>Key Features</h3>
          <ul>
            <li><strong>24/7 Availability:</strong> Never misses a potential patient, day or night.</li>
            <li><strong>Intelligent Lead Qualification:</strong> Asks targeted questions to determine a visitor's needs and intent.</li>
            <li><strong>Automated Appointment Booking:</strong> Integrates with calendar APIs to schedule appointments in real-time.</li>
            <li><strong>Natural Conversation:</strong> Provides a human-like chat experience, building trust with potential patients.</li>
            <li><strong>Seamless Handoff:</strong> Can escalate complex queries to human staff via email or SMS alerts.</li>
          </ul>

          {/* --- Tech Stack --- */}
          <h3>Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full">Next.js</span>
            <span className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full">LangChain</span>
            <span className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full">Grok</span>
            <span className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full">Vercel</span>
            <span className="bg-gray-700 text-blue-300 text-sm font-semibold px-3 py-1.5 rounded-full">Tailwind CSS</span>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="text-center mt-16">
          <Link href="/#agent" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105">
            Discuss Your Project with My AI
          </Link>
        </div>
      </div>
    </main>
  );
}
