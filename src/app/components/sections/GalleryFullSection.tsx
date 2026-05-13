import { Play, X } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionHeading } from "../common/SectionHeading";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import type { GalleryItem } from "../../types";
import type { SiteCopyKey } from "../../siteCopy";

type GalleryFullSectionProps = {
  t: (key: SiteCopyKey) => string;
  gallery: GalleryItem[];
};

export function GalleryFullSection({ t, gallery }: GalleryFullSectionProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<"all" | "image" | "video">(
    "all",
  );

  const filteredGallery = useMemo(() => {
    if (filterType === "all") return gallery;
    return gallery.filter((item) => item.type === filterType);
  }, [gallery, filterType]);

  const chipClassName = (value: "all" | "image" | "video") =>
    `px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
      filterType === value
        ? "bg-[#D4AF37] text-black font-semibold"
        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
    }`;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />

        {/* Filter chips */}
        <div className="flex gap-3 justify-center mb-8">
          <button
            onClick={() => setFilterType("all")}
            className={chipClassName("all")}
          >
            {t("gallery.all")}
          </button>
          <button
            onClick={() => setFilterType("image")}
            className={chipClassName("image")}
          >
            {t("gallery.images")}
          </button>
          <button
            onClick={() => setFilterType("video")}
            className={chipClassName("video")}
          >
            {t("gallery.videos")}
          </button>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.title}
              onClick={() => {
                // Find actual index in full gallery for lightbox
                const actualIndex = gallery.findIndex(
                  (g) => g.title === item.title,
                );
                setLightbox(actualIndex);
              }}
              className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
            >
              {item.type === "image" ? (
                <ImageWithFallback
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <video
                  src={encodeURI(item.url)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  playsInline
                  loop
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-white text-xs sm:text-base font-medium leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37]/90 rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t("gallery.noResults")}</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
          <div
            className="flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col gap-4 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center">
              {gallery[lightbox].type === "image" ? (
                <ImageWithFallback
                  src={gallery[lightbox].url}
                  alt={gallery[lightbox].title}
                  className="max-h-[calc(100vh-10rem)] w-auto max-w-full object-contain"
                />
              ) : (
                <video
                  src={encodeURI(gallery[lightbox].url)}
                  className="max-h-[calc(100vh-10rem)] w-auto max-w-full object-contain"
                  controls
                  autoPlay
                />
              )}
            </div>
            <p className="text-white text-center mt-4 text-base sm:text-lg">
              {gallery[lightbox].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
