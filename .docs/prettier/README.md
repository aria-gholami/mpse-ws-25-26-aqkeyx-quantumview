# Prettier

Prettier sorgt für einheitliches Formatieren im Frontend. Die Konfiguration liegt im Projekt-Root und wird über npm-Skripte sowie DDEV verwendet.

## Inhaltsverzeichnis
- [Konzept](#konzept)
- [Skripte](#skripte)
- [Konfiguration](#konfiguration)

## Konzept
Prettier standardisiert das Code-Layout, um Reviews zu vereinfachen und Style-Diskussionen zu vermeiden. Die wichtigsten Regeln:

- `singleQuote: true`
- `printWidth: 100`
- `tabWidth: 4`
- `trailingComma: all`
- `endOfLine: lf`

Der aktuelle Umfang der npm-Skripte beschränkt sich auf `app/*`. Wenn weitere Ordner formatiert werden sollen, muss das Script in `package.json` angepasst werden.

## Skripte
- `npm run prettier:check` prüft Dateien in `app/*`
- `npm run prettier:write` formatiert Dateien in `app/*`
- `ddev prettier` führt `npm run prettier:write` aus

## Konfiguration
Die Regeln sind in `.prettierrc` definiert und gelten für das gesamte Projekt.
