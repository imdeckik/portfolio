type CaseStudySectionProps = {
  label: string;
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
    <section id={id} className="mb-24">
      {/* Label */}
      <p className="text-xs text-gray-900 uppercase mb-4">{label}</p>

      {/* Title */}
      <h2 className="text-2xl font-medium text-gray-900 mb-4">{title}</h2>

      {/* Optional description */}
      {description && (
        <p className="text-[15px] text-gray-600 leading-normal"></p>
      )}

      {/* Flexible content */}
      {children}
    </section>
  );
}
