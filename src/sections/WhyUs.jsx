import SectionTitle from "../components/SectionTitle";

export default function WhyUs({ text, whyItems }) {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionTitle small={text.whySmall} title={text.whyTitle} body={text.whyText} />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {whyItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-[#c8aa6e]/50"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-[#c8aa6e]/15 p-3 text-[#c8aa6e]">
                <Icon />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
