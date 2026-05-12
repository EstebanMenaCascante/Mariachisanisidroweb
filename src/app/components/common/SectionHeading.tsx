type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  dark = false,
}: SectionHeadingProps) {
  const titleColor = dark ? "text-white" : "text-black";
  const subtitleColor = dark ? "text-gray-400" : "text-gray-600";

  return (
    <div className="text-center mb-10 sm:mb-16">
      <h2
        className={`font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-4 ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
      <div className="w-20 sm:w-24 h-1 bg-[#D4AF37] mx-auto" />
    </div>
  );
}
