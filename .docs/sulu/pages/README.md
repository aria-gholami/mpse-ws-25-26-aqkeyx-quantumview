# Pages

Diese Datei definiert das Sulu-Template für die Startseite (Homepage).

## Inhaltsverzeichnis
- [Metadaten](#metadaten)
- [Eigenschaften](#eigenschaften)
- [Datei](#datei)

## Metadaten
- **Key**: `homepage`
- **View**: `pages/homepage`
- **Controller**: `Sulu\\Bundle\\HeadlessBundle\\Controller\\HeadlessWebsiteController::indexAction` (wichtig, um API-Schnittstelle bereitzustellen)
- **Cache**: `cacheLifetime` = 86400 (Sekunden)
- **Titel**: `Homepage` (en) / `Startseite` (de)

## Eigenschaften
- **title** (text_line, mandatory)
  - als Headline markiert (`headline=true`)
- **url** (resource_locator, mandatory)
  - mit `sulu.rlp` Tag
- **news** (Section)
  - **newsItems** (block)
    - `default-type`: `newsItem`
    - `minOccurs`: 0
    - `maxOccurs`: 10

### Block-Typ: newsItem
- **date** (date, mandatory)
- **category** (single_select, mandatory)
  - Werte: `Project`, `Publication`, `Teaching`
- **title** (text_line, mandatory)
- **description** (text_area, mandatory)
- **host** (text_line, mandatory)
- **image** (single_media_selection, optional, nur Typ `image`)
- **newsLink** (url, optional)

## Datei
- `cms/config/templates/pages/homepage.xml`
