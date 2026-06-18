import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ScreenshotFrame({
  src,
  alt,
  width,
  height,
}: ScreenshotFrameProps) {
  return (
    <div className="">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full border border-gray-200"
      />
    </div>
  );
}
