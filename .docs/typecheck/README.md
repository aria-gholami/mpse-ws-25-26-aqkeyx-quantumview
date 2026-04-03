# Typecheck
Dieses Projekt verwendet TypeScript für die statische Typprüfung.

## Inhaltsverzeichnis
- [Ausführung](#ausführung)

## Ausführung
Du kannst den Typecheck über DDEV ausführen:

```bash
ddev typecheck
```

Dieser Befehl führt intern folgendes aus:
1. `react-router typegen` (Generiert Typen für das Routing)
2. `tsc` (TypeScript Compiler Prüfung)
