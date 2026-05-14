import type { GalleryItem, Member, QuoteFormValues, Song } from "./types";

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

export const songs: Song[] = (
  cancionesData as Array<
    Omit<Song, "occasion"> & { occasion: string | string[] }
  >
).map((song) => ({
  ...song,
  occasion: Array.isArray(song.occasion)
    ? song.occasion.filter(Boolean)
    : [song.occasion].filter(Boolean),
}));

export const gallery: GalleryItem[] = galeriaData as GalleryItem[];

export const WHATSAPP_PHONE = "50685676230";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;
export const CONTACT_PHONE_DISPLAY = "+506 8567-6230";

export const initialQuoteForm: QuoteFormValues = {
  name: "",
  phone: "",
  date: "",
  time: "",
  ampm: "PM",
  duration: "30min",
  location: "",
  eventType: "birthday",
  comments: "",
};

export const socialLinks = [
  {
    href: "https://www.instagram.com/mariachisanisidro_pz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    name: "Instagram",
  },
  { href: "https://www.facebook.com/share/1afHVK172X/", name: "Facebook" },
  { href: "https://youtube.com", name: "Youtube" },
] as const;
