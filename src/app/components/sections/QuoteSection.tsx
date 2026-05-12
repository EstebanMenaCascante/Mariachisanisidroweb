import { CheckCircle2, Send } from "lucide-react";
import type { Dispatch, FormEvent, SetStateAction } from "react";

import { SectionHeading } from "../common/SectionHeading";
import type { QuoteFormValues } from "../../types";
import type { SiteCopyKey } from "../../siteCopy";

type QuoteSectionProps = {
  t: (key: SiteCopyKey) => string;
  form: QuoteFormValues;
  setForm: Dispatch<SetStateAction<QuoteFormValues>>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  sent: boolean;
};

const inputClassName =
  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent";

export function QuoteSection({
  t,
  form,
  setForm,
  onSubmit,
  sent,
}: QuoteSectionProps) {
  return (
    <section
      id="cotizar"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("quote.title")}
          subtitle={t("quote.subtitle")}
        />
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.name")} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                className={inputClassName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.phone")} *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={(event) =>
                  setForm({ ...form, phone: event.target.value })
                }
                className={inputClassName}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("quote.date")} *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={(event) =>
                    setForm({ ...form, date: event.target.value })
                  }
                  className={inputClassName}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("quote.time")} *
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={form.time}
                    onChange={(event) =>
                      setForm({ ...form, time: event.target.value })
                    }
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("quote.ampm.label")} *
                  </label>
                  <select
                    name="ampm"
                    value={form.ampm}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        ampm: event.target.value as QuoteFormValues["ampm"],
                      })
                    }
                    className={inputClassName}
                  >
                    <option value="AM">{t("quote.ampm.am")}</option>
                    <option value="PM">{t("quote.ampm.pm")}</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.duration.label")} *
              </label>
              <select
                name="duration"
                value={form.duration}
                onChange={(event) =>
                  setForm({
                    ...form,
                    duration: event.target.value as QuoteFormValues["duration"],
                  })
                }
                className={inputClassName}
              >
                <option value="30min">{t("quote.duration.minutes30")}</option>
                <option value="1hour">{t("quote.duration.hours1")}</option>
                <option value="2hours">{t("quote.duration.hours2")}</option>
                <option value="3hours">{t("quote.duration.hours3")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.location")} *
              </label>
              <input
                type="text"
                name="location"
                required
                value={form.location}
                onChange={(event) =>
                  setForm({ ...form, location: event.target.value })
                }
                className={inputClassName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.eventType.label")} *
              </label>
              <select
                name="eventType"
                value={form.eventType}
                onChange={(event) =>
                  setForm({
                    ...form,
                    eventType: event.target
                      .value as QuoteFormValues["eventType"],
                  })
                }
                className={inputClassName}
              >
                {[
                  "serenade",
                  "wedding",
                  "birthday",
                  "proposal",
                  "party",
                  "corporate",
                  "other",
                ].map((eventType) => (
                  <option key={eventType} value={eventType}>
                    {t(`quote.eventType.${eventType}` as SiteCopyKey)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("quote.comments")}
              </label>
              <textarea
                name="comments"
                rows={4}
                value={form.comments}
                onChange={(event) =>
                  setForm({ ...form, comments: event.target.value })
                }
                className={`${inputClassName} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#FFD700] text-black font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{t("quote.sent")}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t("quote.submit")}</span>
                </>
              )}
            </button>
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2 text-center">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              {t("quote.trust")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
