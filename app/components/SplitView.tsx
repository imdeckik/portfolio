type SplitViewProps = {
  title: string;
  description: string;
  image?: React.ReactNode;
};

export default function SplitView({
  title,
  description,
  image,
}: SplitViewProps) {
  return (
    <div className="grid grid-cols-8 gap-4 items-end mb-4">
      {/* Left part (image) - 5 column or 50% */}
      <div className="col-span-5 h-[360px] bg-gray-50 border border-gray-200">
        {image}
      </div>
      {/* Right part (content) - 3 column or 30% */}
      <div className="col-span-3 flex flex-col gap-4">
        <h3 className="text-base font-medium text-gray-900 leading-none">
          {title}
        </h3>
        <p className="text-[15px] text-gray-500 leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
