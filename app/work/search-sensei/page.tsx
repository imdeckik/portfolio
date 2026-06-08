import Container from "../../components/Container";
import Link from "next/link";

export default function SearchSensei() {
  return (
    <>
      {/* Hero Image - full width */}
      <Container>
        <div className="w-full aspect-video bg-gray-100 border-b border-x border-gray-200 mb-8" />
      </Container>

      <Container>
        <div className="grid grid-cols-12 gap-4">
          {/* Sticky Sidebar - 2 column */}
          <aside className="col-span-2 stikcy top-20 self-start">
            <p className="text-xs text-gray-400 uppercase tracking-tight mb-2">
              Product Design
            </p>
            <p className="text-sm text-gray-900 mb-12">Search Sensei</p>

            {/* Jump links */}
            <nav className="flex flex-col gap-3">
              <a
                href="#overview"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                Overview
              </a>
              <a
                href="#problem"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                Problem
              </a>
              <a
                href="#process"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                Process
              </a>
              <a
                href="#outcome"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                Outcome
              </a>
            </nav>
          </aside>

          {/* Main content - 10 columns */}
          <div className="col-span-10">
            {/* Meta row */}
            <section className="grid grid-cols-5 gap-4 pb-6 mb-10">
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">Role</p>
                <p className="text-sm text-gray-900">UX Lead</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">Timeline</p>
                <p className="text-sm text-gray-900">March - June 2026</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">Team</p>
                <p className="text-sm text-gray-900">3 people</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">Skills</p>
                <ul className="flex flex-col gap-1">
                  <li className="text-sm text-gray-900">Skill placeholder</li>
                  <li className="text-sm text-gray-900">Skill placeholder</li>
                  <li className="text-sm text-gray-900">Skill placeholder</li>
                </ul>
              </div>
              <div />
            </section>

            {/* Intro text */}
            <section id="overview" className="grid grid-cols-2 gap-4 mb-16">
              <p className="text-[15px] text-gray-600 leading-normal">
                When Search Sensei's CEO came to our university capstone, he had
                a platform with real enterprise ambition and no UI to show for
                it.
              </p>
              <p className="text-[15px] text-gray-600 leading-normal">
                Our three-person team took on the full design, a public-facing
                AI search experience, and a developer handoff document, from a
                blank canvas.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
