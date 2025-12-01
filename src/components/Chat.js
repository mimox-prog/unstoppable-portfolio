// src/components/Chat.js (Upgraded)
"use client";

import { useState, useRef, useEffect } from 'react';

export default function Chat({
  agentType = "KAI_ASSISTANT",
  title = "Live AI Assistant",
  placeholder = "Ask me about Marouan's skills or projects..."
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, agent_type: agentType }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const aiMessage = { role: 'assistant', content: data.reply };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Failed to get AI response:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="agent" className="py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-gray-900/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
          </div>
          <div className="p-4 sm:p-6 h-96 overflow-y-auto">
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-sm md:max-w-md px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 px-4 py-3 rounded-2xl flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-4 sm:p-6 border-t border-white/10">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="flex-grow bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
