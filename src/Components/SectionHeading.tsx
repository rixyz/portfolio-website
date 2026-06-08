interface SectionHeadingProps {
  title: string
  barColor: string;
  subtitle?: string;
  variant?: "sidebar" | "center";
}

export function SectionHeading({
  title,
  barColor,
  subtitle,
  variant = "sidebar",
}: SectionHeadingProps) {
  const align =
    variant === "sidebar" ? "text-center sm:text-left sm:before:mx-0" : "text-center";

  return (
    <div
      className={`mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto ${align} ${barColor}`}
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          {subtitle}
        </span>
      )}
    </div>
  );
}
