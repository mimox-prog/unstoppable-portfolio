// src/app/page.js
import Link from 'next/link';

// --- HERO SECTION ---
function Hero() {
  return (
    <section className="text-center py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
          Elite Agentic AI Systems
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto text-balance">
          I design and deploy autonomous agents that automate complex workflows, supercharge sales, and deliver intelligent customer support.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
            View My Work
          </Link>
          <Link href="#agent" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
            Chat with My AI
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- PROJECTS SECTION ---
function Projects() {
  const projects = [
    { title: "AI Sales Agent for Clinics", description: "An autonomous agent that qualifies leads, answers questions, and books appointments via web chat.", tags: ["Sales Automation", "LangChain", "Next.js"] },
    { title: "Voice Concierge Agent", description: "A voice-activated AI that manages bookings and customer queries over the phone.", tags: ["Voice AI", "Twilio", "Python"] },
    { title: "E-commerce Support Agent", description: "A multi-agent system that handles returns, order tracking, and product questions for Shopify stores.", tags: ["E-commerce", "Multi-Agent", "Shopify API"] },
    { title: "Unified Agentic Workspace", description: "An internal platform that orchestrates multiple agents for research, analysis, and reporting tasks.", tags: ["Workflow Automation", "CrewAI", "Internal Tools"] },
  ];
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <span key={tag} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/* We will add the Chat component here in the next step */}
    </>
  );
}
