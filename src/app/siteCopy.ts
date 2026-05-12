import type { RepertoireFilterGroup } from "./types";

const siteCopy = {
  es: {
    nav: {
      inicio: "Inicio",
      nosotros: "Nosotros",
      integrantes: "Integrantes",
      repertorio: "Repertorio",
      galeria: "Galería",
      cotizar: "Cotizar",
    },
    hero: {
      headline: "Mariachi profesional para momentos inolvidables",
      subtitle: "Serenatas, bodas, cumpleaños y eventos especiales",
      cta: {
        quote: "Cotizar evento",
        whatsapp: "Escribir por WhatsApp",
      },
    },
    about: {
      title: "Nuestra Historia",
      description: [
        "Con más de 30 años de experiencia, Mariachi San Isidro se ha convertido en uno de los grupos más solicitados de Pérez Zeledón, Costa Rica.",
        "Nuestra pasión por la música tradicional mexicana y nuestro compromiso con la excelencia nos han llevado a ser parte de miles de eventos inolvidables.",
        "Cada presentación es única y especial, porque entendemos que tu momento merece la mejor música.",
      ].join(" "),
      values: {
        title: "Nuestros Valores",
        tradition: {
          label: "Tradición",
          description: "Respetamos y honramos la auténtica música de mariachi",
        },
        professionalism: {
          label: "Profesionalismo",
          description:
            "Puntualidad, presentación impecable y actitud profesional",
        },
        quality: {
          label: "Calidad",
          description: "Músicos experimentados con equipos de alta calidad",
        },
      },
    },
    members: {
      title: "Nuestros Integrantes",
      subtitle: "Un equipo de músicos profesionales con años de experiencia",
    },
    repertoire: {
      title: "Nuestro Repertorio",
      subtitle: "Más de 300 canciones para tu evento especial",
      search: "Buscar canción...",
      more: "Más",
      less: "Menos",
      viewAll: "Ver repertorio completo",
      backHome: "Volver al inicio",
      filter: {
        occasion: "Por Ocasión",
        genre: "Por Género",
        mood: "Por Ambiente",
      },
      occasion: {
        mama: "Para Mamá",
        papa: "Para Papá",
        party: "Fiestas",
        birthday: "Cumpleaños",
        wedding: "Propuestas, Aniversarios y mas...",
        love: "De amor",
        quinceanera: "15 años",
        apologize: "Perdón",
        deception: "Desamor, Despecho y Engaño",
        religious: "Religiosas",
        funerals: "Funerales",
      },
      genre: {
        romantic: "Románticas",
        rancheras: "Rancheras",
        cumbias: "Cumbias",
        corridos: "Corridos",
        boleros: "Boleros",
        sones: "Sones",
        vals: "Valses",
        dolidas: "Dolidas",
        religiosas: "Religiosas",
      },
      mood: {
        happy: "Alegre",
        sentimental: "Sentimental",
        party: "Fiesta",
      },
      listen: "Escuchar",
      empty: "No se encontraron canciones",
    },
    gallery: {
      title: "Galería",
      subtitle: "Momentos especiales capturados",
    },
    quote: {
      title: "Cotizar Evento",
      subtitle:
        "Cuéntanos sobre tu evento y te enviaremos una cotización personalizada",
      name: "Nombre",
      phone: "Teléfono / WhatsApp",
      date: "Fecha del evento",
      time: "Hora",
      ampm: {
        label: "AM/PM",
        am: "AM",
        pm: "PM",
      },
      duration: {
        label: "Duración",
        minutes30: "30 minutos",
        hours1: "1 hora",
        hours2: "2 horas",
        hours3: "3 horas",
      },
      location: "Ubicación",
      eventType: {
        label: "Tipo de evento",
        serenade: "Serenata",
        wedding: "Boda",
        birthday: "Cumpleaños",
        proposal: "Propuesta",
        party: "Fiesta",
        corporate: "Evento corporativo",
        other: "Otro",
      },
      comments: "Comentarios adicionales",
      submit: "Enviar cotización",
      sent: "¡Enviado!",
      trust:
        "Nos pondremos en contacto por WhatsApp para confirmar disponibilidad",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Listo para hacer tu evento inolvidable?",
      whatsapp: "Escríbenos por WhatsApp",
      call: "Llamar ahora",
      socials: "Síguenos en redes sociales",
    },
    footer: {
      tagline: '"La música es el alma de la fiesta"',
      location: "San José, Costa Rica",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      nosotros: "About Us",
      integrantes: "Band Members",
      repertorio: "Repertoire",
      galeria: "Gallery",
      cotizar: "Get Quote",
    },
    hero: {
      headline: "Professional Mariachi for unforgettable moments",
      subtitle: "Serenades, weddings, birthdays and special events",
      cta: {
        quote: "Get a Quote",
        whatsapp: "Message on WhatsApp",
      },
    },
    about: {
      title: "Our Story",
      description: [
        "With over 30 years of experience, Mariachi San Isidro has become one of the most requested groups in Pérez Zeledón, Costa Rica.",
        "Our passion for traditional Mexican music and our commitment to excellence have led us to be part of thousands of unforgettable events.",
        "Each performance is unique and special, because we understand that your moment deserves the best music.",
      ].join(" "),
      values: {
        title: "Our Values",
        tradition: {
          label: "Tradition",
          description: "We respect and honor authentic mariachi music",
        },
        professionalism: {
          label: "Professionalism",
          description:
            "Punctuality, impeccable presentation and professional attitude",
        },
        quality: {
          label: "Quality",
          description: "Experienced musicians with high-quality equipment",
        },
      },
    },
    members: {
      title: "Our Band Members",
      subtitle: "A team of professional musicians with years of experience",
    },
    repertoire: {
      title: "Our Repertoire",
      subtitle: "Over 300 songs for your special event",
      search: "Search song...",
      more: "More",
      less: "Less",
      viewAll: "View full repertoire",
      backHome: "Back to home",
      filter: {
        occasion: "By Occasion",
        genre: "By Genre",
        mood: "By Mood",
      },
      occasion: {
        mama: "For Mom",
        papa: "For Dad",
        party: "Parties",
        birthday: "Birthdays",
        wedding: "Proposals, anniversaries and more...",
        love: "Love songs",
        quinceanera: "15th birthdays",
        apologize: "Apology songs",
        deception: "Heartbreak, heartbreak and betrayal",
        religious: "Religious",
        funerals: "Funerals",
      },
      genre: {
        romantic: "Romantic",
        rancheras: "Rancheras",
        cumbias: "Cumbias",
        corridos: "Corridos",
        boleros: "Boleros",
        sones: "Sones",
        vals: "Waltzes",
        dolidas: "Heartbreak songs",
        religiosas: "Religious",
      },
      mood: {
        happy: "Happy",
        sentimental: "Sentimental",
        party: "Party",
      },
      listen: "Listen",
      empty: "No songs found",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Special moments captured",
    },
    quote: {
      title: "Get a Quote",
      subtitle:
        "Tell us about your event and we'll send you a personalized quote",
      name: "Name",
      phone: "Phone / WhatsApp",
      date: "Event date",
      time: "Time",
      ampm: {
        label: "AM/PM",
        am: "AM",
        pm: "PM",
      },
      duration: {
        label: "Duration",
        minutes30: "30 minutes",
        hours1: "1 hour",
        hours2: "2 hours",
        hours3: "3 hours",
      },
      location: "Location",
      eventType: {
        label: "Event type",
        serenade: "Serenade",
        wedding: "Wedding",
        birthday: "Birthday",
        proposal: "Proposal",
        party: "Party",
        corporate: "Corporate event",
        other: "Other",
      },
      comments: "Additional comments",
      submit: "Send Quote Request",
      sent: "Sent!",
      trust: "We will contact you via WhatsApp to confirm availability",
    },
    contact: {
      title: "Contact",
      subtitle: "Ready to make your event unforgettable?",
      whatsapp: "Message us on WhatsApp",
      call: "Call now",
      socials: "Follow us on social media",
    },
    footer: {
      tagline: '"Music is the soul of the party"',
      location: "San José, Costa Rica",
      rights: "All rights reserved",
    },
  },
} as const;

