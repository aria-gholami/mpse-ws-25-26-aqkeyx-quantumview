# Dokumentation
Alle Projektinformationen findest du in `.docs/`.

## Inhaltsverzeichnis
- [Einführung](.docs/introduction/README.md)
- [DDEV](.docs/ddev/README.md)
- [Sulu](.docs/sulu/README.md)
- [Redux](.docs/redux/README.md)
- [React Flow](.docs/reactFlow/README.md)
- [i18n](.docs/i18n/README.md)
- [WireMock](.docs/wiremock/README.md)
- [Cypress](.docs/cypress/README.md)
- [Prettier](.docs/prettier/README.md)
- [React Typecheck](.docs/typecheck/README.md)
- [PHPCS](.docs/phpcs/README.md)
- [PHP Psalm](.docs/psalm/README.md)
- [Deployment](.docs/deploy/README.md)
- [Hybridize Key Service Form](.docs/hybridizeKeyServiceForm/README.md)
- [Kontakt](.docs/contact/README.md)
- [News](.docs/news/README.md)
- [Reverse Proxy](.docs/reverseProxy/README.md)
- [FrankenPHP](.docs/frankenphp/README.md)

## 🚀 Erste Schritte
Wenn du das Projekt zum ersten Mal einrichtest, beginne bitte mit der Reihenfolge vom Inhaltsverzeichnis.

## Hinweise für zukünftige Updates / Release
### Sulu Headless Bundle (Sulu 3.0)
Im Rahmen der Migration von Sulu 2.6 auf Sulu 3.0 war für das
`sulu/headless-bundle` zeitweise nur eine **RC-Version (Release Candidate)** verfügbar.

> ⚠️ Vor einem Produktiv-Release muss geprüft werden, ob eine stabile Version des Headless Bundles verfügbar ist.

#### Aktuelle Version prüfen
Verfügbare Versionen:
- https://github.com/sulu/SuluHeadlessBundle/tags

Installierte Version prüfen:
```
composer show sulu/headless-bundle
```

#### Update auf stabile Version durchführen
```
composer remove sulu/headless-bundle
composer require sulu/headless-bundle
```
Danach:
```
php bin/console cache:clear
```

Bitte zusätzlich prüfen:
- `composer.lock` wurde aktualisiert
- Keine RC-Version mehr in `composer.json`
- Funktionstest der Headless-Endpunkte

### PHP-Version
Während der Migration wurde PHP 8.5 getestet, jedoch traten Inkompatibilitäten auf.
Daher läuft dieses Projekt aktuell stabil mit:
> ✅ PHP 8.4

#### Vor Release prüfen
Vor Releasegang könnte man nochmal prüfen, ob man die PHP Version auf 8.5 aktualisieren kann.

Dazu muss man Folgendes anpassen:
- `.ddev/config.yaml`
- `cms/Dockerfile.prod`
- `cms/Dockerfile.dev`

Danach sollte noch ein Update der Pakete durchgeführt werden (in ddev shell):
```
composer update
```

## SMTP Server
Da ich nicht länger an dem Projekt beteiligt bin, habe ich meinen privaten SMTP-Server deaktiviert. In der Dokumentation ist jedoch beschrieben, wie kostenlos ein eigener SMTP-Server über ein Google-E-Mail-Konto eingerichtet werden kann.

Davon sind insbesondere folgende Funktionen betroffen:
- Passwort vergessen (CMS)
- Kontaktformular

## Impressum und Datenschutzerklärung
Im Footer der Webseite habe ich bereits Seiten für das Impressum und die Datenschutzerklärung angelegt. Allerdings ist noch zu klären, welche konkreten Angaben seitens der Hochschule im Impressum verpflichtend offengelegt werden müssen. Diese Informationen sollten abgestimmt und anschließend entsprechend im Code ergänzt werden.

Für die Datenschutzerklärung kann vermerkt werden, dass über die Webseite keine personenbezogenen Daten gespeichert werden und keine Tracking- oder Analysetools (z. B. Google Analytics) eingebunden sind. Da die Webseite keine entsprechenden Dienste nutzt, kann die Datenschutzerklärung bewusst einfach und übersichtlich gehalten werden.

Diese Punkte sollten vor dem Release der Webseite final geklärt und umgesetzt werden.

## SSL Zertifikat
Für das SSL-Zertifikat kann **Let’s Encrypt** verwendet werden. Dabei handelt es sich um einen kostenlosen Dienst zur Ausstellung von SSL-Zertifikaten. Voraussetzung ist jedoch, dass die Webseite unter einer gültigen Domain erreichbar ist. Die Einrichtung könnte daher von der nächsten Gruppe übernommen werden, sobald die entsprechende Domain bereitsteht.

In der Entwicklungsumgebung wird aktuell ein Self-Signed-Zertifikat eingesetzt. Daher ist davon auszugehen, dass bei der späteren Umstellung keine grundlegenden Probleme auftreten werden.

Das SSL-Zertifikat muss im Reverse Proxy konfiguriert werden. Die einzelnen Services benötigen kein eigenes Zertifikat. Gegebenenfalls sind im Anschluss noch Anpassungen an den entsprechenden Umgebungsvariablen (.env in cms und in root Ordner) vorzunehmen.