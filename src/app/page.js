"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiSearch, FiCalendar, FiDollarSign, FiX } from 'react-icons/fi';

// --- Main Homepage Component ---
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const agentModules = [
    {
      icon: FiSearch,
      title: "Market Research & Analysis",
      description: "Deploys an agent to perform real-time web searches, analyze competitors, and synthesize market trends.",
    },
    {
      icon: FiCalendar,
      title: "Automated Sales & Booking",
      description: "Engages potential leads, answers questions, and autonomously books appointments on a live calendar.",
    },
    {
      icon: FiDollarSign,
      title: "Financial Data & Insights",
      description: "Connects to real-time financial data APIs to provide stock prices, news, and market analysis.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-hidden">
      <main className="container mx-auto px-6 py-20 md:py-32 animate-fade-in">
        {/* --- Header --- */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            I Build Autonomous AI Systems
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto">
            That analyze markets, automate sales, and drive measurable business growth.
          </p>
        </header>

        {/* --- Agent Modules Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {agentModules.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-brand-gray border border-brand-light-gray rounded-xl p-6 flex items-start space-x-4"
            >
              <agent.icon className="w-8 h-8 text-brand-blue mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white">{agent.title}</h3>
                <p className="text-brand-text-secondary">{agent.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Main Call to Action --- */}
        <div className="text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-blue text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-brand-blue/20 transition-all duration-300"
          >
            Deploy a Live Agent
          </motion.button>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="text-center py-10 border-t border-brand-light-gray">
        <p className="text-brand-text-secondary">&copy; {new Date().getFullYear()} Marouan Chakir. All rights reserved.</p>
      </footer>

      {/* --- The Sandbox Modal --- */}
      {isModalOpen && <SandboxModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

// --- The Sandbox Modal Component ---
function SandboxModal({ closeModal }) {
  // This will be replaced with the live agent logic in our next step.
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-brand-gray border border-brand-light-gray rounded-2xl shadow-2xl shadow-black/50 flex flex-col"
      >
        <header className="p-4 flex justify-between items-center border-b border-brand-light-gray">
          <div className="flex items-center space-x-3">
            <FiCpu className="text-brand-green animate-pulse-slow" />
            <h2 className="text-lg font-bold text-white">Agent Sandbox</h2>
          </div>
          <button onClick={closeModal} className="text-brand-text-secondary hover:text-white">
            <FiX size={24} />
          </button>
        </header>
        
        <div className="p-6 flex-grow h-[60vh] overflow-y-auto">
          <div className="text-center text-brand-text-secondary p-8">
            <p>The agent is ready.</p>
            <p className="text-sm mt-2">State your business objective below.</p>
          </div>
        </div>

        <footer className="p-4 border-t border-brand-light-gray bg-brand-dark/50">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="e.g., 'Book a meeting with Marouan for next Tuesday...'"
              className="w-full bg-transparent text-white placeholder-brand-text-secondary focus:outline-none"
            />
            <button className="bg-brand-blue text-white font-semibold px-5 py-2 rounded-lg ml-4">
              Deploy
            </button>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
}
