export function getLangFromParams(params) {
    if (!params || !params.lang) return "en";
    return params.lang === "ar" ? "ar" : "en";
}

export function getPageMeta(page, lang, params = {}) {
    const isAr = lang === "ar";
    const siteName = "Fixer Facility Management";
    const baseUrl = "https://www.fixerfm.com";
    const currentPath = params?.lang ? `/${params.lang}/${page === "home" ? "" : page}` : `/${page === "home" ? "" : page}`;
    const currentUrl = `${baseUrl}${currentPath}`;

    const dict = {
        home: {
            en: {
                title: "Fixer – Comprehensive Facility Management Solutions",
                description: "Integrated & sustainable facility management: soft & hard services, landscaping, civil maintenance. Saudi-based leader in facility management powered by technology.",
                keywords: "facility management, soft services, hard services, landscaping, maintenance, Saudi Arabia, FM services",
                ogImage: `${baseUrl}/og-home.jpg`,
            },
            ar: {
                title: "فيكسر – حلول شاملة لإدارة المرافق",
                description: "إدارة مرافق متكاملة ومستدامة: خدمات ناعمة وصلبة، تنسيق حدائق، صيانة مدنية. رائد سعودي في إدارة المرافق مدعوم بالتكنولوجيا.",
                keywords: "إدارة المرافق، خدمات ناعمة، خدمات صلبة، تنسيق حدائق، صيانة، السعودية، خدمات إدارة المرافق",
                ogImage: `${baseUrl}/og-home-ar.jpg`,
            },
        },
        about: {
            en: {
                title: "About Us | Fixer",
                description: "Learn about Fixer, our vision, mission, and values. Saudi-based leader in facility management with decades of combined experience.",
                keywords: "about Fixer, facility management company, Saudi Arabia, who we are",
                ogImage: `${baseUrl}/og-about.jpg`,
            },
            ar: {
                title: "من نحن | فيكسر",
                description: "تعرف على فيكسر، رؤيتنا، رسالتنا، وقيمنا. رائد سعودي في إدارة المرافق مع عقود من الخبرة المجتمعة.",
                keywords: "عن فيكسر، شركة إدارة المرافق، السعودية، من نحن",
                ogImage: `${baseUrl}/og-about-ar.jpg`,
            },
        },
        book: {
            en: {
                title: "Get in Tuch | Fixer",
                description: "Get in Tuch or request a consultation with Fixer. Our team will respond within 24 hours.",
                keywords: "book visit, consultation, facility management consultation, Fixer contact",
                ogImage: `${baseUrl}/og-book.jpg`,
            },
            ar: {
                title: "احجز زيارة | فيكسر",
                description: "احجز زيارة أو اطلب استشارة مع فيكسر. سيرد فريقنا خلال 24 ساعة.",
                keywords: "احجز زيارة، استشارة، استشارة إدارة المرافق، تواصل فيكسر",
                ogImage: `${baseUrl}/og-book-ar.jpg`,
            },
        },
        contact: {
            en: {
                title: "Contact Us | Fixer",
                description: "Get in touch with Fixer. Phone: +966 53 966 9980, Email: info@fixerfm.com. Located in Riyadh, Saudi Arabia.",
                keywords: "contact Fixer, facility management contact, Saudi Arabia, phone, email",
                ogImage: `${baseUrl}/og-contact.jpg`,
            },
            ar: {
                title: "اتصل بنا | فيكسر",
                description: "تواصل مع فيكسر. الهاتف: +966 53 966 9980، البريد الإلكتروني: info@fixerfm.com. الموقع: الرياض، السعودية.",
                keywords: "اتصل بفيكسر، تواصل إدارة المرافق، السعودية، هاتف، بريد إلكتروني",
                ogImage: `${baseUrl}/og-contact-ar.jpg`,
            },
        },
        service1: {
            en: {
                title: "Soft Facility Management | Fixer",
                description: "Professional soft facility management services: cleaning, security, pest control, waste management, and facade cleaning.",
                keywords: "soft facility management, cleaning services, security services, pest control, waste management",
                ogImage: `${baseUrl}/og-service1.jpg`,
            },
            ar: {
                title: "إدارة المرافق الناعمة | فيكسر",
                description: "خدمات إدارة المرافق الناعمة الاحترافية: التنظيف، الأمن، مكافحة الآفات، إدارة النفايات، تنظيف الواجهات.",
                keywords: "إدارة المرافق الناعمة، خدمات التنظيف، خدمات الأمن، مكافحة الآفات، إدارة النفايات",
                ogImage: `${baseUrl}/og-service1-ar.jpg`,
            },
        },
        service2: {
            en: {
                title: "Hard Facility Management | Fixer",
                description: "Comprehensive hard facility management: MEP systems, fire safety, HVAC, smart building systems, and technical support.",
                keywords: "hard facility management, MEP, fire safety, HVAC, smart systems, building maintenance",
                ogImage: `${baseUrl}/og-service2.jpg`,
            },
            ar: {
                title: "إدارة المرافق الصلبة | فيكسر",
                description: "إدارة المرافق الصلبة الشاملة: أنظمة الميكانيكا والكهرباء والسباكة، السلامة من الحرائق، التكييف، الأنظمة الذكية، الدعم الفني.",
                keywords: "إدارة المرافق الصلبة، الميكانيكا والكهرباء والسباكة، السلامة من الحرائق، التكييف، الأنظمة الذكية",
                ogImage: `${baseUrl}/og-service2-ar.jpg`,
            },
        },
        service3: {
            en: {
                title: "Landscaping Services | Fixer",
                description: "Professional landscaping services: design, execution, maintenance, irrigation systems, and garden management.",
                keywords: "landscaping, garden design, landscape maintenance, irrigation, garden services",
                ogImage: `${baseUrl}/og-service3.jpg`,
            },
            ar: {
                title: "خدمات تنسيق الحدائق | فيكسر",
                description: "خدمات تنسيق الحدائق الاحترافية: التصميم، التنفيذ، الصيانة، أنظمة الري، إدارة الحدائق.",
                keywords: "تنسيق الحدائق، تصميم الحدائق، صيانة الحدائق، الري، خدمات الحدائق",
                ogImage: `${baseUrl}/og-service3-ar.jpg`,
            },
        },
        service4: {
            en: {
                title: "Smart Platform & Solutions | Fixer",
                description: "Advanced smart facility management platform: smart metering, IAQ monitoring, energy AI, dashboards, and IoT solutions.",
                keywords: "smart platform, smart metering, IAQ, energy optimization, facility management software, IoT",
                ogImage: `${baseUrl}/og-service4.jpg`,
            },
            ar: {
                title: "المنصة الذكية والحلول | فيكسر",
                description: "منصة إدارة المرافق الذكية المتقدمة: القياس الذكي، مراقبة جودة الهواء، ذكاء الطاقة، لوحات المعلومات، حلول إنترنت الأشياء.",
                keywords: "منصة ذكية، قياس ذكي، جودة الهواء، تحسين الطاقة، برمجيات إدارة المرافق، إنترنت الأشياء",
                ogImage: `${baseUrl}/og-service4-ar.jpg`,
            },
        },
        service5: {
            en: {
                title: "Civil Maintenance & Repairs | Fixer",
                description: "Professional civil maintenance and repair services: carpentry, drywall, painting, ceilings, and interior finishing.",
                keywords: "civil maintenance, repairs, carpentry, drywall, painting, interior finishing",
                ogImage: `${baseUrl}/og-service5.jpg`,
            },
            ar: {
                title: "الصيانة المدنية والإصلاحات | فيكسر",
                description: "خدمات الصيانة المدنية والإصلاحات الاحترافية: نجارة، جبس بورد، دهانات، أسقف، تشطيب داخلي.",
                keywords: "صيانة مدنية، إصلاحات، نجارة، جبس بورد، دهانات، تشطيب داخلي",
                ogImage: `${baseUrl}/og-service5-ar.jpg`,
            },
        },
    };

    const entry = dict[page]?.[lang] || dict.home[lang];
    const pagePath = page === "home" ? "" : page === "contact" ? "contact" : page === "book" ? "book" : page === "about" ? "about" : `service-${page.replace("service", "")}`;
    const canonicalUrl = `${baseUrl}/${lang}${pagePath === "" ? "" : `/${pagePath}`}`;
    const alternateUrl = `${baseUrl}/${lang === "ar" ? "en" : "ar"}${pagePath === "" ? "" : `/${pagePath}`}`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": `${baseUrl}/en${pagePath === "" ? "" : `/${pagePath}`}`,
        "ar-SA": `${baseUrl}/ar${pagePath === "" ? "" : `/${pagePath}`}`,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonicalUrl,
      siteName,
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      images: [
        {
          url: entry.ogImage,
          width: 1200,
          height: 630,
          alt: entry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [entry.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}