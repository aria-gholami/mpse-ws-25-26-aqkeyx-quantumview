# Mailpit

## Inhaltsverzeichnis
- [Mailpit in ddev verwenden (lokale Entwicklung)](#mailpit-in-ddev-verwenden-lokale-entwicklung)

## Mailpit in ddev verwenden (lokale Entwicklung)
### Zweck von Mailpit
Mailpit fängt alle ausgehenden E-Mails in der lokalen ddev-Umgebung ab.
So kann geprüft werden:
- ob eine Mail überhaupt verschickt wurde
- welcher Inhalt versendet wurde (HTML & Text)
- welche Absender- und Empfängeradresse genutzt wurden

👉 **Es werden keine echten Mails verschickt.**

### Mailpit öffnen
In einer laufenden ddev-Umgebung erreichst du Mailpit über eine der folgenden URLs:
```
https://quantumview.ddev.site:8026/
```
Nach dem Öffnen siehst du das Mailpit-Webinterface mit einer Liste aller versendeten Mails.

