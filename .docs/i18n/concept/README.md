# Konzept

Die i18n-Schicht folgt einem einfachen Prinzip: Texte sind strukturierte Objekte pro Sprache, und Komponenten greifen über Hooks oder direkte Selektion auf genau die Teilbereiche zu, die sie brauchen.

## Inhaltsverzeichnis
- [Struktur der Texte](#struktur-der-texte)
- [Zugriff in Komponenten](#zugriff-in-komponenten)
- [Sprachumschaltung](#sprachumschaltung)
- [Neue Sprache hinzufügen](#neue-sprache-hinzufügen)

## Struktur der Texte
- `translations.ts` enthält UI-Texte mit einer verschachtelten Struktur (z. B. `header`, `hybridize`, `error`)
- `qkdInfoTexts.ts` liefert Schritttexte für den QKD-Ablauf (beginner/expert)
- `startTexts.ts` enthält Starttexte für verschiedene Erfahrungsstufen

## Zugriff in Komponenten
- `useTranslations()` liefert das Sprachobjekt aus `translations.ts`
- Für `qkdInfoTexts` und `startTexts` wird die aktuelle Sprache aus dem Redux-State gelesen und die passenden Texte selektiert

## Sprachumschaltung
- Die Sprache wird im Redux-Slice `features/language` gespeichert
- `LanguageSwitcher` dispatcht `updateLanguage()` und lässt den State umschalten
- `useTranslations()` reagiert auf Sprachwechsel und löst `resetNewsDetails()` sowie `resetLandingpageData()` aus

## Neue Sprache hinzufügen
1. `Language` in `app/features/language/state/Initial.ts` erweitern
2. Neue Sprach-Keys in `translations.ts`, `qkdInfoTexts.ts` und `startTexts.ts` anlegen
3. `ORDERED_LANGUAGES` und Labels im `app/base/languageSwitcher.tsx` erweitern
4. Optional: Default-Initialwert in `app/features/language/state/Initial.ts` anpassen
