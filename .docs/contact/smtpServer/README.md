# SMTP Server

## Inhaltsverzeichnis
- [Google Mail SMTP (Produktion)](#google-mail-smtp-produktion)

## Google Mail SMTP (Produktion)

### App-Passwort erstellen und aktualisieren
Für den Mailversand über Google wird kein normales Google-Passwort, sondern ein App-Passwort benötigt.

#### Schritte
1. Im Google-Konto unter **Sicherheit** die **2-Faktor-Authentifizierung** aktivieren (falls noch nicht geschehen).
2. Den Bereich **App-Passwörter** öffnen (mit Suchleiste)
3. Neues App-Passwort erstellen
4. Das generierte Passwort kopieren.
5. In `cms/.env` die Variable `MAILER_DSN` aktualisieren:
    - neue Mailadresse
    - neues App-Passwort eintragen

### MAILER_DSN konfigurieren
Die Mail-Konfiguration erfolgt über der Variable `MAILER_DSN`.
Beispiel (Google SMTP):
```
MAILER_DSN=smtp://USERNAME:APP_PASSWORT@smtp.gmail.com:587
```
⚠️ Wichtig:
- `USERNAME` = vollständige Mailadresse vom Mailaccount
- `APP_PASSWORT` = **App-Passwort**, nicht das Google-Login-Passwort
- Änderungen an `.env` erfordern ggf. `.env.local` in CMS Projekt

### Empfängeradresse für E-Mails

Die Empfängeradresse für E-Mails wird zentral über folgende Umgebungsvariable definiert:
```
SULU_ADMIN_EMAIL=aria.gholami@stud.h-da.de
```
Diese kann in der `.env` ggf. `.env.local` vom CMS Projekt angepasst werden.

