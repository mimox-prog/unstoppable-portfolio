// src/components/Header.js (The Final, Polished Version)
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-white transition-colors hover:text-blue-400">
          Marouan Chakir
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="/#projects" className="transition-colors hover:text-white">Projects</Link>
          <Link href="#agent" className="transition-colors hover:text-white">AI Assistant</Link>
        </nav>
        <a
          href="mailto:your-email@example.com" // IMPORTANT: Add your real email here
          className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
