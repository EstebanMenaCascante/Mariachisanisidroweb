import { Play, X, ChevronRight } from "lucide-react";

import { SectionHeading } from "../common/SectionHeading";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import type { GalleryItem } from "../../types";
import type { SiteCopyKey } from "../../siteCopy";

type GallerySectionProps = {
  t: (key: SiteCopyKey) => string;
  gallery: GalleryItem[];
  lightbox: number | null;
  setLightbox: (value: number | null) => void;
  previewLimit?: number;
  viewAllHref?: string;
};

export function GallerySection({
  t,
  gallery,
  lightbox,
  setLightbox,
  previewLimit,
  viewAllHref,
}: GallerySectionProps) {
  const visibleGallery =
    previewLimit && gallery.length > previewLimit
      ? gallery.slice(0, previewLimit)
      : gallery;

  const hasMore = previewLimit && gallery.length > previewLimit;

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {visibleGallery.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setLightbox(index)}
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

        {/* View All Button */}
        {hasMore && viewAllHref && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] hover:bg-[#FFD700] text-black font-bold rounded-full transition-all hover:shadow-lg"
            >
              {t("gallery.viewAll")}
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        )}
      </div>

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
