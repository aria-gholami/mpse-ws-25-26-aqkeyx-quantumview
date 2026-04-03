# 🐳 Docker Anleitung (Lokal Preview)
## 🛠️ Projekt neu bauen
Erstellt die Container mit frischem Build (ohne Cache):
```
docker compose -p 'quantum-view' build --no-cache
```

## 🚀 Projekt starten
Startet die Container im Hintergrund:
```
docker compose -p 'quantum-view' up -d
```
Um Cypress Logs zu sehen, sollte dieser Befehl ausgeführt werden:
```
docker compose -p 'quantum-view' up
```

## 🛑 Projekt stoppen
Stoppt und entfernt die laufenden Container:
```
docker compose -p 'quantum-view' down
```

## 🧭 Domain lokal verfügbar machen (Windows)
Damit https://quantumview.local in deinem Browser funktioniert, musst du auf Windows folgenden Eintrag zur hosts-Datei hinzufügen:

### 🔧 Schritt:
Öffne die Datei:
```
C:\Windows\System32\drivers\etc\hosts
```
Und füge ganz unten diese Zeile hinzu:
```
127.0.0.1 quantumview.local
```
> ⚠️ **Hinweis:** 🛡️ Du brauchst Administratorrechte, um die Datei zu bearbeiten.