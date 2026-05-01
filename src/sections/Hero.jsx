import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import { images } from "../data/siteData";

export default function Hero({ text, stats, isAr }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Toma & Partners Logo"
          className="h-full w-full object-contain  opacity-100 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,170,110,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.2),transparent_35%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-[#c8aa6e]/30 bg-[#c8aa6e]/10 px-4 py-2 text-sm font-semibold text-[#c8aa6e]">
            {text.badge}
          </span>

          <h2 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#d8bd7f] sm:text-6xl lg:text-7xl">
            {text.heroTitle1}
            <span className="mt-3 block text-white">{text.heroTitle2}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {text.heroText}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8aa6e] px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-[#c8aa6e]/20 transition hover:bg-[#d8bd7f]"
            >
              {text.heroBtn1}
              <ArrowRight className={`h-5 w-5 ${isAr ? "rotate-180" : ""}`} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:border-[#c8aa6e] hover:text-[#c8aa6e]"
            >
              {text.heroBtn2}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c8aa6e] text-slate-950">
                <Scale className="h-9 w-9" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{text.trustedTitle}</h3>
                <p className="mt-1 text-slate-300">{text.trustedText}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-3xl font-black text-[#c8aa6e]">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
