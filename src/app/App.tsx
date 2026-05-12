import { useMemo, useState, type FormEvent } from "react";

import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { GallerySection } from "./components/sections/GallerySection";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { MembersSection } from "./components/sections/MembersSection";
import { QuoteSection } from "./components/sections/QuoteSection";
import { RepertoireSection } from "./components/sections/RepertoireSection";
import {
  gallery,
  initialQuoteForm,
  members,
  songs,
  WHATSAPP_URL,
} from "./content";
import {
  createSiteCopyTranslator,
  getRepertoireFilterGroups,
  type SiteLanguage,
} from "./siteCopy";
import { buildQuoteMessage, filterSongs, scrollToSection } from "./utils";
import type { QuoteFormValues } from "./types";

export default function App() {
  const [lang, setLang] = useState<SiteLanguage>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [form, setForm] = useState<QuoteFormValues>(initialQuoteForm);
  const [sent, setSent] = useState(false);

  const t = useMemo(() => createSiteCopyTranslator(lang), [lang]);
  const repertoireFilterGroups = useMemo(
    () => getRepertoireFilterGroups(lang),
    [lang],
  );
  const filteredSongs = useMemo(
    () => filterSongs(songs, search, activeFilter),
    [search, activeFilter],
  );

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const handleToggleFilter = (value: string) => {
    setActiveFilter((previous) => (previous === value ? null : value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = buildQuoteMessage(form);
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Header
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
        onNavigate={handleNavigate}
      />

      <main className="pt-20">
        <HeroSection
          t={t}
          onQuote={() => handleNavigate("cotizar")}
          onWhatsApp={handleWhatsApp}
        />
        <AboutSection t={t} />
        <MembersSection t={t} members={members} />
        <RepertoireSection
          t={t}
          repertoireFilterGroups={repertoireFilterGroups}
          search={search}
          setSearch={setSearch}
          activeFilter={activeFilter}
          onToggleFilter={handleToggleFilter}
          filteredSongs={filteredSongs}
        />
        <GallerySection
          t={t}
          gallery={gallery}
          lightbox={lightbox}
          setLightbox={setLightbox}
        />
        <QuoteSection
          t={t}
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          sent={sent}
        />
        <ContactSection t={t} onWhatsApp={handleWhatsApp} />
      </main>

      <Footer t={t} />
    </div>
  );
}
