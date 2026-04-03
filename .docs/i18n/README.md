# i18n

Die Internationalisierung ist bewusst leichtgewichtig: Texte liegen pro Sprache als strukturierte Objekte vor, und Komponenten greifen nur auf die jeweils benötigten Teilbereiche zu.

## Inhaltsverzeichnis
- [Konzept](concept/README.md)
- [Bausteine](#bausteine)

## Bausteine
- `app/i18n/translations.ts`: UI-Texte (z. B. Header, Formulare, Buttons, Fehler)
- `app/i18n/qkdInfoTexts.ts`: Schritttexte für den QKD-Flow (beginner/expert)
- `app/i18n/startTexts.ts`: Einstiegstexte für die Startansicht
- `app/i18n/useTranslations.ts`: Hook für den Zugriff auf Texte und Nebenwirkungen beim Sprachwechsel
- `app/features/language/languageSlice.ts`: Redux-Slice für die aktuelle Sprache
- `app/features/language/state/Initial.ts`: Typdefinition und Default-Sprache
