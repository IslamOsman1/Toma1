import tomaLogo from "../assets/toma-logo.png";
import tony from "../assets/tony.png";
import eg from "../assets/eg.jpg";
import uae from "../assets/uae.jpg";
import mo from "../assets/mo.jpg";
import ch from "../assets/ch.jpg";
import {
  Award,
  BookOpenText,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
  Newspaper,
  Phone,
  ShieldCheck,
  Users,

} from "lucide-react";
/*
  ============================
  ملف البيانات والصور
  ============================
  هنا تغيّر الصور والنصوص الخاصة بالكروت.

  تغيير صورة:
  - ابحث عن image:
  - استبدل الرابط برابط صورة جديد.

  استخدام صورة محلية:
  - ضع الصورة في src/assets
  - استوردها في أعلى الملف
  - استخدم اسم الصورة بدل الرابط.
*/

export const contactConfig = {
  phoneNumber: "+20 10 98654078",
  whatsappNumber: "+20 10 98654078",
  email: "Jimmy.toma@outlook.com",
  mapLink: "https://maps.app.goo.gl/GJUTumgy9WoAMdRK6",
  mapLink1: "https://maps.google.com/?q=Dubai,UAE",
  mapLink2: "https://maps.google.com/?q=Rabat,Morocco",
};

export const images = {
   // اللوجو الرئيسي
  logo: tomaLogo,

  // صورة الهيرو: استخدمنا اللوجو بدل صورة البحر
  hero: tomaLogo,
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
};

export function getStats(t) {
  return [
    { number: "+15", label: t.years },
    { number: "4", label: t.markets },
    { number: "+5", label: t.lawyers },
    { number: "+500", label: t.casesCount },
  ];
}

export function getFeatures(isAr) {
  return [
    {
      icon: Users,
      title: isAr ? "فريق متخصص" : "Specialized Team",
      text: isAr
        ? "خبرة في التعامل مع مختلف أنواع القضايا."
        : "Experience handling different types of legal matters.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "سرية وثقة" : "Confidentiality",
      text: isAr
        ? "حماية كاملة لبيانات ومعلومات العملاء."
        : "Full protection of client information and data.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: FileText,
      title: isAr ? "عقود دقيقة" : "Precise Contracts",
      text: isAr
        ? "صياغة قانونية واضحة تحمي حقوقك."
        : "Clear legal drafting that protects your rights.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Gavel,
      title: isAr ? "تمثيل قضائي" : "Court Representation",
      text: isAr
        ? "متابعة احترافية أمام الجهات المختصة."
        : "Professional follow-up before competent authorities.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80",
    },
  ];
}

export function getServices(isAr) {
  return [
    {
      icon: Briefcase,
      title: isAr ? "إدارة القضايا والملفات القانونية" : "Legal Case & File Management",
      desc: isAr
        ? "تنظيم ومتابعة الملفات القانونية، إعداد المستندات، ومتابعة الإجراءات أمام الجهات المختصة."
        : "Organizing and following legal files, preparing documents, and managing procedures before authorities.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Building2,
      title: isAr ? "تأسيس الشركات وخدمات الاستثمار" : "Company Formation & Investment Services",
      desc: isAr
        ? "تأسيس الشركات، تسجيل الضرائب، إجراءات الاستثمار، التصاريح، والامتثال المستمر."
        : "Company formation, tax registration, investment procedures, permits, and ongoing compliance.",
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: BookOpenText,
      title: isAr ? "البحث والصياغة القانونية" : "Legal Research & Drafting",
      desc: isAr
        ? "إعداد المذكرات القانونية، صياغة العقود، ومراجعة الوثائق لحماية مصالح العميل."
        : "Preparing legal memos, drafting contracts, and reviewing documents to protect clients’ interests.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Landmark,
      title: isAr ? "التقاضي والطلبات القضائية" : "Court Submissions & Litigation",
      desc: isAr
        ? "إعداد وتقديم الطلبات والمستندات القضائية ومتابعة النزاعات أمام المحاكم."
        : "Preparing and submitting court documents and following disputes before courts.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80",
    },
  ];
}

