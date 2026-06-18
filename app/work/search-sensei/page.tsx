import Link from "next/link";
import Image from "next/image";
import CaseStudySectionProps from "@/app/components/CaseStudySection";
import Container from "@/app/components/Container";
import SplitView from "@/app/components/SplitView";
import TabSwitcher from "@/app/components/TabSwitcher";
import IconCard from "@/app/components/IconCard";
import ScreenshotFrame from "@/app/components/ScreenshotFrame";
import { ImageResponse } from "next/og";

export default function SearchSensei() {
  return (
    <>
      {/* Hero Image - full width */}
      <Container>
        <div className="relative aspect-video bg-gray-50 border-b border-x border-gray-200 mb-8 flex items-center justify-center">
          <Image
            src="/images/ss-ai-mode.png"
            alt=""
            width={2880}
            height={1640}
            className="w-[85%] h-auto"
          />
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-12 gap-4">
          {/* Sticky Sidebar - 2 column */}
          <aside className="col-span-2 sticky top-8 self-start">
            <p className="text-xs font-medium text-gray-400 uppercase mb-2">
              Product Design
            </p>
            <p className="text-sm text-gray-900 mb-12">Search Sensei</p>

            {/* Jump links */}
            <nav className="flex flex-col gap-3">
              <a
                href="#context"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Context
              </a>
              <a
                href="#problem"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Problem
              </a>
              <a
                href="#objectives"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Objectives
              </a>
              <a
                href="#design_process"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Design Process
              </a>
              <a
                href="#final_design"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Final Design
              </a>
              <a
                href="#mode"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                AI vs Traditional mode
              </a>
              <a
                href="#information_hierarchy"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Information Hierarchy
              </a>
              <a
                href="#learnings"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Learnings
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
                  <li className="text-sm text-gray-900">UI and UX design</li>
                  <li className="text-sm text-gray-900">Product design</li>
                  <li className="text-sm text-gray-900">Prototyping</li>
                </ul>
              </div>
              <div />
            </section>

            {/* Intro text */}
            <section className="grid grid-cols-2 gap-4 mb-20">
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
              <ScreenshotFrame
                src="/images/search-sensei-landing-page.png"
                alt="Search Sensei product overview"
                width={1600}
                height={900}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="problem"
              label="Problem"
              title="Search has gotten smarter. The experience hasn't kept up."
              description="AI can now answer questions directly, but most interfaces leave users with more questions than answers. Three friction points kept surfacing across existing products:"
            >
              <div className="grid grid-cols-3 border border-gray-200 divide-x divide-gray-200">
                <IconCard
                  title="Trust and transparency"
                  description="AI gives a direct answer, but its reliability is uncertain"
                />
                <IconCard
                  title="Query formation"
                  description="Not all users know how to phrase questions effectively"
                />
                <IconCard
                  title="Information overload"
                  description="Without smart filtering, results pages becomes filled with noise"
                />
              </div>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="objectives"
              label="Objectives"
              title="A clear brief, with real constraints"
              description="Search Sensei needed a production-ready search experience that any website could plug in, generic enough to work across industries, sophisticated enough to handle AI responses with confidence."
            >
              <p className="text-[15px] text-gray-500 leading-normal">
                Our job was to design it end-to-end and hand it off to
                developers in a format they could build from directly
              </p>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-10">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left font-medium text-gray-900 p-4">
                        In scope
                      </th>
                      <th className="text-left font-medium text-gray-900 p-4">
                        Out of scope
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 text-gray-500">
                        Public-facing AI search experience
                      </td>
                      <td className="p-4 text-gray-500">Admin UI</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-500">AI mode</td>
                      <td className="p-4 text-gray-500">
                        Backend infrastructure
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[15px] text-gray-500 leading-normal">
                These were the final deliverables
              </p>
              <div className="flex gap-2">
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Full functioning prototype
                </div>
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Engineering handoff document
                </div>
              </div>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              label="Starting Point"
              title="Search Sensei was already live. But it wasn't enough."
              description="Search Sensei powered NAB's existing search, but it was purely traditional, no AI involved. That's exactly the gap we were designing to close."
            >
              <ScreenshotFrame
                src="/images/NAB-default-search.png"
                alt="Search Sensei product overview"
                width={1600}
                height={900}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="design_process"
              label="Design Process"
              title="Research first, design second"
              description="We followed a Design Thinking approach, starting with understanding the space before touching any screens. Every decision from here was grounded in what we observed, not what we assumed."
            ></CaseStudySectionProps>

            <CaseStudySectionProps
              title="Understanding the space: before designing anything, we studied what already existed"
              description="We started by analysing three products: Google, Bing, and NAB, because they represent different ends of the search spectrum: consumer-scale AI search and a real-world example of enterprise website search. For each, we mapped out every element and interaction in FigJam, screenshotted and annotated key UI patterns, then sorted them into what worked, what didn't, and what was worth adapting."
            >
              <Image
                src="/images/Figjam-research-2x.png"
                alt="Competitor research"
                width={2600}
                height={1415}
                className="w-full border border-gray-200"
              />
              <p className="text-[15px] text-gray-500 leading-normal">
                What we decided to carry into our design:
              </p>
              <div className="flex gap-2">
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Predictive search
                </div>
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Category tags
                </div>
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Filters
                </div>
                <div className="px-5 py-2 text-sm font-medium tracking-tight rounded-xl border border-gray-300 text-gray-600">
                  Cards and lists
                </div>
              </div>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Building the wireframes"
              description="With our research locked in, we moved into wireframing: working out layout, hierarchy, and screen flow before touching any visuals. We covered the full search journey: the opening state, predictive suggestions, the loading state, search results with AI and traditional views, and the sources and citations detail screen."
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-video border border-gray-200 bg-white">
                  <Image
                    src="/images/search-sensei-wireframe-default-state.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain object-center"
                  ></Image>
                </div>
                <div className="relative aspect-video border border-gray-200 bg-white">
                  <Image
                    src="/images/search-sensei-wireframe-loading-state.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain object-center"
                  ></Image>
                </div>
                <div className="relative aspect-video border border-gray-200 bg-white">
                  <Image
                    src="/images/search-sensei-wireframe-predictive-search.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain object-center"
                  ></Image>
                </div>
                <div className="relative aspect-video border border-gray-200 bg-white">
                  <Image
                    src="/images/search-sensei-wireframe-result-display.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain object-center"
                  ></Image>
                </div>
              </div>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Our first attempt at the design"
              description="We moved into mid-fidelity to start making real design decisions, translating wireframe structure into something you could actually react to, with real content replacing placeholders to get a true feel for the experience"
            >
              <ScreenshotFrame
                src="/images/search-sensei-initial_concept-search-screen.png"
                alt="Search Sensei product overview"
                width={1600}
                height={900}
              />
              <ScreenshotFrame
                src="/images/search-sensei-initial_concept-result-display.png"
                alt="Search Sensei product overview"
                width={1600}
                height={900}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              title="Good feedback doesn't just point at problems.. it points at better decisions."
              description="After sharing our initial concept with our client and lecturer, four things came back consistently:"
            >
              <ul className="text-[15px] text-gray-500 leading-relaxed mb-10 list-decimal pl-5">
                <li>
                  The AI mode toggle wasn't distinct enough, users couldn't tell
                  it was doing anything different
                </li>
                <li>
                  Results felt overwhelming, too much text and information
                  competing for attention
                </li>
                <li>
                  No clear visual hierarchy between AI-generated and traditional
                  results
                </li>
                <li>
                  Needed NAB branding applied to ground the prototype in a real
                  context
                </li>
              </ul>
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="final_design"
              label="Final Design"
              title="Search, reimagined"
              description="Here's how the final experience comes together, screen by screen."
            >
              <SplitView
                title="The default state"
                description="The first thing users see when they open search. Trending searches for those who aren't sure what to ask, recent searches and favourites in the sidebar for those who are."
                src="/images/ss-default-screen.png"
                width={2880}
                height={1640}
                sizes={"25vw"}
              />
              <SplitView
                title="Search results"
                description="Results are organised by relevance, not recency. The most useful answer surfaces first, followed by a primary card and supporting results below. Every result is tagged by category so users can orient themselves at a glance."
                src="/images/ss-traditional-mode-results.png"
                width={2880}
                height={1640}
                sizes={"25vw"}
              />
              <SplitView
                title="AI Chatbot"
                description="When a search result isn't enough, users can keep going. The chatbot lets users ask follow-up questions and dig deeper, without losing the context of where they started. A &ldquo;Back to search results&rdquo; link keeps them oriented the whole time."
                src="/images/ss-chatbot.png"
                width={2880}
                height={1640}
                sizes={"25vw"}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="mode"
              label="AI vs Traditional Mode"
              title="User choose how they want to search."
              description="The same search query, two completely different experiences. Here's what changes when you choose between:"
            >
              <TabSwitcher
                tabs={[
                  {
                    label: "Traditional mode",
                    content: (
                      <div className="flex flex-col gap-4">
                        <div className="w-full h-125 bg-white border border-gray-200 p-3">
                          <Image
                            src="/images/ss-traditional-mode-results.png"
                            alt=""
                            width="2880"
                            height="1640"
                            sizes="50vw"
                            className="w-full h-auto"
                          />
                        </div>
                        <p className="text-[15px] text-gray-500 leading-normal">
                          Clean, familiar results. A primary card surfaces the
                          most relevant content at the top, followed by
                          supporting cards and a list of additional results
                          below. No AI involved, just the most relevant content,
                          clearly organised.
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: "AI mode",
                    content: (
                      <div className="flex flex-col gap-4">
                        <div className="w-full h-125 bg-white border border-gray-200 p-3">
                          <Image
                            src="/images/ss-ai-mode.png"
                            alt=""
                            width="2280"
                            height="1640"
                            sizes="50vw"
                            className="w-full h-auto"
                          />
                        </div>
                        <p className="text-[15px] text-gray-500 leading-normal">
                          With AI on, a summary card appears at the top, tagged
                          with either High or Low confidence so users always
                          know how much to trust it. Related question
                          suggestions and a follow-up chat input let users keep
                          exploring without starting a new search
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="information_hierarchy"
              label="Information Hierarchy"
              title="Designed for relevance, not recency."
              description="Results are ranked by relevance and rendered into four distinct levels, each designed to match how much detail that result deserves."
            >
              <SplitView
                title="AI summary card"
                description="Only appears when AI mode is on. Generates a synthesised response with a confidence tag, sources, and suggested follow-up questions."
                src="/images/ss-ai_summary_card.png"
                width={1600}
                height={750}
                sizes={"25vw"}
              />
              <SplitView
                title="Primary card"
                description="The highest-relevance result. Full-width with an image, title, and a CTA button. Always the first thing users see when AI mode is off."
                src="/images/ss-primary_card.png"
                width={1600}
                height={320}
                sizes={"25vw"}
              />
              <SplitView
                title="Normal card"
                description="The next tier, displayed as a three-column card row with title, description, and category tag."
                src="/images/ss-normal_card.png"
                width={880}
                height={272}
                sizes={"25vw"}
              />
              <SplitView
                title="Lists"
                description="Remaining results as compact rows for quick scanning."
                src="/images/ss-list.png"
                width={1600}
                height={492}
                sizes={"25vw"}
              />
            </CaseStudySectionProps>

            <CaseStudySectionProps
              id="learnings"
              label="Learnings"
              title="What this project taught me"
              description="Three things I'd carry into every project from here:"
            >
              <div className="grid grid-cols-3 border border-gray-200 divide-x divide-gray-200">
                <IconCard
                  title="Clarity comes from conversation, not the brief"
                  description="Starting from a brief alone wasn't enough. Real clarity only came after several meetings with the client"
                />
                <IconCard
                  title="Familiar patterns exist for a reason"
                  description="What we designed isn't radically different from existing search, the fundamentals are the same, just executed more intentionally"
                />
                <IconCard
                  title="Know your tool's limits before you hit them"
                  description="Figma couldn't execute every interaction I had in mind. Moving to code helped, but came with its own learning curve."
                />
              </div>
            </CaseStudySectionProps>
          </div>
        </div>
      </Container>
    </>
  );
}
