import { Calendar, MessageCircle } from "lucide-react";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import type { SiteCopyKey } from "../../siteCopy";

type HeroSectionProps = {
  t: (key: SiteCopyKey) => string;
  onQuote: () => void;
  onWhatsApp: () => void;
};

export function HeroSection({ t, onQuote, onWhatsApp }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[88svh] flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1769230364868-a3c7588ed628?w=1920&q=80"
          alt="Mariachi band"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20">
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {t("hero.headline")}
        </h1>
        <p className="text-lg sm:text-2xl text-[#D4AF37] mb-8 sm:mb-12">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <button
            onClick={onQuote}
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">{t("hero.cta.quote")}</span>
          </button>
          <button
            onClick={onWhatsApp}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{t("hero.cta.whatsapp")}</span>
          </button>
        </div>
        <div className="mt-10 sm:mt-16 flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