export function getCountries(isAr) {
  return [
    {
      code: "EG",
      title: isAr ? "مصر — المقر الرئيسي" : "Egypt — Headquarters",
      desc: isAr
        ? "المكتب الرئيسي في القاهرة، متخصص في الشركات، النزاعات التجارية، الاستثمار، وصياغة العقود."
        : "Main office in Cairo, focused on corporate matters, commercial disputes, investment, and contracts.",
      image:
      eg,
    },
    {
      code: "AE",
      title: isAr ? "الإمارات — شركاء استشاريون" : "UAE — Of-Counsel Partners",
      desc: isAr
        ? "دعم قانوني واستشاري للشركات والمستثمرين في دبي وأبوظبي وفهم متطلبات الأعمال العابرة للحدود."
        : "Legal and advisory support for companies and investors in Dubai and Abu Dhabi.",
      image:
        uae,    },
    {
      code: "MA",
      title: isAr ? "المغرب — شريك قانوني" : "Morocco — Of-Counsel Partner",
      desc: isAr
        ? "رؤية قانونية إقليمية تشمل شمال أفريقيا والنزاعات التجارية والتحكيم وتطبيق القانون عبر الحدود."
        : "Regional legal perspective covering North Africa, disputes, arbitration, and cross-border matters.",
      image:
        mo,    },
    {
      code: "CN",
      title: isAr ? "الصين — تعاون استراتيجي" : "China — Strategic Cooperation",
      desc: isAr
        ? "مساندة للشركات الراغبة في التعاون التجاري والاستثماري بين الصين ومصر ومنطقة الشرق الأوسط."
        : "Assistance for companies seeking commercial and investment cooperation between China, Egypt, and the Middle East.",
      image:
        ch,
    },
  ];
}

export function getWhyItems(isAr) {
  return [
    {
      icon: Award,
      title: isAr ? "خبرة عملية" : "Expertise",
      text: isAr
        ? "خبرة في ملفات الشركات والاستثمار والنزاعات التجارية والتعاقدات."
        : "Experience in corporate, investment, commercial disputes, and contracts.",
    },
    {
      icon: BriefcaseBusiness,
      title: isAr ? "منهج واضح" : "Approach",
      text: isAr
        ? "نبدأ بفهم هدف العميل ثم نضع خطة قانونية قابلة للتنفيذ."
        : "We understand the client’s goal first, then build an actionable legal plan.",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "قيم وثقة" : "Values",
      text: isAr
        ? "السرية، الوضوح، الالتزام، وحماية مصالح العميل."
        : "Confidentiality, clarity, commitment, and protecting client interests.",
    },
    {
      icon: Handshake,
      title: isAr ? "شراكة طويلة" : "Partnership",
      text: isAr
        ? "نهدف إلى بناء علاقة قانونية مستمرة وليس مجرد خدمة مؤقتة."
        : "We aim to build an ongoing legal relationship, not a temporary service.",
    },
  ];
}

export function getCaseStudies(isAr) {
  return [
    {
      title: isAr ? "شركة تصنيع صينية" : "Chinese Manufacturing Company",
      text: isAr
        ? "دعم قانوني في تأسيس كيان محلي، مراجعة عقود التوريد، وترتيب التزامات الامتثال."
        : "Legal support in setting up a local entity, reviewing supply contracts, and compliance obligations.",
    },
    {
      title: isAr ? "مستثمر طاقة متجددة" : "Renewable Energy Investor",
      text: isAr
        ? "مراجعة الإطار التعاقدي والاستثماري وتقديم توصيات لتقليل المخاطر القانونية."
        : "Reviewing contractual and investment frameworks with recommendations to reduce legal risk.",
    },
    {
      title: isAr ? "نزاع تجاري بين الصين ومصر" : "China-Egypt Trade Dispute",
      text: isAr
        ? "تحليل المستندات التجارية والتفاوض للوصول إلى تسوية عملية تحفظ مصالح العميل."
        : "Analyzing commercial documents and negotiating a practical settlement to protect client interests.",
    },
    {
      title: isAr ? "توسع شركة تقنية" : "IT Company Expansion",
      text: isAr
        ? "تقديم إرشاد قانوني بشأن التأسيس، التراخيص، عقود العمل، وحماية البيانات."
        : "Legal guidance on incorporation, licenses, employment contracts, and data protection.",
    },
    {
      title: isAr ? "نزاع تجاري في المغرب" : "Commercial Dispute in Morocco",
      text: isAr
        ? "تنسيق قانوني مع شركاء محليين لدعم ملف نزاع تجاري عابر للحدود."
        : "Coordinating with local partners to support a cross-border commercial dispute.",
    },
    {
      title: isAr ? "ملف إداري وتنظيمي" : "Administrative Law Matter",
      text: isAr
        ? "إعداد مذكرات ومستندات داعمة للتعامل مع جهة إدارية وحماية مركز العميل القانوني."
        : "Preparing memos and supporting documents to handle an administrative authority and protect the client’s position.",
    },
  ];
}

