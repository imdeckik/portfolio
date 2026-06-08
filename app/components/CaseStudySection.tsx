type CaseStudySectionProps = {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
};

export default function CaseStudySectionProps({
  label,
  title,
  description,
  children,
  id,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="mb-40 w-8/10">
      {/* Label */}
      <p className="text-xs font-medium text-gray-400 uppercase mb-4">
        {label}
      </p>

      {/* Title */}
      <h2 className="text-xl font-medium text-gray-900 leading-none mb-4 tracking-tight">
        {title}
      </h2>

      <div className="flex flex-col gap-4">
        {/* Optional description */}
        {description && (
          <p className="text-[15px] text-gray-500 leading-normal">
            {description}
          </p>
        )}

        {/* Flexible content */}
        {children}
      </div>
    </section>
  );
}
