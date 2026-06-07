import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  href: string;
  image?: string;
};

export default function ProjectCard({
  title,
  category,
  year,
  href,
  image,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      {/* Thumbnail here */}
      <div className="h-[400px] border border-gray-200 bg-gray-50 overflow-hidden mb-3">
        {image && (
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        )}
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 tracking-tight">
          {title}
        </span>
        <span className="text-sm text-gray-400 tracking-tight">
          {category} · {year}
        </span>
      </div>
    </Link>
  );
}
