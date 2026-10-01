import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  href?: string; // <- add "?" so it's optional
  src?: string;
  alt?: string;
  info?: string;
};

export default function ProjectCard({
  title,
  category,
  year,
  href,
  src,
  alt = "",
  info,
}: ProjectCardProps) {
  // The card's contents, stored ina variable so both versions below can use it
  const content = (
    <>
      {/* Thumbnail here */}
      <div className="relative h-90 border border-gray-200 bg-white overflow-hidden mb-3">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="absolute top-8 left-8 w-full group-hover:scale-[1.02] transition-transform duration-300"
          />
        )}
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 tracking-tight">
          {title}{" "}
          <span className="text-sm text-gray-400 tracking-tight">{info}</span>
        </span>

        <span className="text-sm text-gray-400 tracking-tight">
          {category} · {year}
        </span>
      </div>
    </>
  );

  // No href -> a plain, non-clickable card
  if (!href) {
    return <div className="block cursor-default">{content}</div>;
  }

  // Has an href -> a clickable card
  return (
    <Link href={href} className="group block">
      {content}
    </Link>
  );
}
