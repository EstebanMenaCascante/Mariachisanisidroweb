import { Header } from "../layout/Header";
import { RepertoireSection } from "./RepertoireSection";
import type { Song, RepertoireFilterGroup } from "../../types";
import type { SiteCopyKey, SiteLanguage } from "../../siteCopy";
import type { Dispatch, SetStateAction } from "react";

type RepertoirePageProps = {
  lang: SiteLanguage;
  setLang: Dispatch<SetStateAction<SiteLanguage>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  t: (key: SiteCopyKey) => string;
  repertoireFilterGroups: RepertoireFilterGroup[];
  songs: Song[];
  homeHref: string;
};

export function RepertoirePage({
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  t,
  repertoireFilterGroups,
  songs,
  homeHref,
}: RepertoirePageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
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
        <RepertoireSection
          t={t}
          repertoireFilterGroups={repertoireFilterGroups}
          songs={songs}
        />
      </main>
    </div>
  );
}
