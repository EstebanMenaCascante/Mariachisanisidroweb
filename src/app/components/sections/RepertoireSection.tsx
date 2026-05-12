import { ChevronDown, ChevronUp, Search, Youtube } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "../common/SectionHeading";
import type { Song } from "../../types";
import type { RepertoireFilterGroup } from "../../types";
import type { SiteCopyKey } from "../../siteCopy";

type RepertoireSectionProps = {
  t: (key: SiteCopyKey) => string;
  repertoireFilterGroups: RepertoireFilterGroup[];
  search: string;
  setSearch: (value: string) => void;
  activeFilter: string | null;
  onToggleFilter: (value: string) => void;
  filteredSongs: Song[];
};

const inputClassName =
  "w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors";

export function RepertoireSection({
  t,
  repertoireFilterGroups,
  search,
  setSearch,
  activeFilter,
  onToggleFilter,
  filteredSongs,
}: RepertoireSectionProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {},
  );

  const chipClassName = (value: string) =>
    `px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${activeFilter === value ? "bg-[#D4AF37] text-black" : "bg-white/10 hover:bg-white/20 text-white"}`;

  const toggleGroupExpanded = (groupKey: string) => {
    setExpandedGroups((current) => ({
      ...current,
      [groupKey]: !current[groupKey],
    }));
  };

  return (
    <section id="repertorio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("repertoire.title")}
          subtitle={t("repertoire.subtitle")}
          dark
        />

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t("repertoire.search")}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {repertoireFilterGroups.map((group) => (
            <div key={group.labelKey}>
              <h3 className="text-sm font-medium text-gray-400 mb-3">
                {t(group.labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items
                  .slice(0, expandedGroups[group.labelKey] ? undefined : 4)
                  .map((value) => (
                    <button
                      key={value}
                      onClick={() => onToggleFilter(value)}
                      className={chipClassName(value)}
                    >
                      {t(`${group.prefix}${value}` as SiteCopyKey)}
                    </button>
                  ))}
                {group.items.length > 4 ? (
                  <button
                    type="button"
                    onClick={() => toggleGroupExpanded(group.labelKey)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-colors border border-white/20 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white"
                    aria-expanded={Boolean(expandedGroups[group.labelKey])}
                    aria-label={`${expandedGroups[group.labelKey] ? t("repertoire.less") : t("repertoire.more")} ${t(group.labelKey)}`}
                  >
                    {expandedGroups[group.labelKey]
                      ? t("repertoire.less")
                      : t("repertoire.more")}
                    {expandedGroups[group.labelKey] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {filteredSongs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSongs.map((song) => (
              <div
                key={song.title}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group"
              >
                <h4 className="font-medium text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {song.title}
                </h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {song.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={song.youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  {t("repertoire.listen")}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t("repertoire.empty")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
