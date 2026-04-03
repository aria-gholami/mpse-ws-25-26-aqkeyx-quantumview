# Spam-Schutz

Um den Versand von Spam über das Kontaktformular zu verhindern, wird ein **Honeypot-Verfahren** eingesetzt.

## Inhaltsverzeichnis
- [Funktionsweise](#funktionsweise)
- [Implementierung](#implementierung)

## Funktionsweise
Im Kontaktformular ist ein Eingabefeld enthalten, das für menschliche Benutzer unsichtbar ist (per CSS ausgeblendet), aber von Bots und automatisierten Skripten häufig ausgefüllt wird.

- **Feldname:** `spam`
- **Logik:** Wenn dieses Feld beim Absenden des Formulars einen Wert enthält, wird die Anfrage sofort abgebrochen und keine E-Mail versendet.

## Implementierung
- **Frontend:** In `app/screens/components/contact/form.tsx` wird das Feld gerendert und in der `submitContactForm`-Funktion geprüft:
  ```typescript
  if (hasErrors || contactForm.honeypot) {
      return;
  }
  ```
- **Styling:** Das Feld wird über die CSS-Klasse `.honeypot` versteckt.

