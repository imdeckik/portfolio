import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";

/* This layout.tsx is a Navbar for all case study */

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between h-18">
            <span className="text-sm font-medium text-gray-900 tracking-tight">
              Declan Kikyanto
            </span>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Back
            </Link>
          </div>
        </Container>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-10 pb-6">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
