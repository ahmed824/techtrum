"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export function ContactSection({ t }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative max-h-none lg:max-h-[630px]">
      {/* Full Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Group 59804.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[630px] py-12 sm:py-16">
          {/* Left Content */}
          <div className="text-white space-y-5 sm:space-y-6 mb-24 lg:mb-0 text-center lg:text-left px-2 sm:px-0 w-full lg:max-w-[75%]">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full">
                {t("contact.badge") || "Design For The Future"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold leading-tight text-white">
              {t("contact.header") ||
                "Scale your business & revenue to the next level"}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-2xl text-white leading-relaxed">
              {t("contact.subtitle") ||
                "In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical."}
            </p>
          </div>

          {/* Right Form */}
          <div className="relative -top-8 sm:-top-12 lg:-top-24 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl sm:rounded-3xl md:pb-[50px] md:px-[32px] lg:pb-[70px]  shadow-[0_0_16px_rgba(0,0,0,0.16)] max-w-full sm:max-w-xl md:max-w-3xl mx-auto lg:ml-auto md:pt-16 lg:pt-24 w-full p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-3xl font-bold text-black mb-3 text-center lg:text-start">
                {t("contact.formTitle") || "Get In Touch"}
              </h2>
              <p className="text-gray-500 font-light text-base sm:text-base mb-6 sm:mb-6 text-center lg:text-start">
                {t("contact.formSubtitle") ||
                  "We will provide all the necessary advice, designs, and additions. We are the best."}
              </p>

              <div className="space-y-5">
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <FiUser className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#246BFD] text-lg" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder={t("contact.fullName") || "Full name"}
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-11 sm:pl-12 pr-4 sm:pr-5 py-3 rounded-full bg-gray-100 text-gray-700 placeholder-[#768591] focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:bg-white transition text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiPhone className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#246BFD] text-lg" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("contact.phone") || "Phone number"}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 sm:pl-12 pr-4 sm:pr-5 py-3 rounded-full bg-gray-100 text-gray-700 placeholder-[#768591] focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:bg-white transition text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="relative">
                    <FiMail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#246BFD] text-lg" />
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contact.email") || "Email Address"}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 sm:pl-12 pr-4 sm:pr-5 py-3 rounded-full bg-gray-100 text-gray-700 placeholder-[#768591] focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:bg-white transition text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <MdOutlineMiscellaneousServices className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#246BFD] text-lg pointer-events-none" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-11 sm:pl-12 pr-10 sm:pr-11 py-3 rounded-full bg-gray-100 text-gray-700 placeholder-[#768591] focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:bg-white transition appearance-none cursor-pointer text-sm sm:text-base"
                      style={{
                        color: formData.service ? "#374151" : "#768591",
                      }}
                      required
                    >
                      <option value="" disabled>
                        {t("contact.service") || "Service"}
                      </option>
                      <option value="telecom">
                        {t("capabilities.telecom")}
                      </option>
                      <option value="digital">
                        {t("capabilities.digital")}
                      </option>
                      <option value="emerging">
                        {t("capabilities.emerging")}
                      </option>
                    </select>
                    <FiChevronDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-[#246BFD] text-lg pointer-events-none" />
                  </div>
                </div>
                {/* Message */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 sm:left-5 top-4 text-[#246BFD] text-lg" />
                  <textarea
                    name="message"
                    placeholder={t("contact.message") || "Your message"}
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full pl-11 sm:pl-12 pr-4 sm:pr-5 py-3 min-h-[120px] sm:min-h-[156px] rounded-2xl bg-gray-100 text-gray-700 placeholder-[#768591] focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:bg-white transition resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#236BFD] text-white px-8 sm:px-10 py-3 rounded-full hover:bg-[#1a54c7] transition font-semibold shadow-lg flex items-center justify-center gap-2 mx-auto lg:ml-auto text-sm sm:text-base"
                >
                  {t("contact.send") || "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
