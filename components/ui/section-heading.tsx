interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-5xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}