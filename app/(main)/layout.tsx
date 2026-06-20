"use client";

import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // If you're on the homepage, pathname = "/"
  // If you're on about, pathname = "/about"

  return (
    <>
      {/* Navigation Bar*/}
      <nav className="border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between h-18">
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
                className={`text-sm font-medium tracking-tight transition-colors ${
                  pathname === "/" || pathname.startsWith("/work")
                    ? "text-accent" // Active - you're here
                    : "text-gray-400 hover:text-gray-500" // Inactive - you're not here
                }`}
              >
                Work
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium tracking-tight transition-colors ${
                  pathname === "/about"
                    ? "text-accent" // Active - you're here
                    : "text-gray-400 hover:text-gray-500" // Inactive - you're not here
                }`}
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
          </div>
        </Container>
      </nav>

      {/* Page Content */}
      <main className="pb-[160]">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-10 pb-6">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
