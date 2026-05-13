import { useMemo, useState, type FormEvent } from "react";

import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { GallerySection } from "./components/sections/GallerySection";
import { GalleryFullPage } from "./components/sections/GalleryFullPage";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { MembersSection } from "./components/sections/MembersSection";
import { QuoteSection } from "./components/sections/QuoteSection";
import { RepertoireSection } from "./components/sections/RepertoireSection";
import { RepertoirePage } from "./components/sections/RepertoirePage";
import { RepertoryAdminPage } from "./components/sections/RepertoryAdminPage";
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
import {
  buildQuoteMessage,
  createRepertoirePath,
  createGalleryPath,
  getRepertoireQueryState,
  type RepertoireQueryState,
  scrollToSection,
} from "./utils";
import type { QuoteFormValues } from "./types";

export default function App() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isRepertoryAdminRoute = pathname
    .replace(/\/+$/, "")
    .endsWith("/addrepertory");
  const isRepertoireRoute = pathname
    .replace(/\/+$/, "")
    .endsWith("/repertorio");
  const isGalleryRoute = pathname.replace(/\/+$/, "").endsWith("/galeria");
  const repertoireQueryState: RepertoireQueryState =
    typeof window !== "undefined"
      ? getRepertoireQueryState(new URLSearchParams(window.location.search))
      : { search: "", filter: null };

  const [lang, setLang] = useState<SiteLanguage>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [form, setForm] = useState<QuoteFormValues>(initialQuoteForm);
  const [sent, setSent] = useState(false);

  const t = useMemo(() => createSiteCopyTranslator(lang), [lang]);
  const repertoireFilterGroups = useMemo(
    () => getRepertoireFilterGroups(lang),
    [lang],
  );

  if (isRepertoryAdminRoute) {
    return <RepertoryAdminPage />;
  }

  if (isRepertoireRoute) {
    return (
      <RepertoirePage
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
        repertoireFilterGroups={repertoireFilterGroups}
        songs={songs}
        homeHref={createRepertoirePath("", repertoireQueryState)}
      />
    );
  }

  if (isGalleryRoute) {
    return (
      <GalleryFullPage
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
        gallery={gallery}
        homeHref={import.meta.env.BASE_URL || "/"}
      />
    );
  }

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
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
          songs={songs}
          previewLimit={6}
          viewAllHref="repertorio"
        />
        <GallerySection
          t={t}
          gallery={gallery}
          lightbox={lightbox}
          setLightbox={setLightbox}
          previewLimit={6}
          viewAllHref={createGalleryPath("galeria")}
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
