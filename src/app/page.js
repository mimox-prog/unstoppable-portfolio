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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {agentModules.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-brand-gray border border-brand-light-gray rounded-xl p-6 flex items-start space-x-4 hover:border-brand-blue transition-colors duration-300"
            >
              <agent.icon className="w-8 h-8 text-brand-blue mt-1 flex-shrink-0" />
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

// --- The Sandbox Modal Component (UPGRADED) ---
function SandboxModal({ closeModal }) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  
  const handleDeploy = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    const newChatHistory = [...chatHistory, userMessage];
    setChatHistory(newChatHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          input: inputValue, 
          // Pass previous messages, excluding the last user message which is the current input
          chat_history: chatHistory 
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      const agentMessage = { role: 'agent', content: result.output };
      
      setChatHistory([...newChatHistory, agentMessage]);

    } catch (error) {
      console.error("Failed to deploy agent:", error);
      const errorMessage = { role: 'agent', content: "Error: Could not connect to the agent. Please check the console and ensure API keys are set." };
      setChatHistory([...newChatHistory, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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
          {chatHistory.length === 0 && !isLoading && (
            <div className="text-center text-brand-text-secondary p-8 animate-fade-in">
              <p>The agent is ready.</p>
              <p className="text-sm mt-2">State your business objective below.</p>
            </div>
          )}
          <div className="space-y-4">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-lg px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-brand-blue text-white' : 'bg-brand-light-gray text-brand-text'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="max-w-lg px-4 py-2 rounded-lg bg-brand-light-gray text-brand-text">
                    Thinking...
                  </div>
              </div>
            )}
          </div>
        </div>

        <footer className="p-4 border-t border-brand-light-gray bg-brand-dark/50">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleDeploy()}
              placeholder="e.g., 'What are the top 3 AI startups in Europe right now?'"
              className="w-full bg-transparent text-white placeholder-brand-text-secondary focus:outline-none"
              disabled={isLoading}
            />
            <button 
              onClick={handleDeploy}
              disabled={isLoading || !inputValue.trim()}
              className="bg-brand-blue text-white font-semibold px-5 py-2 rounded-lg ml-4 transition-colors duration-200 disabled:bg-brand-light-gray disabled:cursor-not-allowed"
            >
              {isLoading ? 'Executing...' : 'Deploy'}
            </button>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
}
