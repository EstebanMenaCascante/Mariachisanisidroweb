import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

import { navSections } from "../../content";
import type { SiteCopyKey, SiteLanguage } from "../../siteCopy";

type HeaderProps = {
  lang: SiteLanguage;
  setLang: Dispatch<SetStateAction<SiteLanguage>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  t: (key: SiteCopyKey) => string;
  onNavigate?: (sectionId: string) => void;
  mode?: "home" | "page";
  homeHref?: string;
};

export function Header({
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  t,
  onNavigate,
  mode = "home",
  homeHref = "/",
}: HeaderProps) {
  const handleNavigate = (sectionId: string) => {
    onNavigate?.(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/20">
              <img
                src="/Mariachisanisidroweb/images/encabezado/Mariachi_logo.png"
                alt="Mariachi San Isidro"
                className="w-20 h-20 object-contain object-center block"
              />
            </div>
            <div>
              <h1 className="text-xl font-['Playfair_Display'] font-bold text-white">
                Mariachi San Isidro
              </h1>
              <p className="text-xs text-[#D4AF37]">
                Pérez Zeledón, Costa Rica
              </p>
            </div>
          </div>

          {mode === "home" ? (
            <nav className="hidden lg:flex items-center gap-8">
              {navSections.map((sectionId) => (
                <button
                  key={sectionId}
                  onClick={() => handleNavigate(sectionId)}
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  {t(`nav.${sectionId}` as SiteCopyKey)}
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cotizar")}
                className="bg-[#D4AF37] hover:bg-[#FFD700] text-black px-6 py-2 rounded-full transition-colors"
              >
                {t("nav.cotizar")}
              </button>
            </nav>
          ) : (
            <a
              href={homeHref}
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white transition-colors hover:bg-white/10 hover:text-[#D4AF37]"
            >
              <span>{t("repertoire.backHome")}</span>
            </a>
          )}

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1.5">
              {(["es", "en"] as const).map((option, index) => (
                <span key={option} className="flex items-center gap-1">
                  {index > 0 && <span className="text-white/30">|</span>}
                  <button
                    onClick={() => setLang(option)}
                    className={`px-2 py-1 rounded-full text-sm transition-colors ${lang === option ? "bg-[#D4AF37] text-black" : "text-white hover:text-[#D4AF37]"}`}
                  >
                    {option.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
            {mode === "home" ? (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            ) : null}
          </div>
        </div>

        {mode === "home" && menuOpen && (
          <div className="lg:hidden py-4 border-t border-[#D4AF37]/20">
            <nav className="flex flex-col gap-4">
              {navSections.map((sectionId) => (
                <button
                  key={sectionId}
                  onClick={() => handleNavigate(sectionId)}
                  className="text-white hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t(`nav.${sectionId}` as SiteCopyKey)}
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cotizar")}
                className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-center"
              >
                {t("nav.cotizar")}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
