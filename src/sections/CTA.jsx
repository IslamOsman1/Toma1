export default function CTA({ text }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#c8aa6e] to-[#e1ca91] p-8 text-slate-950 shadow-2xl shadow-[#c8aa6e]/20 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              {text.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-800">
              {text.ctaText}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
          >
            {text.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
