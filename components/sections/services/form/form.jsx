import Image from "next/image"
import { CiUser, CiWarning } from "react-icons/ci"
import { FiPhone } from "react-icons/fi"
import { GiAutoRepair } from "react-icons/gi"
import { HiOutlineMail } from "react-icons/hi"


const Form = () => {
    return (
        <div
            className="w-full relative z-[2] pb-[100px] pt-[200px] bg-cover bg-center   bg-no-repeat"
            style={{
                background: "url('/backgroud2.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Decoration Path3 */}
            <Image
                src="/Path3.png"
                alt=""
                width={519}
                height={505.5}
                className="object-cover absolute top-[85px] w-[219px] md:w-[519px] h-[505.5px] left-10 opacity-[6%]"
            />
            {/* <Image
                        src="/Group990.png"
                        alt="path"
                        width={498}
                        height={99}
                        className="absolute top-[-80px] w-[198px] h-[59px] md:w-[498px] md:h-[99px] object-contain z-10 start-[-21px]"
                /> */}
            {/* Form content */}
            <div className="container w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 relative z-10">
                <div>
                    {/* Header */}
                    <div className="flex relative items-center gap-3">
                        <Image
                            src={"/divider-orange.png"}
                            alt="divider"
                            width={120}
                            height={80}
                            className="absolute w-[80px] sm:w-[120px] md:w-[157px] h-[20px] sm:h-[30px] md:h-[39px] object-contain start-0 top-0 z-0"
                        />
                        <h2
                            className="text-2xl sm:text-3xl md:text-5xl text-white relative z-10 font-bold w-fit leading-tight"
                            style={{
                                WebkitTextStroke: "2px #101828",
                            }}
                        >
                            Get in Touch
                        </h2>

                    </div>
                    <p className="text-white text-[18px]">
                        Reach out for inquiries, partnerships, or support. Our team will respond within 24 hours.
                    </p>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-[11px] mt-10" aria-label="Contact form">
                        <div className="relative">
                            <label htmlFor="form-fullName" className="sr-only">Full name</label>
                            <CiUser className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                            <input
                                id="form-fullName"
                                name="fullName"
                                type="text"
                                placeholder="Full name"
                                className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                aria-required="true"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="form-phone" className="sr-only">Phone number</label>
                            <FiPhone className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                            <input
                                id="form-phone"
                                name="phone"
                                type="tel"
                                placeholder="Phone number"
                                className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                aria-required="true"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="form-email" className="sr-only">Email address</label>
                            <HiOutlineMail className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                            <input
                                id="form-email"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-2 min-h-[60px] border border-[#0c0f40] bg-[#ffffff31] rounded-full w-full"
                                aria-required="true"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="form-service" className="sr-only">Select Service</label>
                            <GiAutoRepair className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                            <select 
                                id="form-service"
                                name="service"
                                className="appearance-none text-[#9394AA] w-full ps-14 pe-10 py-4 min-h-[60px] bg-[#ffffff31] rounded-full outline-none border-[#0c0f40]"
                                aria-required="true"
                            >
                                <option className="text-black" value="">
                                    Select Service
                                </option>
                                <option className="text-black" value="lighting">
                                    Lighting Design
                                </option>
                                <option className="text-black" value="consultation">
                                    Consultation
                                </option>
                                <option className="text-black" value="installation">
                                    Installation
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
                            <label htmlFor="form-message" className="sr-only">Your message</label>
                            <CiWarning className="absolute text-lg start-6 top-5 text-[#FC942A]" aria-hidden="true" />
                            <textarea
                                id="form-message"
                                name="message"
                                placeholder="Your message"
                                className="placeholder:text-[#9394AA] text-white outline-none ps-14 pe-6 py-4 min-h-[173px] max-h-[200px] border border-[#0c0f40] bg-[#ffffff31] rounded-[40px] w-full h-40"
                                aria-required="true"
                            />
                        </div>
                    </form>

                    <button 
                      type="submit"
                      className="bg-[#FC942A] ms-auto block w-fit text-white py-[12px] px-[60px] rounded-full mt-[20px]"
                      aria-label="Send message"
                    >
                        Send
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Form