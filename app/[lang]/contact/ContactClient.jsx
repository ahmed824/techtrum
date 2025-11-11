"use client";
import BreadcrumbHero from "@/components/shared/Breadcrumb";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { ContactSection } from "@/components/sections/ContactSection";

// Map with Info Cards (Top Position)
function MapSection({ t, contactData }) {
  return (
    <section className="relative" aria-label={t("contact.mapAria", { defaultValue: "Contact Information Map" })}>
      {/* Info Cards - Positioned at Top */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mb-20 sm:-mb-32 lg:-mb-40 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#7070705f] shadow-[0_10px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.09)] transition-shadow duration-300 flex flex-col items-start text-start"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-2">
                {/* Icon Circle with Dashed Outer Ring */}
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                  {/* Dashed outer ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#246BFD]" />

                  {/* Inner solid circle */}
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#ECEFFF] rounded-full">
                    <div className="text-[#246BFD] text-2xl sm:text-3xl">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F144A]">
                  {item.title}
                </h3>
              </div>

              <p className="text-[#0F144A] text-base sm:text-lg lg:text-2xl leading-relaxed break-words">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Map - Below Cards */}
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative mt-8 sm:mt-12 md:mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.084996282927!2d46.686118615007!3d24.713682184109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPrince%20Khalid%20Bin%20Bander%20Street%2C%20AlArid%20Dist.!5e0!3m2!1sen!2seg!4v1698765432100!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("contact.contactInfo.address")}
          className="shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}

export default function ContactClient() {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: <FiPhone />,
      title: t("contact.contactInfo.phone"),
      info: t("topBar.phone"),
    },
    {
      icon: <HiOutlineMail />,
      title: t("contact.contactInfo.email"),
      info: t("topBar.email"),
    },
    {
      icon: <CiLocationOn />,
      title: t("contact.contactInfo.address"),
      info: t("contact.contactInfo.addressValue"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <BreadcrumbHero title={t("contact.header")} t={t} />

      {/* Contact Form Section - With Top & Bottom Margin */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <ContactSection t={t} />

        {/* Decorative Pattern - Bottom Left, Responsive Size */}
        <div className="absolute z-0 -bottom-40 sm:-bottom-48 md:-bottom-60 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none opacity-85 hidden md:block">
          <Image
            src="/pattern.png"
            alt="Decorative pattern"
            fill
            className="object-contain object-bottom object-left"
            priority
          />
        </div>
      </div>

      {/* Map + Info Cards Section */}
      <MapSection t={t} contactData={contactData} />

      {/* Optional Bottom Spacer */}
      <div className="h-16 sm:h-20 bg-gray-50"></div>
    </>
  );
}
