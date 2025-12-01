// src/app/page.js (The Final, Conversion-Focused Homepage)
"use client";

import Link from 'next/link';
import Chat from '@/components/Chat';

// --- SVG Icons for Social Proof ---
const VercelIcon = () => <svg height="26" viewBox="0 0 116 100" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M57.5 0L115 100H0L57.5 0Z" /></svg>;
const NextJsIcon = ( ) => <svg height="26" viewBox="0 0 180 180" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180ZM90 162C129.765 162 162 129.765 162 90C162 50.235 129.765 18 90 18C50.235 18 18 50.235 18 90C18 129.765 50.235 162 90 162Z" /><path d="M126.9 144.9L71.1 54H63V126H71.1V72.9L117.9 153L126.9 144.9Z" /></svg>;
const OpenRouterIcon = ( ) => <svg height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#fff"/></svg>;
const GrokIcon = ( ) => <svg height="26" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2zm0 4.55L18.09 19H5.91L12 6.55z"/></svg>;


// --- HERO SECTION ---
function Hero( ) {
  return (
    <section className="relative text-center py-20 sm:py-32 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900/80 to-black"></div>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
          Elite Agentic AI Systems
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-balance">
          I design and deploy autonomous agents that automate complex workflows, supercharge sales, and deliver intelligent customer support.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/20">
            View My Work
          </Link>
          <Link href="#agent" className="bg-gray-700/50 border border-white/20 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
            Chat with My AI
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- SOCIAL PROOF / TRUST BAR ---
function TrustBar() {
  return (
    <div className="py-8 bg-black/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-400 mb-4">Powered by Industry-Leading Technology</p>
        <div className="flex justify-center items-center gap-8 sm:gap-12 opacity-60">
          <NextJsIcon />
          <VercelIcon />
          <OpenRouterIcon />
          <GrokIcon />
        </div>
      </div>
    </div>
  );
}


// --- PROJECTS SECTION ---
function Projects() {
  const projects = [
    { 
      title: "AI Sales Agent for Clinics", 
      description: "An autonomous agent that converts website visitors into booked appointments, 24/7.", 
      tags: ["Lead Conversion", "Sales Automation", "Next.js"],
      link: "/projects/ai-sales-agent"
    },
    { 
      title: "Voice Concierge Agent", 
      description: "A voice-activated AI that manages bookings and answers customer queries over the phone, reducing staff workload.", 
      tags: ["Voice AI", "Customer Service", "Python"],
      link: "#"
    },
    { 
      title: "E-commerce Support Agent", 
      description: "A multi-agent system that resolves 80% of support tickets for Shopify stores, from returns to order tracking.", 
      tags: ["E-commerce", "Multi-Agent", "Shopify"],
      link: "#"
    },
    { 
      title: "Unified Agentic Workspace", 
      description: "An internal platform that empowers teams by using AI agents for complex research, analysis, and reporting.", 
      tags: ["Workflow Automation", "Internal Tools", "CrewAI"],
      link: "#"
    },
  ];
  return (
    <section id="projects" className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From Concept to Conversion</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto text-balance">Each project is a real, production-ready system designed to deliver measurable business value.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.title} href={project.link || "#"} className="block group">
              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-gray-900 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>)}
                </div>
              </div>
            </Link>
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
      <TrustBar />
      <Projects />
      <Chat />
    </>
  );
}
