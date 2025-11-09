import Image from "next/image";

export default function ServicesHeader({
  title,
  blueTitle,
  subtitle,
  subtitleClassName = "text-[#1C2039]",
  divider = "/divider-orange.png",
  className = "",
  borderWhite = false,
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Background Title */}
      <div className="absolute -top-10 start-0 sm:-top-12 md:top-[-118px] text-[40px] sm:text-[60px] md:text-[88px] font-bold text-[#F0F0F4] whitespace-nowrap pointer-events-none select-none max-w-full overflow-visible leading-none">
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

      {/* Blue Title + Subtitle */}
      <div className="relative z-10 flex flex-col -top-10 sm:-top-12 md:-top-14 h-fit">
        {blueTitle && (
          <h1
            className={`font-bold leading-[1.1] m-0 p-0 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              text-[#3955A2] ${borderWhite ? "text-border-white" : ""}
            `}
          >
            {blueTitle}
          </h1>
        )}

        {subtitle && (
          <h2
            className={`font-bold leading-[1.15] m-0 p-0
              text-xl sm:text-3xl md:text-4xl lg:text-5xl
              ${subtitleClassName} ${borderWhite ? "text-border-white" : ""}
            `}
          >
            {subtitle}
          </h2>
        )}
      </div>
    </div>
  );
}
