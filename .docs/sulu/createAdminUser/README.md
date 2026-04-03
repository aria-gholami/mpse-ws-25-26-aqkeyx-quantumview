# Admin-User in Sulu erstellen

Diese Anleitung beschreibt, wie man in einem Sulu CMS Projekt einen Admin-Benutzer anlegt und ihm die passende Rolle (z. B. Administrator) zuweist.

## Inhaltsverzeichnis
- [Sulu Console verwenden](#sulu-console-verwenden)

## Sulu Console verwenden
Sulu bringt eigene Symfony-Commands mit, um Benutzer und Rollen zu verwalten.

### Admin-User erstellen
Führe folgenden Befehl im Projektverzeichnis (lokal, muss man den Command im cms Ordner ausführen im DDEV Container) aus:
```
php bin/console sulu:security:user:create
```
Du wirst anschließend interaktiv nach folgenden Daten gefragt:
- Benutzername
- Vorname
- Nachname
- E-Mail-Adresse
- Locale (z. B. de oder en)
- Rolle (z.B. User)
- Passwort

### Admin-Rolle erstellen (falls noch nicht vorhanden)
Standardmäßig existiert häufig bereits eine Administrator-Rolle. Falls nicht, kannst du sie wie folgt anlegen:
```
php bin/console sulu:security:role:create
```
Interaktive Abfrage:
- Rollenname (z. B. Administrator)
- System (meist Sulu)