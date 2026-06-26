import ru from "./ru";
import en from "./en";

const locales = { ru, en };

export type Locale = keyof typeof locales;
export type TranslationKey = string;

export function useTranslations(locale: Locale) {
  const t = locales[locale] || locales.ru;

  return function translate(key: string): string {
    const keys = key.split(".");
    let value: any = t;

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === "string" ? value : key;
  };
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en/")) return "en";
  return "ru";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ru" ? "en" : "ru";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "ru") return path;
  return `/en${path}`;
}
