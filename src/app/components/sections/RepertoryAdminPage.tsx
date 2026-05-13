import {
  ArrowLeft,
  Copy,
  Download,
  Edit3,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { songs as publishedSongs } from "../../content";
import type { Song } from "../../types";
import {
  getRepertoireFilterGroups,
  createSiteCopyTranslator,
  type SiteCopyKey,
} from "../../siteCopy";

const REPERTORY_ADMIN_PASSWORD = "sanisidro26";

type SongFormState = {
  title: string;
  occasion: string[];
  genre: string;
  mood: string;
  youtubeUrl: string;
};

const emptyForm: SongFormState = {
  title: "",
  occasion: [],
  genre: "",
  mood: "",
  youtubeUrl: "",
};

const unique = (values: string[]) =>
  Array.from(new Set(values.filter(Boolean)));

const normalizeSong = (song: Song): Song => ({
  title: song.title.trim(),
  tags: unique(song.tags.map((tag) => tag.trim())),
  occasion: unique(song.occasion.map((occasion) => occasion.trim())),
  genre: song.genre.trim(),
  mood: song.mood.trim(),
  youtubeUrl: song.youtubeUrl.trim(),
});

const songFromForm = (form: SongFormState): Song => {
  const tags = unique(
    [...form.occasion, form.genre, form.mood].map((value) => value.trim()),
  );

  return {
    title: form.title.trim(),
    tags,
    occasion: unique(form.occasion.map((occasion) => occasion.trim())),
    genre: form.genre.trim(),
    mood: form.mood.trim(),
    youtubeUrl: form.youtubeUrl.trim(),
  };
};

const formFromSong = (song: Song): SongFormState => ({
  title: song.title,
  occasion: song.occasion,
  genre: song.genre,
  mood: song.mood,
  youtubeUrl: song.youtubeUrl,
});

const repertoireFilterGroups = getRepertoireFilterGroups("es");
const t = createSiteCopyTranslator("es");

const occasionOptions =
  repertoireFilterGroups.find(
    (group) => group.prefix === "repertoire.occasion.",
  )?.items ?? [];

const genreOptions =
  repertoireFilterGroups.find((group) => group.prefix === "repertoire.genre.")
    ?.items ?? [];

const moodOptions =
  repertoireFilterGroups.find((group) => group.prefix === "repertoire.mood.")
    ?.items ?? [];

const occasionLabels = Object.fromEntries(
  occasionOptions.map((key) => [
    key,
    t(`repertoire.occasion.${key}` as SiteCopyKey),
  ]),
);

const genreLabels = Object.fromEntries(
  genreOptions.map((key) => [key, t(`repertoire.genre.${key}` as SiteCopyKey)]),
);

const moodLabels = Object.fromEntries(
  moodOptions.map((key) => [key, t(`repertoire.mood.${key}` as SiteCopyKey)]),
);

export function RepertoryAdminPage() {
  const [catalog, setCatalog] = useState<Song[]>(() =>
    publishedSongs.map(normalizeSong),
  );
  const [form, setForm] = useState<SongFormState>(emptyForm);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [notice, setNotice] = useState<string>("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminPasswordValue, setAdminPasswordValue] = useState("");
  const [adminPasswordError, setAdminPasswordError] = useState("");

  const previewSong = useMemo(() => songFromForm(form), [form]);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingIndex(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.title.trim() || !form.youtubeUrl.trim()) {
      setNotice(
        "Completa al menos el nombre de la canción y el link de YouTube.",
      );
      return;
    }

    const nextSong = songFromForm(form);

    setCatalog((current) => {
      if (editingIndex === null) {
        return [...current, nextSong];
      }

      return current.map((song, index) =>
        index === editingIndex ? nextSong : song,
      );
    });

    setNotice(
      editingIndex === null
        ? "Canción agregada al borrador."
        : "Canción actualizada.",
    );
    resetForm();
  };

  const handleEdit = (index: number) => {
    setForm(formFromSong(catalog[index]));
    setEditingIndex(index);
    setNotice("Editando una canción existente.");
  };

  const handleDelete = (index: number) => {
    const song = catalog[index];

    if (!window.confirm(`¿Eliminar \"${song.title}\" del borrador?`)) {
      return;
    }

    setCatalog((current) =>
      current.filter((_, songIndex) => songIndex !== index),
    );
    setNotice("Canción eliminada del borrador.");

    setEditingIndex((current) => {
      if (current === null) {
        return null;
      }

      if (current === index) {
        setForm(emptyForm);
        return null;
      }

      return current > index ? current - 1 : current;
    });
  };

  const handleToggleOccasion = (occasionKey: string) => {
    setForm((current) => {
      const hasOccasion = current.occasion.includes(occasionKey);

      return {
        ...current,
        occasion: hasOccasion
          ? current.occasion.filter((value) => value !== occasionKey)
          : [...current.occasion, occasionKey],
      };
    });
  };

  const handleExport = async () => {
    const json = JSON.stringify(catalog, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "canciones.json";
    link.click();
    URL.revokeObjectURL(url);
    setNotice("JSON descargado.");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(JSON.stringify(catalog, null, 2));
    setNotice("JSON copiado al portapapeles.");
  };

  const handleAdminPasswordSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (adminPasswordValue.trim() !== REPERTORY_ADMIN_PASSWORD) {
      setAdminPasswordError("Contraseña incorrecta.");
      return;
    }

    setAdminUnlocked(true);
    setAdminPasswordValue("");
    setAdminPasswordError("");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {!adminUnlocked ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0c0c0c] p-6 shadow-2xl shadow-black/60">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Acceso privado
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-white">
                Ingresa la contraseña
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Esta página está protegida. Solo las personas con la clave
                pueden entrar.
              </p>

              <form
                className="mt-6 grid gap-4"
                onSubmit={handleAdminPasswordSubmit}
              >
                <label className="grid gap-2">
                  <span className="text-sm text-gray-300">Contraseña</span>
                  <input
                    type="password"
                    value={adminPasswordValue}
                    onChange={(event) => {
                      setAdminPasswordValue(event.target.value);
                      setAdminPasswordError("");
                    }}
                    autoFocus
                    className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="Escribe la contraseña"
                  />
                </label>

                {adminPasswordError ? (
                  <p className="text-sm text-red-300">{adminPasswordError}</p>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-[#e5bf4c]"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        ) : null}

        <div
          className={
            adminUnlocked ? "" : "pointer-events-none select-none blur-sm"
          }
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Vista privada
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {editingIndex === null
                  ? "Agregar repertorio"
                  : "Editar repertorio"}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-gray-300">
                Agrega varias canciones al borrador, edita o elimina las
                existentes y descarga el JSON listo para reemplazar el archivo
                del proyecto.
              </p>
            </div>

            <a
              href={import.meta.env.BASE_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al sitio
            </a>
          </div>

          {notice ? (
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {notice}
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {editingIndex === null
                      ? "Agregar canción"
                      : "Editar canción"}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {editingIndex === null
                      ? "Cada vez que presiones agregar, la canción se suma al borrador sin exportar todavía."
                      : "Guarda los cambios en la canción seleccionada y sigue editando el borrador."}
                  </p>
                </div>

                {editingIndex !== null ? (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10"
                  >
                    Cancelar edición
                  </button>
                ) : null}
              </div>

              <form
                className="grid gap-4 md:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-gray-300">
                    Nombre de la canción
                  </span>
                  <input
                    value={form.title}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        title: event.target.value,
                      }))
                    }
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="Ej. Cielito Lindo"
                  />
                </label>

                <div className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-gray-300">Ocasiones</span>
                  <div className="flex flex-wrap gap-2">
                    {occasionOptions.map((option) => {
                      const selected = form.occasion.includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleToggleOccasion(option)}
                          className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                            selected
                              ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                              : "border-white/20 bg-white/5 text-gray-200 hover:bg-white/10"
                          }`}
                        >
                          {occasionLabels[option]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm text-gray-300">Género</span>
                  <input
                    list="genre-options"
                    value={form.genre}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        genre: event.target.value,
                      }))
                    }
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="Ej. Románticas"
                  />
                  <datalist id="genre-options">
                    {genreOptions.map((option) => (
                      <option key={option} value={option}>
                        {genreLabels[option]}
                      </option>
                    ))}
                  </datalist>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-gray-300">Mood</span>
                  <input
                    list="mood-options"
                    value={form.mood}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        mood: event.target.value,
                      }))
                    }
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="Ej. Alegre"
                  />
                  <datalist id="mood-options">
                    {moodOptions.map((option) => (
                      <option key={option} value={option}>
                        {moodLabels[option]}
                      </option>
                    ))}
                  </datalist>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-gray-300">Link de YouTube</span>
                  <input
                    value={form.youtubeUrl}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        youtubeUrl: event.target.value,
                      }))
                    }
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="https://www.youtube.com/..."
                  />
                </label>

                <div className="md:col-span-2 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
                  <p className="text-sm font-medium text-[#FFD98A]">
                    Tags que se exportarán
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {previewSong.tags.length > 0 ? (
                      previewSong.tags.map((tag) => {
                        const label =
                          occasionLabels[tag] ||
                          genreLabels[tag] ||
                          moodLabels[tag] ||
                          tag;
                        return (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-100"
                          >
                            {label}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-sm text-gray-400">
                        Se calcularán a partir de ocasiones, género y mood.
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-[#e5bf4c]"
                  >
                    {editingIndex === null ? (
                      <Plus className="h-4 w-4" />
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    {editingIndex === null
                      ? "Agregar al borrador"
                      : "Guardar cambios"}
                  </button>

                  <button
                    type="button"
                    onClick={handleExport}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    <Download className="h-4 w-4" />
                    Descargar JSON
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    <Copy className="h-4 w-4" />
                    Copiar JSON
                  </button>
                </div>
              </form>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Canciones en el borrador
                  </h2>
                  <p className="text-sm text-gray-400">
                    {catalog.length} canciones listas para exportar.
                  </p>
                </div>
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200">
                  {catalog.length}
                </span>
              </div>

              <div className="space-y-3 max-h-[680px] overflow-auto pr-1">
                {catalog.map((song, index) => (
                  <article
                    key={`${song.title}-${index}`}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium text-white">{song.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                          {song.occasion
                            .map(
                              (occasion) =>
                                occasionLabels[occasion] || occasion,
                            )
                            .join(" · ")}{" "}
                          · {genreLabels[song.genre]} · {moodLabels[song.mood]}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(index)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-white transition-colors hover:bg-white/10"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(index)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-500/30 px-3 py-2 text-xs text-red-200 transition-colors hover:bg-red-500/10"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Eliminar
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {song.tags.map((tag) => {
                        const label =
                          occasionLabels[tag] ||
                          genreLabels[tag] ||
                          moodLabels[tag] ||
                          tag;
                        return (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200"
                          >
                            {label}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-block text-sm text-[#D4AF37] hover:text-[#FFD98A]"
                    >
                      Ver enlace de YouTube
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Vista previa del JSON
                  </h2>
                  <p className="text-sm text-gray-400">
                    Este es el contenido exacto que descargarás o copiarás al
                    archivo del proyecto.
                  </p>
                </div>
              </div>

              <textarea
                readOnly
                value={JSON.stringify(catalog, null, 2)}
                className="min-h-[360px] w-full rounded-3xl border border-white/10 bg-black/50 p-4 font-mono text-xs leading-6 text-gray-200 outline-none"
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
