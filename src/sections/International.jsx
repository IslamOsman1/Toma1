import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function International({ text, countries }) {
  return (
    <section
      id="international"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,110,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          icon={Globe2}
          small={text.internationalSmall}
          title={text.internationalTitle}
          body={text.internationalText}
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30"
            >
              <img
                src={country.image}
                alt={country.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20" />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute right-6 top-6 rounded-2xl border border-[#c8aa6e]/30 bg-slate-950/70 px-5 py-3 text-3xl font-black text-[#c8aa6e] backdrop-blur-md">
                {country.code}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="mb-5 h-1.5 w-24 rounded-full bg-[#c8aa6e]" />
                <h3 className="text-2xl font-black text-white">
                  {country.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  {country.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-[#c8aa6e] backdrop-blur-md">
                  <MapPin className="h-4 w-4" />
                  {text.branchBadge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
