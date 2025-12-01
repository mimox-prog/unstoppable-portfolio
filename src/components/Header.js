// src/components/Header.js
import Link from 'next/link';
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">Marouan Chakir</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#agent" className="hover:text-blue-400">AI Assistant</Link>
        </div>
        <a href="mailto:your-email@example.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Contact Me</a>
      </nav>
    </header>
  );
}
