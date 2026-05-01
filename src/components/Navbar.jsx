import { Menu, Scale, X } from "lucide-react";
import { images } from "../data/siteData";

export default function Navbar({
  text,
  navItems,
  isAr,
  setLang,
  menuOpen,
  setMenuOpen,
}) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-17 w-15 items-center justify-center overflow-hidden rounded-2xl border border-[#c8aa6e]/30 bg-slate-950">
               <img
                src={images.logo}
               alt="Toma & Partners Logo"
                className="h-full w-full object-contain p-0"/>
         </div>

          <div>
            <h1 className="text-base font-bold leading-none md:text-lg">
              {text.firmNameShort}
            </h1>
            <p className="mt-1 text-xs text-slate-400">{text.firmNameEn}</p>
          </div>
        </a>

        <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#c8aa6e]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLang(isAr ? "en" : "ar")}
            className="rounded-full border border-[#c8aa6e]/40 px-5 py-2.5 text-sm font-bold text-[#c8aa6e] transition hover:bg-[#c8aa6e] hover:text-slate-950"
          >
            {text.langButton}
          </button>

          <a
            href="#contact"
            className="rounded-full bg-[#c8aa6e] px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-[#d8bd7f]"
          >
            {text.book}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/10 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 transition hover:border-[#c8aa6e] hover:text-[#c8aa6e]"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="rounded-2xl border border-[#c8aa6e]/40 px-4 py-3 font-bold text-[#c8aa6e]"
            >
              {text.langButton}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
