import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

import { SectionHeading } from "../common/SectionHeading";
import { CONTACT_PHONE_DISPLAY, socialLinks } from "../../content";
import type { SiteCopyKey } from "../../siteCopy";

type ContactSectionProps = {
  t: (key: SiteCopyKey) => string;
  onWhatsApp: () => void;
};

const socialIcons = {
  Instagram,
  Facebook,
  Youtube,
};

export function ContactSection({ t, onWhatsApp }: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          dark
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          <button
            onClick={onWhatsApp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#25D366] hover:bg-white/10 transition-all group text-left"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg mb-1">
                {t("contact.whatsapp")}
              </h3>
              <p className="text-sm sm:text-base text-[#D4AF37]">
                {CONTACT_PHONE_DISPLAY}
              </p>
            </div>
          </button>
          <a
            href="tel:+50685676230"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg mb-1">
                {t("contact.call")}
              </h3>
              <p className="text-sm sm:text-base text-[#D4AF37]">
                {CONTACT_PHONE_DISPLAY}
              </p>
            </div>
          </a>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-lg sm:text-xl font-medium mb-6">
            {t("contact.socials")}
          </h3>
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map(({ href, name }) => {
              const Icon = socialIcons[name as keyof typeof socialIcons];

              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 transition-all"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
