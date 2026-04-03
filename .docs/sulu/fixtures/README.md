# Sulu Fixtures (Landingpage + News)

Diese Doku beschreibt das aktuelle Verhalten von `LandingpageFixture`.

## Inhaltsverzeichnis
- [Was das Fixture anlegt](#was-das-fixture-anlegt)
- [Ablauf](#ablauf)
- [Fixture ausführen](#fixture-ausführen)
- [Datei](#datei)

## Was das Fixture anlegt
- Seite `Landingpage` unter URL `/landingpage` mit Template `homepage`.
- Drei `newsItems` auf der Landingpage in `en` und `de`.

## Ablauf
- Das Fixture sucht zuerst die bestehende Root-Seite (`parentId = null`).
- Seite wird erzeugt.
- Danach werden Inhalte für `en` und `de` gesetzt und jeweils publiziert.
- Verwendet wird der MessageBus mit:
    - `CreatePageMessage`
    - `ApplyWorkflowTransitionPageMessage`

## Fixture ausführen
Im CMS-Verzeichnis:

```bash
cd cms
php bin/console doctrine:fixtures:load -n
```

## Datei
- `cms/src/DataFixtures/LandingpageFixture.php`
