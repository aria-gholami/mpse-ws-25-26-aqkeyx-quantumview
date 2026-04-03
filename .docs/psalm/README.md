# PHP Psalm
Psalm ist ein statisches Analysetool für PHP, das hilft, Fehler im Code zu finden, noch bevor er ausgeführt wird.

## Inhaltsverzeichnis
- [Ausführung](#ausführung)
- [Zweck](#zweck)

## Ausführung
Du kannst Psalm über DDEV ausführen:

```bash
ddev psalm
```

Dieser Befehl führt intern folgendes im `cms/` Verzeichnis aus:
```bash
./bin/psalm --threads=4 --no-cache --show-info=true
```

## Zweck
- Findet potenzielle Bugs (z.B. Null-Pointer-Exceptions).
- Prüft die korrekte Verwendung von Typen in PHP.
- Hilft bei der Verbesserung der Codequalität im CMS-Bereich.
