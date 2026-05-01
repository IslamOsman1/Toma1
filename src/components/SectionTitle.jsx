export default function SectionTitle({ icon: Icon, small, title, body }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {Icon && (
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#c8aa6e] text-slate-950 shadow-xl shadow-[#c8aa6e]/20">
          <Icon className="h-9 w-9" />
        </div>
      )}

      <p className="font-bold text-[#c8aa6e]">{small}</p>

      <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 leading-8 text-slate-300">{body}</p>
    </div>
  );
}
