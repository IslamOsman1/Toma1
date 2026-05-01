export default function ImageCard({ image, icon: Icon, title, desc }) {
  return (
    <div className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-[#c8aa6e]/50">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="absolute bottom-4 right-4 inline-flex rounded-2xl bg-[#c8aa6e] p-3 text-slate-950">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-4 leading-7 text-slate-400">{desc}</p>
      </div>
    </div>
  );
}
