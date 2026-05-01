import SectionTitle from "../components/SectionTitle";

export default function CaseStudies({ text, caseStudies }) {
  return (
    <section id="case-studies" className="bg-slate-900/50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle small={text.casesSmall} title={text.casesTitle} body={text.casesText} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-[#c8aa6e]/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8aa6e] font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
