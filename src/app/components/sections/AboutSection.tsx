import { Award, Music2, Users } from "lucide-react";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "../common/SectionHeading";
import type { SiteCopyKey } from "../../siteCopy";

type AboutSectionProps = {
  t: (key: SiteCopyKey) => string;
  imageShift?: string;
};

export function AboutSection({ t, imageShift = "0px" }: AboutSectionProps) {
  const values = [
    { icon: Music2, key: "tradition" },
    { icon: Users, key: "professionalism" },
    { icon: Award, key: "quality" },
  ] as const;

  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("about.title")} />
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/Mariachisanisidroweb/images/encabezado/Mariachi_encabezado1.jpg"
              alt="Mariachi group"
              className="w-full h-auto object-contain"
              style={{ transform: `translateY(${imageShift})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {t("about.description")}
          </p>
        </div>
        <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-12">
          {t("about.values.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {values.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-black mb-2">
                {t(`about.values.${key}.label` as SiteCopyKey)}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                {t(`about.values.${key}.description` as SiteCopyKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
