import Image from "next/image";

export default function SectionHeader({
  title,
  subtitle,
  subtitleClassName = "text-[#1C2039]",
  divider = "/divider-orange.png",
  className = "",
  borderWhite = false,
}) {
  return (
    <div className={`relative   ${className}`}>
      {/* Background Title */}
      <div className="absolute  -top-10 start-0 sm:-top-12 md:-top-16 text-[40px] sm:text-[60px] md:text-[88px] font-bold text-[#F0F0F4] whitespace-nowrap pointer-events-none select-none max-w-full overflow-visible leading-none">
        {title}
      </div>

      {/* Divider */}
      {divider && (
        <Image
          src={divider}
          alt="divider"
          width={120}
          height={80}
          className="absolute w-[80px] sm:w-[120px] md:w-[157px] h-[20px] sm:h-[30px] md:h-[39px] object-contain start-0 sm:start-[-10px] md:start-[-20px] top-[-20px] z-[-1]"
        />
      )}

      {/* Subtitle */}
      <h2
        className={`text-2xl sm:text-3xl md:text-5xl  ${subtitleClassName} relative z-10 font-bold w-fit leading-tight ${
          borderWhite ? "text-border-white" : ""
        }`}
      >
        {subtitle}
      </h2>
    </div>
  );
}
