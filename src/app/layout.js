// src/app/layout.js (Updated)
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import the Header

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marouan Chakir | Agentic AI Developer",
  description: "Building elite agentic AI systems for voice, workflow, and sales automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
