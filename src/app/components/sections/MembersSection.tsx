import { SectionHeading } from "../common/SectionHeading";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import type { Member } from "../../types";
import type { SiteCopyKey } from "../../siteCopy";

type MembersSectionProps = {
  t: (key: SiteCopyKey) => string;
  members: Member[];
};

export function MembersSection({ t, members }: MembersSectionProps) {
  return (
    <section
      id="integrantes"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("members.title")}
          subtitle={t("members.subtitle")}
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-6">
                <h3 className="font-['Playfair_Display'] text-sm sm:text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-base text-[#D4AF37] leading-tight">
                  {member.instrument}
                </p>
              </div>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-black text-sm sm:text-base font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
