# Contact Mail Versand

## Inhaltsverzeichnis
- [Überblick](#überblick)
- [Email-Template](emailTemplate/README.md)
- [Mailpit](mailpit/README.md)
- [SMTP-Server](smtpServer/README.md)
- [Spam-Schutz](spamProtection/README.md)
- [Validierung](validation/README.md)
- [Wichtige Komponenten](#wichtige-komponenten)

## Überblick
Diese Anwendung stellt eine Contact-Mail-Schnittstelle bereit, über die Kontaktanfragen per E-Mail versendet werden.
Je nach Umgebung unterscheidet sich der Mail-Versand:
- **Lokal (ddev):** Es wird Mailpit verwendet, um E-Mails abzufangen und zu prüfen, ohne echte Mails zu versenden.
- **Produktion:** Der Versand erfolgt über einen Google Mail SMTP Server mit App-Passwort.

## Wichtige Komponenten
- **Mail-Schnittstelle**
    - Endpoint: `POST /api/v1/contact`
    - Läuft im `cms`-Container
    - `MAILER_DSN` ist in `.env` bzw. `.env.local` vorhanden
    - `SULU_ADMIN_EMAIL` ist in `.env` bzw. `.env.local` vorhanden
    - `API_KEY` ist in `.env` bzw. `.env.local` vorhanden
- **E-Mail-Template**
    - Pfad: `cms/templates/emails/contact.html.twig`
    - Hier kann Layout und Inhalt der Kontaktmail angepasst werden
- **API-Dokumentation**
    - Swagger/OpenAPI: `api/swagger.yaml`
