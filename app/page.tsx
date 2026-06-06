export default function Home() {
  return (
    <div className="px-8">
      {/* Hero */}
      <section className="pt-48 pb-24 max-w-2xl">
        {/* Open to opportunities indicator */}
        <div className="flex items-center gap-2 mb-3 px-2.5 py-1 border border-gray-200 rounded-full w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span className="text-xs text-gray-500 font-medium tracking-tight">
            Open to new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-medium leading-tight text-gray-900 tracking-tight">
          I'm Declan, a product designer focused on building {""}
          <span className="font-abalone text-accent">intuitive</span>
          {""} and {""}
          <span className="font-abalone text-accent">useful products.</span>
        </h1>
      </section>
    </div>
  );
}
