"use client";
import BreadcrumbHero from '@/components/shared/Breadcrumb'
import Image from 'next/image'
import React from 'react'
import { CiUser, CiWarning, CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { GiAutoRepair } from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineAccessTime } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

export default function BookClient(){
  const { t } = useTranslation();
  return (
    <div>
      <BreadcrumbHero t={t} title={t('book.header')} />
      <div
        className="w-full relative z-[2] pt-[100px] md:pt-20 mt-[-50px] bg-no-repeat"
        style={{ background: "url('/contact1.png')", backgroundSize: "100% 100%", backgroundPosition: "center" }}
      >
        <Image src="/Path3.png" alt="" width={519} height={505.5} className="object-cover absolute top-[85px] w-[219px] md:w-[519px] h-[505.5px] left-10 opacity-[6%]" />
        <div className="w-full h-full flex flex-col justify-center px-6 md:px-16 py-20 lg:px-24 relative z-10">
          <div>
            <div className="flex relative items-center gap-3">
              <Image src={"/divider-orange.png"} alt="divider" width={120} height={80} className="absolute w-[80px] sm:w-[120px] md:w-[157px] h-[20px] sm:h-[30px] md:h-[39px] object-contain start-0 sm:start-[-10px] md:start-[-30px] top-0 z-0" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-white relative z-10 font-bold w-fit leading-tight">
                {t('book.title')}
              </h2>
            </div>
            <p className="text-white text-[18px]">{t('book.subtitle')}</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-[11px] mt-10" aria-label={t('book.title')}>
              <div className="relative">
                <label htmlFor="book-fullName" className="sr-only">{t('book.placeholders.fullName')}</label>
                <CiUser className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <input 
                  id="book-fullName"
                  name="fullName"
                  type="text" 
                  placeholder={t('book.placeholders.fullName')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="relative">
                <label htmlFor="book-phone" className="sr-only">{t('book.placeholders.phone')}</label>
                <FiPhone className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <input 
                  id="book-phone"
                  name="phone"
                  type="tel" 
                  placeholder={t('book.placeholders.phone')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="relative">
                <label htmlFor="book-email" className="sr-only">{t('book.placeholders.email')}</label>
                <HiOutlineMail className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <input 
                  id="book-email"
                  name="email"
                  type="email" 
                  placeholder={t('book.placeholders.email')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="relative">
                <label htmlFor="book-service" className="sr-only">{t('book.placeholders.service')}</label>
                <GiAutoRepair className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <select 
                  id="book-service"
                  name="service"
                  className="appearance-none text-[#9394AA] w-full ps-14 pe-10 py-4 min-h-[60px] bg-[#ffffff31] rounded-full outline-none border-[#0c0f40]"
                  aria-required="true"
                >
                  <option className="text-black" value="">{t('book.placeholders.service')}</option>
                  <option className="text-black" value="telecom">
                    {t("capabilities.telecom")}
                  </option>
                  <option className="text-black" value="digital">
                    {t("capabilities.digital")}
                  </option>
                  <option className="text-black" value="emerging">
                    {t("capabilities.emerging")}
                  </option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute end-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9394AA] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="relative">
                <label htmlFor="book-location" className="sr-only">{t('book.placeholders.location')}</label>
                <CiLocationOn className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <input 
                  id="book-location"
                  name="location"
                  type="text" 
                  placeholder={t('book.placeholders.location')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="relative">
                <label htmlFor="book-time" className="sr-only">{t('book.placeholders.time')}</label>
                <MdOutlineAccessTime className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <input 
                  id="book-time"
                  name="time"
                  type="text" 
                  placeholder={t('book.placeholders.time')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="relative md:col-span-2">
                <label htmlFor="book-message" className="sr-only">{t('book.placeholders.message')}</label>
                <CiWarning className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                <textarea 
                  id="book-message"
                  name="message"
                  placeholder={t('book.placeholders.message')} 
                  className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-4 min-h-[173px] max-h-[200px] border border-[#0c0f40] bg-[#ffffff31] rounded-[40px] w-full h-40"
                  aria-required="true"
                />
              </div>
            </form>
            <button 
              type="submit"
              className="bg-[#FC942A] ms-auto block w-fit text-white py-[12px] px-[60px] rounded-full mt-[20px]"
              aria-label={t('buttons.send')}
             title={t('buttons.send')}
            >
              {t('buttons.send')}
            </button>
            <Image src="/Group990.png" alt="" width={498} height={99} className="absolute bottom-[-20px] w-[198px] h-[59px] md:w-[498px] md:h-[99px] object-contain z-10 start-0" aria-hidden="true" />
          </div>
        </div>
      </div>
      <Image src="/services-decoration.png" alt="" width={1000} height={330} className="w-full h-[127px] md:h-[327px] object-cover mt-10" aria-hidden="true" />
    </div>
  )
}


