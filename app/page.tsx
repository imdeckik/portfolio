import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section
        className="pb-24 flex flex-col justify-center"
        style={{ minHeight: "calc(90vh - 72px" }}
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

      <section className="min-h-screen flex flex-col justify-center">
        {/* <h2 className="text-3xl font-medium leading-tight tracking-tight text-gray-900 pb-4">
          Selected <span className="font-abalone text-accent">works</span>
        </h2> */}
        <div className="grid grid-cols-6 gap-6">
          {/* Row 1 - two cards */}
          <div className="col-span-3">
            <ProjectCard
              title="Building an AI-powered search engine"
              category="Product design"
              year="2026"
              href="/work/search-sensei"
            />
          </div>
          <div className="col-span-3">
            <ProjectCard
              title="Kintra: design to development"
              category="SwiftUI development"
              year="2025"
              href="/work/"
            />
          </div>

          {/* Row 2 - full width card */}
          <div className="col-span-6">
            <ProjectCard
              title="Title here"
              category="Category here"
              year="Year here"
              href="/work/"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
