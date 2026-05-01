export default function Footer({ text }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-slate-400 md:flex-row lg:px-8">
        <p>{text.footerRights}</p>
        <p>{text.footerDesign}</p>
      </div>
    </footer>
  );
}
