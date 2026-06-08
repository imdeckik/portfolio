import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navigation Bar*/}
      <nav className="border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between py-5">
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
          </div>
        </Container>
      </nav>

      {/* Page Content */}
      <main className="pb-[160]">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-10 pb-6">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
