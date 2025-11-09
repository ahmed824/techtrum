"use client";
import BreadcrumbHero from '@/components/shared/Breadcrumb'
import Image from 'next/image';
import React from 'react'
import { CiLocationOn, CiUser, CiWarning } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from 'react-i18next';

export default function ContactClient() {
    const { t } = useTranslation();
    const contactData = [
        {
            img: "/Path1.png",
            icon: <FiPhone className="text-[#FC942A] text-3xl" aria-hidden="true" />,
            title: t("contact.contactInfo.phone"),
            info: "+966 53 966 9980",
        },
        {
            img: "/Path1.png",
            icon: <HiOutlineMail className="text-[#FC942A] text-3xl" aria-hidden="true" />,
            title: t("contact.contactInfo.email"),
            info: "info@fixerfm.com",
        },
        {
            img: "/Path1.png",
            icon: <CiLocationOn className="text-[#FC942A] text-3xl" aria-hidden="true" />,
            title: t("contact.contactInfo.address"),
            info: "Prince Khalid Bin Bander Street, AlArid Dist.",
        },
    ];    
    return <>
        <BreadcrumbHero title={t("contact.header")} t={t} />
        <section aria-label={t("contact.header")}>
            <div className="grid grid-cols-1 md:grid-cols-12 relative">
                <div className="col-span-12 md:col-span-4 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            minHeight: "400px",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-none"
                        title={t("contact.contactInfo.address")}
                        aria-label={t("contact.contactInfo.address")}
                    ></iframe>
                    <Image
                        src="/Group990.png"
                        alt=""
                        width={498}
                        height={99}
                        className="absolute bottom-[-14px] z-10 start-[27%]"
                        aria-hidden="true"
                    />
                </div>
                <div className="col-span-12 md:col-span-8 w-full relative mt-[-80px]">
                    <Image
                        src="/contact1.png"
                        alt={t("contact.getInTouch")}
                        width={1419.5}
                        height={792.57}
                        className="object-cover w-full h-full"
                    />
                    <Image
                        src="/Path3.png"
                        alt=""
                        width={519}
                        height={505.5}
                        className="object-cover absolute top-[85px] left-10 opacity-[6%]"
                        aria-hidden="true"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-16 py-20 lg:px-24">
                        <div>
                            <h1 className="text-white text-[37px] font-bold">{t("contact.getInTouch")}</h1>
                            <p className="text-white text-[18px]">
                                {t("contact.subtitle")}
                            </p>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-[11px] mt-10" aria-label={t("contact.getInTouch")}>
                                <div className="relative">
                                    <label htmlFor="fullName" className="sr-only">{t("contact.placeholders.fullName")}</label>
                                    <CiUser className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder={t("contact.placeholders.fullName")}
                                        className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                        aria-required="true"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="phone" className="sr-only">{t("contact.placeholders.phone")}</label>
                                    <FiPhone className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder={t("contact.placeholders.phone")}
                                        className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                        aria-required="true"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="email" className="sr-only">{t("contact.placeholders.email")}</label>
                                    <HiOutlineMail className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder={t("contact.placeholders.email")}
                                        className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                        aria-required="true"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="service" className="sr-only">{t("contact.placeholders.service")}</label>
                                    <GiAutoRepair className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                                    <select 
                                        id="service"
                                        name="service"
                                        className="appearance-none text-[#9394AA] w-full ps-14 pe-10 py-4 min-h-[60px] bg-[#ffffff31] rounded-full outline-none border-[#0c0f40]"
                                        aria-required="true"
                                    >
                                        <option className="text-black" value="">
                                            {t("contact.placeholders.service")}
                                        </option>
                                        <option className="text-black" value="lighting">
                                            {t("contact.serviceOptions.lighting")}
                                        </option>
                                        <option className="text-black" value="consultation">
                                            {t("contact.serviceOptions.consultation")}
                                        </option>
                                        <option className="text-black" value="installation">
                                            {t("contact.serviceOptions.installation")}
                                        </option>
                                    </select>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute end-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9394AA] pointer-events-none"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>

                                <div className="relative md:col-span-2">
                                    <label htmlFor="message" className="sr-only">{t("contact.placeholders.message")}</label>
                                    <CiWarning className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder={t("contact.placeholders.message")}
                                        className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-4 min-h-[173px] max-h-[200px] border border-[#0c0f40] bg-[#ffffff31] rounded-[40px] w-full h-40"
                                        aria-required="true"
                                    />
                                </div>
                            </form>
                            <button 
                                type="submit"
                                className="bg-[#FC942A] ms-auto block w-fit text-white py-[12px] px-[60px] rounded-full mt-[20px]"
                                aria-label={t("buttons.send")}
                            >
                                {t("buttons.send")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section aria-label={t("contact.contactInfo.phone")}>
            <div className="container mx-auto pt-24 relative z-10">
                <div className="flex flex-wrap" role="list">
                    {contactData.map((item, index) => (
                        <div
                            key={index}
                            className="relative z-[1] before:content-[''] before:absolute before:bottom-[-4px] before:left-[28px] before:w-[70%] before:h-[20px] before:bg-[#FC942A]"
                            role="listitem"
                        >
                            <div className="relative overflow-hidden w-full">
                                <Image
                                    src="/Path12.png"
                                    alt=""
                                    width={425}
                                    height={314}
                                    className="object-cover h-[314px] w-[425px]"
                                    aria-hidden="true"
                                />
                                <div className="absolute top-1/2 left-[25%] -translate-y-1/2">
                                    <div className="flex items-end gap-3.5">
                                        <div className="relative">
                                            <Image
                                                src={item.img}
                                                alt=""
                                                width={50}
                                                height={56}
                                                className="object-contain w-[45px] h-[50px]"
                                                aria-hidden="true"
                                            />
                                            <div className="absolute bottom-1 left-[22px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h2 className="text-[#243A6B] text-2xl flex font-bold">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-gray-700 text-xl mt-1">{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <div>
            <Image 
                src="/services-decoration.png" 
                alt="" 
                width={1000} 
                height={330} 
                className="w-full"
                aria-hidden="true"
            />
        </div>
    </>
}

