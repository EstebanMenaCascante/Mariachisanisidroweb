import { Award, Music2, Users } from "lucide-react";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "../common/SectionHeading";
import type { TranslationKey } from "../../i18n";

type AboutSectionProps = {
  t: (key: TranslationKey) => string;
};

export function AboutSection({ t }: AboutSectionProps) {
  const values = [
    { icon: Music2, key: "tradition" },
    { icon: Users, key: "professionalism" },
    { icon: Award, key: "quality" },
  ] as const;

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("about.title")} />
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662392228425-92ba6109dc8f?w=800&q=80"
              alt="Mariachi group"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("about.description")}
          </p>
        </div>
        <h3 className="font-['Playfair_Display'] text-3xl font-bold text-center text-black mb-12">
          {t("about.values.title")}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-black mb-2">
                {t(`about.values.${key}` as TranslationKey)}
              </h4>
              <p className="text-gray-600">
                {t(`about.values.${key}.desc` as TranslationKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
