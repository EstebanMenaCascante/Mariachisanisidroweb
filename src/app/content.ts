import type {
  GalleryItem,
  Member,
  QuoteFormValues,
  RepertoireFilterGroup,
  Song,
} from "./types";

import integrantesData from "../data/integrantes.json";
import cancionesData from "../data/canciones.json";
import galeriaData from "../data/galeria.json";

export const navSections = [
  "inicio",
  "nosotros",
  "integrantes",
  "repertorio",
  "galeria",
] as const;

export const members: Member[] = integrantesData;

export const songs: Song[] = cancionesData;

export const gallery: GalleryItem[] = galeriaData as GalleryItem[];

export const repertoireFilterGroups: RepertoireFilterGroup[] = [
  {
    labelKey: "repertoire.filter.occasion",
    items: ["mama", "papa", "wedding", "proposal", "birthday", "party"],
    prefix: "repertoire.occasion.",
  },
  {
    labelKey: "repertoire.filter.genre",
    items: ["romantic", "rancheras", "cumbias", "corridos", "boleros"],
    prefix: "repertoire.genre.",
  },
  {
    labelKey: "repertoire.filter.mood",
    items: ["happy", "sentimental", "party"],
    prefix: "repertoire.mood.",
  },
];

export const WHATSAPP_PHONE = "50685676230";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;
export const CONTACT_PHONE_DISPLAY = "+506 8567-6230";

export const initialQuoteForm: QuoteFormValues = {
  name: "",
  phone: "",
  date: "",
  time: "",
  ampm: "AM",
  duration: "1hour",
  location: "",
  eventType: "serenade",
  comments: "",
};

export const socialLinks = [
  { href: "https://instagram.com", name: "Instagram" },
  { href: "https://facebook.com", name: "Facebook" },
  { href: "https://youtube.com", name: "Youtube" },
] as const;
