import Image from "next/image";

type SplitViewProps = {
  title: string;
  description: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
};

export default function SplitView({
  title,
  description,
  src,
  alt = "",
  width,
  height,
  sizes = "",
}: SplitViewProps) {
  return (
    <div className="grid grid-cols-8 gap-4 items-end mb-4">
      {/* Left part (image) - 5 column or 50% */}
      <div className="relative col-span-5 border border-gray-200 bg-white p-3">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className="w-full h-auto"
          />
        )}
      </div>
      {/* Right part (content) - 3 column or 30% */}
      <div className="col-span-3 flex flex-col gap-2">
        <h3 className="text-[15px ] font-medium text-gray-900 leading-none">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-normal">{description}</p>
      </div>
    </div>
  );
}