export function getTeamMembers(isAr) {
  return [
    {
      name: isAr ? "جيمي توما" : "Jimmy Toma",
      role: isAr ? "المؤسس ومحامٍ أول" : "Founder & Senior Lawyer",
      desc: isAr
        ? "خبرة تزيد عن 15 عامًا في الأعمال الدولية، الاستثمار، النزاعات التجارية، وتأسيس الشركات."
        : "15+ years of experience in international business, investment, commercial disputes, and company formation.",
      image:
             tony,    },
    {
      name: isAr ? "فريق المحامين" : "Legal Team",
      role: isAr ? "محامون متخصصون" : "Specialized Lawyers",
      desc: isAr
        ? "فريق من المحامين لمتابعة الملفات، البحث القانوني، الصياغة، والإجراءات اليومية."
        : "A team of lawyers handling files, legal research, drafting, and daily procedures.",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: isAr ? "شبكة التعاون" : "Cooperation Network",
      role: isAr ? "شركاء في أسواق متعددة" : "Partners in Multiple Markets",
      desc: isAr
        ? "شبكة تعاون في الإمارات والصين والمغرب لدعم الملفات العابرة للحدود."
        : "A cooperation network in the UAE, China, and Morocco supporting cross-border matters.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
    },
  ];
}

export function getBlogPosts(isAr) {
  return [
    {
      title: isAr ? "ما الذي تحتاجه قبل تأسيس شركة؟" : "What do you need before forming a company?",
      text: isAr
        ? "خطوات أولية تساعدك على اختيار الشكل القانوني المناسب وتجنب الأخطاء الشائعة."
        : "Initial steps to choose the right legal structure and avoid common mistakes.",
      icon: Newspaper,
    },
    {
      title: isAr ? "أهمية مراجعة العقود التجارية" : "The importance of reviewing commercial contracts",
      text: isAr
        ? "العقد الجيد لا يوضح الالتزامات فقط، بل يقلل المخاطر ويحمي العلاقة التجارية."
        : "A good contract does not only define obligations; it reduces risk and protects the business relationship.",
      icon: Newspaper,
    },
    {
      title: isAr ? "التوسع الدولي من منظور قانوني" : "International expansion from a legal perspective",
      text: isAr
        ? "التوسع بين الدول يحتاج إلى فهم الضرائب، العقود، الامتثال، وآليات فض النزاعات."
        : "Cross-border expansion requires understanding taxes, contracts, compliance, and dispute mechanisms.",
      icon: Newspaper,
    },
  ];
}

export function getContactButtons(t) {
  return [
    {
      title: t.callBtn,
      value: t.callValue,
      icon: Phone,
      href: `tel:${contactConfig.phoneNumber}`,
    },
    {
      title: t.whatsappBtn,
      value: t.whatsappValue,
      icon: MessageCircle,
      href: `https://wa.me/${contactConfig.whatsappNumber}`,
    },
    {
      title: t.emailBtn,
      value: contactConfig.email,
      icon: Mail,
      href: `mailto:${contactConfig.email}`,
    },
    {
      title: t.locationBtn,
      value: t.locationValue,
      icon: Navigation,
      href: contactConfig.mapLink,
    },
     {
      title: t.locationBtn1,
      value: t.locationValue1,
      icon: MapPin,
      href: contactConfig.mapLink1,
    },
     {
      title: t.locationBtn2,
      value: t.locationValue2,
      icon: MapPin,
      href: contactConfig.mapLink2,
    },
  ];
}
