import { Header } from "../layout/Header";
import { GalleryFullSection } from "./GalleryFullSection";
import type { GalleryItem } from "../../types";
import type { SiteCopyKey, SiteLanguage } from "../../siteCopy";
import type { Dispatch, SetStateAction } from "react";

type GalleryFullPageProps = {
  lang: SiteLanguage;
  setLang: Dispatch<SetStateAction<SiteLanguage>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  t: (key: SiteCopyKey) => string;
  gallery: GalleryItem[];
  homeHref?: string;
};

export function GalleryFullPage({
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  t,
  gallery,
  homeHref = "./",
}: GalleryFullPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
        mode="page"
        homeHref={homeHref}
      />
      <main className="pt-20">
        <GalleryFullSection t={t} gallery={gallery} />
      </main>
    </div>
  );
}
