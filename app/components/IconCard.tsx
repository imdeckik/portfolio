type IconCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="p-6 flex flex-col justify-between gap-16">
      {/* Icon */}
      <div className="text-gray-900">{icon}</div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-gray-900 tracking-tight">
          {title}
        </h4>
        <p className="text-sm text-gray-500 leading-normal">{description}</p>
      </div>
    </div>
  );
}
