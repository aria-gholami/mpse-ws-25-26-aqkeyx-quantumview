# PHPCS
PHPCS wird verwendet, um den Programmierstil (Coding Standards) im PHP-Code (`cms/`) zu prüfen und automatisch zu korrigieren.

## Inhaltsverzeichnis
- [Ausführung](#ausführung)
- [Zweck](#zweck)

## Ausführung
Du kannst PHPCS über DDEV ausführen, um Fehler automatisch zu beheben:

```bash
ddev phpcs
```

Dieser Befehl führt intern folgendes im `cms/` Verzeichnis aus:
```bash
./bin/phpcs fix
```

## Zweck
- Stellt sicher, dass der Code den definierten PSR-Standards entspricht.
- Hilft dabei, eine konsistente Codebasis beizubehalten.
