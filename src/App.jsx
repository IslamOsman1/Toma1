import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import International from "./sections/International";
import WhyUs from "./sections/WhyUs";
import CaseStudies from "./sections/CaseStudies";
import Team from "./sections/Team";
import Blog from "./sections/Blog";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

import { translations } from "./data/translations";
import {
  getBlogPosts,
  getCaseStudies,
  getContactButtons,
  getCountries,
  getFeatures,
  getServices,
  getStats,
  getTeamMembers,
  getWhyItems,
} from "./data/siteData";

export default function App() {
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);

  const isAr = lang === "ar";
  const text = translations[lang];

  const navItems = [
    { label: text.home, href: "#home" },
    { label: text.about, href: "#about" },
    { label: text.services, href: "#services" },
    { label: text.international, href: "#international" },
    { label: text.whyUs, href: "#why-us" },
    { label: text.cases, href: "#case-studies" },
    { label: text.team, href: "#team" },
    { label: text.blog, href: "#blog" },
    { label: text.contact, href: "#contact" },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-950 text-white"
    >
      <Navbar
        text={text}
        navItems={navItems}
        isAr={isAr}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero text={text} stats={getStats(text)} isAr={isAr} />
      <About text={text} features={getFeatures(isAr)} />
      <Services text={text} services={getServices(isAr)} />
      <International text={text} countries={getCountries(isAr)} />
      <WhyUs text={text} whyItems={getWhyItems(isAr)} />
      <CaseStudies text={text} caseStudies={getCaseStudies(isAr)} />
      <Team text={text} teamMembers={getTeamMembers(isAr)} />
      <Blog text={text} blogPosts={getBlogPosts(isAr)} />
      <CTA text={text} />
      <Contact
        text={text}
        isAr={isAr}
        contactButtons={getContactButtons(text)}
      />

      <Footer text={text} />
    </main>
  );
}
