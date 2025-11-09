import Image from "next/image";
import ServicesHeader from "./ServicesHeader";

export function ServiceSection({ t }) {
  return (
    <section
      className="relative py-20 md:py-24 pt-20 mt-[77px]  "
      data-aos="fade-up"
    >
      {/* Decorative background image */}
      <Image
        src={"/Group 59794.png"}
        alt="decorative background"
        loading="lazy"
        width={3000}
        height={300}
        className="absolute object-cover w-screen -bottom-20 start-0 opacity-80 h-[200px] md:h-[200px] pointer-events-none select-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-5 items-center">
          {/* Text Content */}
          <div
            className="order-2 md:order-1 text-start relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ServicesHeader
              title={t ? t("services.soft.header.title") : "Service"}
              blueTitle={t ? t("services.soft.header.blueTitle") : "SOFT"}
              subtitle={
                t ? t("services.soft.header.subtitle") : "Facility Management"
              }
              borderWhite={true}
            />
            <Image
              src="/decorative-f.png"
              alt="decorative shape"
              width={519}
              height={519}
              className="hidden md:block absolute -top-20 -start-40 w-[400px] h-[400px] object-contain opacity-70 pointer-events-none select-none"
              loading="lazy"
            />
            <div className="flex items-center gap-2 mb-6 -mt-10 max-w-lg">
              <Image
                src="/icons/Group 59821.png"
                alt="decorative line"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
                priority
              />
              <p className="text-black text-base sm:text-lg">
                {t
                  ? t("services.soft.header.tagline")
                  : "We keep your facilities clean, safe, and welcoming"}
              </p>
            </div>
          </div>
          {/* Image Content */}
          <div
            className="order-1 md:order-2 relative flex justify-center items-start z-10"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Image
              src="/about-decor.png"
              alt="decorative shape"
              width={800}
              height={190}
              className="hidden md:block absolute bottom-[32px] right-[-81%] w-[600px] h-[140px] object-contain opacity-80"
              loading="lazy"
            />
            <Image
              src="/s.png"
              alt="about background"
              width={480}
              height={100}
              className="hidden md:block absolute -bottom-8 -right-28 max-h-[100px] h-auto object-contain z-20"
              loading="lazy"
            />
            {/* ✅ Keep -mt on desktop only */}
            <Image
              src="/services1/main.png"
              alt="Our Team"
              className="object-contain w-[85%] sm:w-[70%] md:w-[450px] lg:w-[500px] mt-0 md:-mt-72 z-10 transition-all duration-300"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
