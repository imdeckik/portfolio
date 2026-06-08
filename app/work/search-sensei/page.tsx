import CaseStudySectionProps from "@/app/components/CaseStudySection";
import Container from "@/app/components/Container";
import Link from "next/link";
import SplitView from "@/app/components/SplitView";

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
            <section id="overview" className="grid grid-cols-2 gap-4 mb-20">
              <p className="text-[15px] text-gray-500 leading-normal">
                When Search Sensei's CEO came to our university capstone, he had
                a platform with real enterprise ambition and no UI to show for
                it.
              </p>
              <p className="text-[15px] text-gray-500 leading-normal">
                Our three-person team took on the full design, a public-facing
                AI search experience, and a developer handoff document, from a
                blank canvas.
              </p>
            </section>

            <CaseStudySectionProps
              id="context"
              label="Context"
              title="What is Search Sensei: think smarter search, built for organisations"
              description="Search Sensei is a knowledge-discovery platform built for organisations that need to locate, understand, and reuse information at scale. It sits at the intersection of search, AI, and agentic capabilities, designed to surface the right answer confidently, not just a list of links."
            >
              <div className="aspect-video bg-gray-100" />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="problem"
              label="Problem"
              title="Search has gotten smarter. The experience hasn't kept up."
              description="AI can now answer questions directly, but most interfaces leave users with more questions than answers. Three friction points kept surfacing across existing products:"
            ></CaseStudySectionProps>

            <CaseStudySectionProps
              id="objectives"
              label="Objectives"
              title="A clear brief, with real constraints"
              description="Search Sensei needed a production-ready search experience that any website could plug in, generic enough to work across industries, sophisticated enough to handle AI responses with confidence."
            >
              <p className="text-[15px] text-gray-500 leading-normal mb-10">
                Our job was to design it end-to-end and hand it off to
                developers in a format they could build from directly
              </p>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="starting_point"
              label="Starting Point"
              title="Search Sensei was already live. But it wasn't enough."
              description="Search Sensei powered NAB's existing search, but it was purely traditional, no AI involved. That's exactly the gap we were designing to close."
            >
              <div className="aspect-video bg-gray-100" />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="design process"
              label="Design Process"
              title="Research first, design second"
              description="We followed a Design Thinking approach, starting with understanding the space before touching any screens. Every decision from here was grounded in what we observed, not what we assumed."
            ></CaseStudySectionProps>

            <CaseStudySectionProps
              title="Understanding the space: before designing anything, we studied what already existed"
              description="We started by analysing three products: Google, Bing, and NAB, because they represent different ends of the search spectrum: consumer-scale AI search and a real-world example of enterprise website search. For each, we mapped out every element and interaction in FigJam, screenshotted and annotated key UI patterns, then sorted them into what worked, what didn't, and what was worth adapting."
            >
              <div className="aspect-video bg-gray-100" />
              <p className="text-[15px] text-gray-500 leading-normal mb-10">
                What we decided to carry into our design:
              </p>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Building the wireframes"
              description="With our research locked in, we moved into wireframing: working out layout, hierarchy, and screen flow before touching any visuals. We covered the full search journey: the opening state, predictive suggestions, the loading state, search results with AI and traditional views, and the sources and citations detail screen."
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-gray-100" />
                <div className="aspect-video bg-gray-100" />
                <div className="aspect-video bg-gray-100" />
                <div className="aspect-video bg-gray-100" />
              </div>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Our first attempt at the design"
              description="We moved into mid-fidelity to start making real design decisions, translating wireframe structure into something you could actually react to, with real content replacing placeholders to get a true feel for the experience"
            >
              <div className="aspect-video bg-gray-100" />
              <div className="aspect-video bg-gray-100" />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Good feedback doesn't just point at problems.. it points at better decisions."
              description="After sharing our initial concept with our client and lecturer, four things came back consistently:"
            >
              <p className="text-[15px] text-gray-500 leading-normal mb-10">
                The AI mode toggle wasn't distinct enough, users couldn't tell
                it was doing anything different Results felt overwhelming — too
                much text and information competing for attention No clear
                visual hierarchy between AI-generated and traditional results
                Needed NAB branding applied to ground the prototype in a real
                context
              </p>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="final-design"
              label="Final Design"
              title="Search, reimagined"
              description="Here's how the final experience comes together, screen by screen."
            >
              <SplitView
                title="The default state"
                description="The first thing users see when they open search. Trending searches for those who aren't sure what to ask, recent searches and favourites in the sidebar for those who are."
              />
              <SplitView
                title="Search results"
                description="Results are organised by relevance, not recency. The most useful answer surfaces first, followed by a primary card and supporting results below. Every result is tagged by category so users can orient themselves at a glance."
              />
              <SplitView
                title="AI Chatbot"
                description="When a search result isn't enough, users can keep going. The chatbot lets users ask follow-up questions and dig deeper, without losing the context of where they started. A &ldquo;Back to search results&rdquo; link keeps them oriented the whole time."
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              label="AI Mode: Deep Dive"
              title="Title here"
              description="After sharing our initial concept with our client and lecturer, four things came back consistently:"
            ></CaseStudySectionProps>

            <CaseStudySectionProps
              label="Information Hierarchy"
              title="Title here"
              description="After sharing our initial concept with our client and lecturer, four things came back consistently:"
            ></CaseStudySectionProps>

            <CaseStudySectionProps
              id="learnings"
              label="Learnings"
              title="What i learnt"
              description="After sharing our initial concept with our client and lecturer, four things came back consistently:"
            ></CaseStudySectionProps>
          </div>
        </div>
      </Container>
    </>
  );
}
