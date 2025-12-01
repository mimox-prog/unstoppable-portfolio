// src/components/Footer.js (The Final, Polished Version)
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Marouan Chakir. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/mimox-prog" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/marwan-chakir/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
   );
}
