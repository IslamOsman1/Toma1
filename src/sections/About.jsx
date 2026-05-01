export default function About({ text, features }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-bold text-[#c8aa6e]">{text.aboutSmall}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            {text.aboutTitle}
          </h2>

          <p className="mt-6 leading-8 text-slate-300">{text.aboutText1}</p>
          <p className="mt-4 leading-8 text-slate-300">{text.aboutText2}</p>
        </div>

        {/*
          كروت About بالصور.
          لتغيير الصور اذهب إلى:
          src/data/siteData.js
          ثم عدّل getFeatures > image
        */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-[#c8aa6e]/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8aa6e] text-slate-950 shadow-lg shadow-black/30">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
