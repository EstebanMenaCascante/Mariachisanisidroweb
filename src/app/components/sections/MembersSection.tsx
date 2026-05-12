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
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("members.title")}
          subtitle={t("members.subtitle")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37]">{member.instrument}</p>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-black font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