type TranslationNode = string | { readonly [key: string]: TranslationNode };

type DotPath<T, Prefix extends string = ""> = {
  [Key in keyof T & string]: T[Key] extends string
    ? `${Prefix}${Key}`
    : T[Key] extends Record<string, TranslationNode>
      ? DotPath<T[Key], `${Prefix}${Key}.`>
      : never;
}[keyof T & string];

export type SiteLanguage = keyof typeof siteCopy;
export type SiteCopyKey = DotPath<(typeof siteCopy)["es"]>;

const repertoireFilterConfig = [
  {
    labelKey: "repertoire.filter.occasion" as const,
    prefix: "repertoire.occasion." as const,
  },
  {
    labelKey: "repertoire.filter.genre" as const,
    prefix: "repertoire.genre." as const,
  },
  {
    labelKey: "repertoire.filter.mood" as const,
    prefix: "repertoire.mood." as const,
  },
] as const;

export function getRepertoireFilterGroups(
  language: SiteLanguage,
): RepertoireFilterGroup[] {
  const repertoire = siteCopy[language].repertoire;

  return repertoireFilterConfig.map((group) => {
    const sectionKey = group.prefix.split(".")[1] as
      | "occasion"
      | "genre"
      | "mood";
    const items = Object.keys(repertoire[sectionKey]) as string[];

    return {
      labelKey: group.labelKey,
      items,
      prefix: group.prefix,
    };
  });
}

export function createSiteCopyTranslator(language: SiteLanguage) {
  return (key: SiteCopyKey) => {
    const value = key
      .split(".")
      .reduce<
        TranslationNode | undefined
      >((current, part) => (current && typeof current === "object" ? current[part] : undefined), siteCopy[language]);

    return typeof value === "string" ? value : key;
  };
}
