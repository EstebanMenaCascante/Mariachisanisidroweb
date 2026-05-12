import { Music } from "lucide-react";

import type { SiteCopyKey } from "../../siteCopy";

type FooterProps = {
  t: (key: SiteCopyKey) => string;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
              <Music className="w-7 h-7 text-black" />
            </div>
            <div className="text-left">
              <h3 className="font-['Playfair_Display'] text-xl font-bold">
                Mariachi San Isidro
              </h3>
              <p className="text-sm text-[#D4AF37]">{t("footer.location")}</p>
            </div>
          </div>
          <p className="font-['Playfair_Display'] text-lg italic text-gray-400 mb-6">
            {t("footer.tagline")}
          </p>
          <div className="border-t border-white/10 pt-6 w-full">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mariachi San Isidro.{" "}
              {t("footer.rights")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
