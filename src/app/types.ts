import type { SiteCopyKey } from "./siteCopy";

export type Member = {
  name: string;
  instrument: string;
  image: string;
};

export type Song = {
  title: string;
  tags: string[];
  occasion: string;
  genre: string;
  mood: string;
  youtubeUrl: string;
};

export type GalleryItem = {
  type: "image" | "video";
  url: string;
  title: string;
};

export type QuoteFormValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  ampm: "AM" | "PM";
  duration: "30min" | "1hour" | "2hours" | "3hours";
  location: string;
  eventType:
    | "serenade"
    | "wedding"
    | "birthday"
    | "proposal"
    | "party"
    | "corporate"
    | "other";
  comments: string;
};

export type RepertoireFilterGroup = {
  labelKey: SiteCopyKey;
  items: readonly string[];
  prefix: "repertoire.occasion." | "repertoire.genre." | "repertoire.mood.";
};
