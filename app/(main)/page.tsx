import Container from "@/app/components/Container";
import ProjectCard from "@/app/components/ProjectCard";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section
        className="pb-24 flex flex-col justify-center"
        style={{ minHeight: "calc(100vh - 76px" }}
      >
        <div className="max-w-2xl">
          {/* Open to opportunities indicator */}
          <div className="flex items-center gap-2 mb-3 px-2.5 py-1 border border-gray-200 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            <span className="text-[13px] text-gray-500 font-medium tracking-tight">
              Open to new opportunities
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-gray-900">
            I'm Declan, a product designer focused on building {""}
            <span className="font-abalone text-accent">intuitive</span>
            {""} and {""}
            <span className="font-abalone text-accent">useful products.</span>
          </h1>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-start">
        <span className="uppercase text-[13px] font-medium text-gray-400 mb-2">
          Projects
        </span>
        <div className="grid grid-cols-6 gap-6">
          {/* Row 1 - two cards */}
          <div className="col-span-3">
            <ProjectCard
              title="Building an AI-powered search engine"
              category="Product design"
              year="2026"
              href="/work/search-sensei"
              src="/images/ss-traditional-mode-results.png"
            />
          </div>
          <div className="col-span-3">
            <ProjectCard
              title="Kintra: design to development"
              category="SwiftUI development"
              year="2025"
              href="/work/"
              info="· Work in progress"
            />
          </div>

          {/* Row 2 - full width card */}
          <div className="col-span-6">
            <ProjectCard
              title="Spender"
              category="Mobile design"
              year="2026"
              href="/work/"
              info="· Work in progress"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
