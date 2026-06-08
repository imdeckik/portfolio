import Link from "next/link";
import Container from "../components/Container";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between py-5">
            <span className="text-sm font-medium text-gray-900 tracking-tight">
              Project name here
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
    </>
  );
}
