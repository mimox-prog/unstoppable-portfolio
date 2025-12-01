// src/app/layout.js (The Final, Corrected Version)
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marouan Chakir | Agentic AI Developer",
  description: "Building elite agentic AI systems for voice, workflow, and sales automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-200`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
