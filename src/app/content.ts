import type {
  GalleryItem,
  Member,
  QuoteFormValues,
  RepertoireFilterGroup,
  Song,
} from "./types";

export const navSections = [
  "inicio",
  "nosotros",
  "integrantes",
  "repertorio",
  "galeria",
] as const;

export const members: Member[] = [
  {
    name: "Andrés Mora",
    instrument: "Vihuela",
    image:
      "https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=600&q=80",
  },
  {
    name: "Gustavo Blanco",
    instrument: "Guitarrón",
    image:
      "https://images.unsplash.com/photo-1712709895347-21b980921fe2?w=600&q=80",
  },
  {
    name: "Cristian Hidalgo",
    instrument: "Guitarra",
    image:
      "https://images.unsplash.com/photo-1759899520708-b036689715c0?w=600&q=80",
  },
  {
    name: "Gerardo Barrantes",
    instrument: "Acordeón",
    image:
      "https://images.unsplash.com/photo-1585639557135-abe9aaf7c925?w=600&q=80",
  },
  {
    name: "Esteban Mena",
    instrument: "Trompeta",
    image:
      "https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=600&q=80",
  },
  {
    name: "Sebastian Monge",
    instrument: "Trompeta",
    image:
      "https://images.unsplash.com/photo-1712709895347-21b980921fe2?w=600&q=80",
  },
];

export const songs: Song[] = [
  {
    title: "Cielito Lindo",
    tags: ["romantic", "party"],
    occasion: "party",
    genre: "rancheras",
    mood: "happy",
  },
  {
    title: "Las Mañanitas",
    tags: ["birthday"],
    occasion: "birthday",
    genre: "traditional",
    mood: "happy",
  },
  {
    title: "Bésame Mucho",
    tags: ["romantic", "wedding"],
    occasion: "wedding",
    genre: "boleros",
    mood: "sentimental",
  },
  {
    title: "El Rey",
    tags: ["party"],
    occasion: "party",
    genre: "rancheras",
    mood: "party",
  },
  {
    title: "La Bamba",
    tags: ["party"],
    occasion: "party",
    genre: "cumbias",
    mood: "party",
  },
  {
    title: "Amor Eterno",
    tags: ["romantic"],
    occasion: "mama",
    genre: "romantic",
    mood: "sentimental",
  },
  {
    title: "Si Nos Dejan",
    tags: ["romantic", "wedding"],
    occasion: "wedding",
    genre: "romantic",
    mood: "sentimental",
  },
  {
    title: "Volver Volver",
    tags: ["party"],
    occasion: "party",
    genre: "rancheras",
    mood: "happy",
  },
  {
    title: "Hermoso Cariño",
    tags: ["romantic", "proposal"],
    occasion: "proposal",
    genre: "romantic",
    mood: "sentimental",
  },
  {
    title: "México Lindo y Querido",
    tags: ["party"],
    occasion: "party",
    genre: "rancheras",
    mood: "happy",
  },
  {
    title: "Cucurrucucú Paloma",
    tags: ["romantic"],
    occasion: "wedding",
    genre: "boleros",
    mood: "sentimental",
  },
  {
    title: "La Bikina",
    tags: ["party"],
    occasion: "party",
    genre: "rancheras",
    mood: "party",
  },
  {
    title: "Te Quiero Dijiste",
    tags: ["romantic", "proposal"],
    occasion: "proposal",
    genre: "boleros",
    mood: "sentimental",
  },
  {
    title: "El Mariachi Loco",
    tags: ["party"],
    occasion: "party",
    genre: "corridos",
    mood: "party",
  },
  {
    title: "Contigo Aprendí",
    tags: ["romantic", "wedding"],
    occasion: "wedding",
    genre: "romantic",
    mood: "sentimental",
  },
  {
    title: "Adiós Mi Chaparrita",
    tags: ["party"],
    occasion: "party",
    genre: "cumbias",
    mood: "happy",
  },
  {
    title: "El Son de la Negra",
    tags: ["party"],
    occasion: "party",
    genre: "rancheras",
    mood: "party",
  },
  {
    title: "Para Morir Iguales",
    tags: ["romantic"],
    occasion: "wedding",
    genre: "romantic",
    mood: "sentimental",
  },
];

export const gallery: GalleryItem[] = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1769230364868-a3c7588ed628?w=800&q=80",
    title: "Presentación tradicional",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1768243356319-490d4c19773c?w=800&q=80",
    title: "Presentación en vivo",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1662392228425-92ba6109dc8f?w=800&q=80",
    title: "Video del grupo",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1460556890169-1b7b050615ec?w=800&q=80",
    title: "Boda especial",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1585639557135-abe9aaf7c925?w=800&q=80",
    title: "Detalle de guitarra",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=800&q=80",
    title: "Video en serenata",
  },
];

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
