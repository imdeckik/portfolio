import Image from "next/image";

type PhotoCardProps = {
  src?: string;
  alt?: string;
  label?: string;
};

export default function PhotoCard({ src, label, alt = "" }: PhotoCardProps) {
  return (
    <div>
      <div className="aspect-square bg-gray-100 mb-1 overflow-hidden">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
