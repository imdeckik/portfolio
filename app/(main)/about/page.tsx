import Container from "@/app/components/Container";
import PhotoCard from "@/app/components/PhotoCard";
import Image from "next/image";

export default function About() {
  const cookingPhotos = [
    { src: "/images/food_1.png", label: "Salmon w/ roasted sliced potatoes" },
    {
      src: "/images/food_2.png",
      label: "Steak with eggplant w/ caramlised bacon",
    },
    {
      src: "/images/food_3.png",
      label: "Gnocchi alla Vodka w/ italian sausage",
    },
  ];

  const hobbyPhotos = [
    { src: "/images/hobby_1.png", label: "Watching the GOAT play" },
    { src: "/images/hobby_2.png", label: "Bouldering and gym" },
    { src: "/images/hobby_3.png", label: "Going to concerts" },
    { src: "/images/hobby_4.png", label: "Drinking coffee, good coffee" },
    { src: "/images/hobby_5.png", label: "The gang" },
    { src: "/images/hobby_6.png", label: "Family gathering and good food" },
  ];

  return (
    <Container>
      <section
        className="min-h-screen flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 76px)" }}
      >
        <div className="grid grid-cols-12 gap-4">
          <div
            className="col-span-6 col-start-4 flex flex-col gap-40"
            style={{ paddingTop: "calc(30%)" }}
          >
            {/* 1st part - About me */}
            <div className="flex flex-col gap-10">
              {/* Profile Picture */}
              <div className="relative w-120 h-80 mx-auto mb-8 overflow-hidden border border-gray-200 hover:scale-105 hover:-rotate-1 transition-all duration-500">
                <Image
                  src="/images/profile_picture.JPG"
                  alt="A photo of myself"
                  fill
                  sizes="50vw   "
                  className="object-cover scale-110"
                  priority
                />
              </div>
              {/* Bio */}
              <h2 className="text-base font-medium text-gray-900 tracking-tight text-center">
                Hey, I'm Declan, a UI/UX designer with 2+ years of experience
              </h2>
              {/* Paragraph 1 */}
              <p className="text-[15px] text-gray-500 leading-[150%]">
                I've worked on mobile and desktop applications end-to-end, from
                research and wireframes to final handoff. I enjoy working on
                products from the ground up, where there's still room to figure
                out what something could be. In the past few months, I've been
                learning to code, so I can bridge the gap between design and
                build and bring my own work to life without waiting on a
                developer.
              </p>
              {/* Paragraph 2 */}
              <p className="text-[15px] text-gray-500 leading-[150%]">
                Startups and software excite me. The pace, the ownership, the
                chance to work closely with engineers on products that solve
                real problems, that's what I'm drawn to. I'm a firm believer
                that good software should work well and look good. That balance
                is what got me into this, and it's what keeps me here.
              </p>
              {/* Tool icons */}
              <div className="flex flex-col gap-2">
                <p className="text-[15px] text-gray-500 leading-[150%]">
                  My current toolkit:
                </p>
                <div className="flex items-center justify-start gap-2">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center p-2">
                    <Image
                      src="/images/tools/figma.svg"
                      alt="Figma"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="w-10 h-10 bg-[#D97757] rounded-xl flex items-center justify-center p-2">
                    <Image
                      src="/images/tools/claude-ai-icon.svg"
                      alt="Figma"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="w-10 h-10 bg-[#00005B] rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/tools/after-effects.svg"
                      alt="Figma"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>

              {/* Tool icons */}
              <div className="flex flex-col gap-2">
                <p className="text-[15px] text-gray-500 leading-[150%]">
                  Currently learning:
                </p>
                <div className="flex items-center justify-start gap-2">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/tools/react_light.svg"
                      alt="Figma"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/tools/nextjs_icon_dark.svg"
                      alt="Figma"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              {/* Paragraph 3 */}
              <p className="text-[15px] text-gray-500 leading-[150%]">
                I truly love to expand my knowledge and be part of a team that
                delivers valuable products. So if you're working on something
                cool or looking to hire, please don't hesitate to contact me at{" "}
                <a
                  href="mailto:decankikyanto27@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-500 transition-colors duraiton-300"
                >
                  declankikyanto27@gmail.com
                </a>
              </p>
            </div>
            {/* 2nd part - Interests */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-base font-medium text-gray-900 tracking-tight">
                  My interest
                </h2>
                <p className="text-[15px] text-gray-500 leading-[150%]">
                  Outside of design, I like to spent my time doing sports such
                  as tennis and bouldering. I also enjoy cooking; and yes, I try
                  to make the food looks good too!
                </p>
              </div>
              {/* Photo grid label */}
              <div className="flex flex-col gap-2">
                <span className="uppercase text-[13px] font-medium text-gray-400">
                  Cooking
                </span>
                <div className="grid grid-cols-3 gap-4">
                  {cookingPhotos.map((photo) => (
                    <PhotoCard
                      key={photo.label}
                      src={photo.src}
                      label={photo.label}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="uppercase text-[13px] font-medium text-gray-400">
                  More of life
                </span>
                <div className="grid grid-cols-3 gap-4">
                  {hobbyPhotos.map((photo) => (
                    <PhotoCard
                      key={photo.label}
                      src={photo.src}
                      label={photo.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
