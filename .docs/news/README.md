# News Einstellungen

Diese README beschreibt die News-Konfiguration außerhalb des Sulu CMS. Alles CMS-nahe liegt in `cms/README.md`.

## Inhaltsverzeichnis
- [Überblick](#überblick)
- [Frontend Datenfluss](#frontend-datenfluss)
- [Konfiguration in der App](#konfiguration-in-der-app)
- [Mocking (Wiremock)](#mocking-wiremock)
- [CMS Bezug](cms/README.md)

## Überblick
Die News-Anzeige besteht aus zwei Teilen:
- **Liste auf der Startseite**: wird über die CMS-Landingpage geladen.
- **Detailansicht**: lädt den Artikel über den Link aus dem News-Item.

## Frontend Datenfluss
- **Liste**: `fetchCMSLandingpage` laedt `/landingpage.json` (oder `/de/landingpage.json`) und mappt `newsItems`.
- **Detail**: `fetchCMSNews` holt den JSON-Artikel von `newsLink`.
- **Navigation**: Klick auf ein News-Item mit `newsLink` führt nach `/news?details=<index>`.

## Konfiguration in der App
- **Routen**: `app/routes.ts` registriert `/news`.
- **Landingpage Fetch**: `app/features/cmsLandingpage/reducers/fetchCMSLandingpage.ts`
  - Basis-URL aus `VITE_CMS_BASE_URL` (siehe `.env` und `.env.dev`).
  - Lokalisierung via `/de/landingpage.json`.
- **News Detail Fetch**: `app/features/cmsNews/reducers/fetchCMSNews.ts`
  - Erwartet `content.title` und `content.article`.
- **Category Mapping**: `convertNewsCategory` in `app/features/cmsLandingpage/reducers/fetchCMSLandingpage.ts`
  - Übersetzt CMS-Labels für `de` (Project, Publication, Teaching).

## Mocking (Wiremock)
Für lokale Tests existiert ein Mock der Landingpage:
- **Mapping**: `.wiremock/mappings/cms-landingpage.json`
- **Response**: `.wiremock/__files/cms-landingpage-response.json`
- **Hinweis**: Der Mock liefert einen Beispiel-`newsItems` Block inkl. Bild und `newsLink`.
