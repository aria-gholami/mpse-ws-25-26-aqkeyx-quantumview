# Troubleshooting

## Inhaltsverzeichnis
- [Fehler in der Konsole](#fehler-in-der-konsole)

## Fehler in der Konsole
Wenn im lokalen DDEV-Setup unerwartete Fehler in der Konsole auftreten (z. B. Verbindungsprobleme, nicht erreichbare Services oder veraltete Konfigurationen), liegt dies häufig an einem inkonsistenten Container-Status.

**Lösung:**
````
ddev restart
````

Durch den Neustart werden alle DDEV-Container sauber neu gestartet, Konfigurationsänderungen neu geladen und temporäre Fehlerzustände behoben.

In vielen Fällen reicht dieser Schritt aus, um lokale Entwicklungsprobleme schnell zu lösen.