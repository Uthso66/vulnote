import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VulnNote | AI-Powered Pentesting Reports",
  description:
    "Transform messy security finding into professional reports in seconds.",
  keywords: [
    "pentesting",
    "cybersecurity",
    "AI",
    "vulnerablitiy",
    "reports",
    "automation",
    "security assessments",
    "penetration testing",
    "ethical hacking",
    "infosec",
    "bug bounty",
    "vulnote",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}
      >
        <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-linear-to-br from-red-500 to-purple-600 rounded-lg animate-pulse"></div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-red-400 to-purple-50 bg-clip-text text-transparent">
                  VulnNote
                </h1>
                <span className="text-xs px-2 py-1 bg-red-900/30 text-red-300 rounded-full border border-red-800">
                  BETA
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Templates
                </Link>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  History
                </Link>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Export
                </Link>
              </nav>

              <button className="px-4 py-2 bg-linear-to-r from-red-400 to-purple-400 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <main className="conainer mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-800 mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>Built by Uthso | Securing the web, one report at a time</p>
            <p className="mt-2">
              ⚠️ For authorized testing only | Use responsibly
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
