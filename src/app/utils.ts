import type { QuoteFormValues, Song } from "./types";

export const REPERTOIRE_QUERY_KEYS = {
  search: "search",
  filter: "filter",
} as const;

export type RepertoireQueryState = {
  search: string;
  filter: string | null;
};

export function getRepertoireQueryState(
  searchParams: URLSearchParams,
): RepertoireQueryState {
  return {
    search: searchParams.get(REPERTOIRE_QUERY_KEYS.search) ?? "",
    filter: searchParams.get(REPERTOIRE_QUERY_KEYS.filter),
  };
}

export function createRepertoirePath(
  basePath: string,
  queryState: RepertoireQueryState,
) {
  const params = new URLSearchParams();

  if (queryState.search.trim()) {
    params.set(REPERTOIRE_QUERY_KEYS.search, queryState.search.trim());
  }

  if (queryState.filter) {
    params.set(REPERTOIRE_QUERY_KEYS.filter, queryState.filter);
  }

  const queryString = params.toString();
  const base = import.meta.env.BASE_URL || "/";
  const path = basePath.startsWith("/") ? basePath : `${base}${basePath}`;

  return queryString ? `${path}?${queryString}` : path;
}

export function createGalleryPath(path: string = "galeria") {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path}`;
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function buildQuoteMessage(form: QuoteFormValues) {
  return [
    "¡Hola! Me gustaría cotizar un evento:",
    "",
    `Nombre: ${form.name}`,
    `Teléfono: ${form.phone}`,
    `Fecha: ${form.date}`,
    `Hora: ${form.time} ${form.ampm}`,
    `Duración: ${form.duration}`,
    `Ubicación: ${form.location}`,
    `Tipo de evento: ${form.eventType}`,
    `Comentarios: ${form.comments}`,
  ].join("\n");
}

function removeAccents(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function filterSongs(
  songs: Song[],
  search: string,
  activeFilter: string | null,
) {
  const normalizedSearch = removeAccents(search.trim());

  return songs.filter((song) => {
    const songOccasions = Array.isArray(song.occasion)
      ? song.occasion
      : [song.occasion];
    const matchSearch =
      !normalizedSearch || removeAccents(song.title).includes(normalizedSearch);
    const matchFilter =
      !activeFilter ||
      songOccasions.includes(activeFilter) ||
      song.genre === activeFilter ||
      song.mood === activeFilter;

    return matchSearch && matchFilter;
  });
}
