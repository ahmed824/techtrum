export function getLangFromParams(params) {
    if (!params || !params.lang) return "en";
    return params.lang === "ar" ? "ar" : "en";
}

export function getPageMeta(page, lang, params = {}) {
    const isAr = lang === "ar";
    const siteName = "Techtrum Consult";
    const baseUrl = "https://techtrum.vercel.app";
    const currentPath = params?.lang ? `/${params.lang}/${page === "home" ? "" : page}` : `/${page === "home" ? "" : page}`;
    const currentUrl = `${baseUrl}${currentPath}`;

    const dict = {
        home: {
            en: {
                title: "Techtrum Consult – Engineering Consulting & Technology Solutions",
                description: "Technaz Consult is an engineering consulting firm specialized in providing advisory services to manage, operate, and maintain technologies in the business field. Telecommunications, Digital Transformation, and Emerging Technologies.",
                keywords: "engineering consulting, technology consulting, telecommunications, smart cities, digital transformation, emerging technologies, Saudi Arabia",
                ogImage: `${baseUrl}/og-home.jpg`,
            },
            ar: {
                title: "تيكتروم كونسلت – الاستشارات الهندسية وحلول التكنولوجيا",
                description: "تيكناز كونسلت هي شركة استشارات هندسية متخصصة في تقديم الخدمات الاستشارية لإدارة وتشغيل وصيانة التكنولوجيات في مجال الأعمال. الاتصالات، التحول الرقمي، والتقنيات الناشئة.",
                keywords: "الاستشارات الهندسية، استشارات التكنولوجيا، الاتصالات، المدن الذكية، التحول الرقمي، التقنيات الناشئة، السعودية",
                ogImage: `${baseUrl}/og-home-ar.jpg`,
            },
        },
        about: {
            en: {
                title: "About Us | Techtrum Consult",
                description: "Learn about Technaz Consult, our vision, mission, and values. Engineering consulting firm specialized in technology advisory services.",
                keywords: "about Techtrum, engineering consulting company, technology consulting, Saudi Arabia, who we are",
                ogImage: `${baseUrl}/og-about.jpg`,
            },
            ar: {
                title: "من نحن | تيكتروم كونسلت",
                description: "تعرف على تيكناز كونسلت، رؤيتنا، رسالتنا، وقيمنا. شركة استشارات هندسية متخصصة في خدمات الاستشارات التكنولوجية.",
                keywords: "عن تيكتروم، شركة الاستشارات الهندسية، استشارات التكنولوجيا، السعودية، من نحن",
                ogImage: `${baseUrl}/og-about-ar.jpg`,
            },
        },
        book: {
            en: {
                title: "Get in Touch | Techtrum Consult",
                description: "Get in touch or request a consultation with Techtrum Consult. Our team will respond within 24 hours.",
                keywords: "book visit, consultation, engineering consulting, technology consulting, Techtrum contact",
                ogImage: `${baseUrl}/og-book.jpg`,
            },
            ar: {
                title: "تواصل معنا | تيكتروم كونسلت",
                description: "تواصل معنا أو اطلب استشارة مع تيكتروم كونسلت. سيرد فريقنا خلال 24 ساعة.",
                keywords: "تواصل معنا، استشارة، استشارات هندسية، استشارات التكنولوجيا، تواصل تيكتروم",
                ogImage: `${baseUrl}/og-book-ar.jpg`,
            },
        },
        contact: {
            en: {
                title: "Contact Us | Techtrum Consult",
                description: "Get in touch with Techtrum Consult. Phone: +966 55 444 2151, Email: info@techtrum.com. Engineering and technology consulting services.",
                keywords: "contact Techtrum, engineering consulting contact, technology consulting, Saudi Arabia, phone, email",
                ogImage: `${baseUrl}/og-contact.jpg`,
            },
            ar: {
                title: "اتصل بنا | تيكتروم كونسلت",
                description: "تواصل مع تيكتروم كونسلت. الهاتف: +966 55 444 2151، البريد الإلكتروني: info@techtrum.com. خدمات الاستشارات الهندسية والتكنولوجية.",
                keywords: "اتصل بتيكتروم، تواصل الاستشارات الهندسية، استشارات التكنولوجيا، السعودية، هاتف، بريد إلكتروني",
                ogImage: `${baseUrl}/og-contact-ar.jpg`,
            },
        },
        service1: {
            en: {
                title: "Telecommunications & Smart Cities | Techtrum Consult",
                description: "Professional telecommunications and smart city consulting: wireless connectivity, fiber networks, 5G solutions, smart city strategies, and network performance optimization.",
                keywords: "telecommunications, smart cities, wireless connectivity, 5G, fiber networks, network optimization, smart city planning",
                ogImage: `${baseUrl}/og-service1.jpg`,
            },
            ar: {
                title: "الاتصالات والمدن الذكية | تيكتروم كونسلت",
                description: "استشارات الاتصالات والمدن الذكية الاحترافية: الاتصال اللاسلكي، شبكات الألياف، حلول الجيل الخامس، استراتيجيات المدن الذكية، وتحسين أداء الشبكات.",
                keywords: "الاتصالات، المدن الذكية، الاتصال اللاسلكي، الجيل الخامس، شبكات الألياف، تحسين الشبكات، تخطيط المدن الذكية",
                ogImage: `${baseUrl}/og-service1-ar.jpg`,
            },
        },
        service2: {
            en: {
                title: "Digital Transformation | Techtrum Consult",
                description: "Comprehensive digital transformation services: digital strategy, technology implementation, process optimization, and digital innovation.",
                keywords: "digital transformation, digital strategy, technology implementation, process optimization, digital innovation",
                ogImage: `${baseUrl}/og-service2.jpg`,
            },
            ar: {
                title: "التحول الرقمي | تيكتروم كونسلت",
                description: "خدمات التحول الرقمي الشاملة: الاستراتيجية الرقمية، تنفيذ التكنولوجيا، تحسين العمليات، والابتكار الرقمي.",
                keywords: "التحول الرقمي، الاستراتيجية الرقمية، تنفيذ التكنولوجيا، تحسين العمليات، الابتكار الرقمي",
                ogImage: `${baseUrl}/og-service2-ar.jpg`,
            },
        },
        service3: {
            en: {
                title: "Emerging Technologies & Innovation | Techtrum Consult",
                description: "Professional emerging technologies consulting: AI, IoT, blockchain, quantum computing, and innovative technology solutions.",
                keywords: "emerging technologies, AI, IoT, blockchain, quantum computing, innovation, technology consulting",
                ogImage: `${baseUrl}/og-service3.jpg`,
            },
            ar: {
                title: "التقنيات الناشئة والابتكار | تيكتروم كونسلت",
                description: "استشارات التقنيات الناشئة الاحترافية: الذكاء الاصطناعي، إنترنت الأشياء، البلوك تشين، الحوسبة الكمية، وحلول التكنولوجيا المبتكرة.",
                keywords: "التقنيات الناشئة، الذكاء الاصطناعي، إنترنت الأشياء، البلوك تشين، الحوسبة الكمية، الابتكار، استشارات التكنولوجيا",
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