import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  href: string;
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
  return (
    <Link href={href} className="group block">
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
    </Link>
  );
}
