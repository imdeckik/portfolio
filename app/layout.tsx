import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Next.js loads Inter directly from Google - fast and no external requests
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Declan Kikyanto - Product Designer",
  description:
    "Product designer focused on building intuitive and usefull prodcuts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {/* Navigation Bar*/}
        <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          {/* Left: My name*/}
          <Link
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-accent transition-colors tracking-tight"
          >
            Declan Kikyanto
          </Link>

          {/* Centre: Navigation links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-accent font-medium tracking-tight"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium tracking-tight"
            >
              About Me
            </Link>
          </div>

          {/* Right: Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm/3.5 text-gray-500 hover:text-gray-900 tracking-tight transition-colors px-4 py-2.5 border border-gray-200 rounded-full"
          >
            Resume
          </a>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
