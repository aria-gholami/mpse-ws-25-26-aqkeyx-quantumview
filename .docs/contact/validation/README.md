# Validierung

Die Kontaktanfragen werden auf mehreren Ebenen validiert, um Datenqualität und Sicherheit zu gewährleisten.

## Inhaltsverzeichnis
- [Frontend-Validierung](#frontend-validierung)
- [Backend-Validierung](#backend-validierung)
- [Fehlerbehandlung](#fehlerbehandlung)

## Frontend-Validierung
Bevor eine Anfrage an das Backend gesendet wird, prüft das Frontend (`app/screens/components/contact/form.tsx`) folgende Kriterien:
- **Pflichtfelder:** Name, E-Mail und Nachricht dürfen nicht leer sein.
- **E-Mail-Format:** Die eingegebene E-Mail-Adresse muss einem Standard-Regex entsprechen (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`).

## Backend-Validierung
Das CMS nimmt die Daten entgegen und führt weitere Prüfungen durch:
- **API-Key:** Jede Anfrage muss einen gültigen API-Key im Header (`api-key`) mitsenden. Dies wird durch den `ValidateApiKeySubscriber` in `cms/src/Security/` sichergestellt.
- **Datenintegrität:** Die Daten werden im `Contact`-Modell validiert. Bei fehlenden Pflichtfeldern wird eine `EmptyStringException` geworfen, was zu einem `400 Bad Request` führt.

## Fehlerbehandlung
- **Frontend:** Fehlermeldungen werden direkt unter den Eingabefeldern angezeigt.
- **Backend:** 
    - `401 Unauthorized` bei fehlendem/falschem API-Key.
    - `400 Bad Request` bei ungültigen Daten.
    - `500 Internal Server Error` bei technischen Problemen (z.B. Mail-Versand fehlgeschlagen).
