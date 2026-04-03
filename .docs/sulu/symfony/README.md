# 📘 Architekturhinweis – Sulu & Symfony

## Inhaltsverzeichnis
- [🧩 Sulu basiert auf Symfony](#-sulu-basiert-auf-symfony)
- [🔎 Wo finde ich die richtige Dokumentation?](#-wo-finde-ich-die-richtige-dokumentation)
- [⚙️ services.yaml](#-servicesyaml)
- [🛣 routes.yaml](#-routesyaml)
- [📡 EventSubscriberInterface](#-eventsubscriberinterface)

## 🧩 Sulu basiert auf Symfony
Dieses Projekt verwendet **Sulu CMS**, welches technisch vollständig auf den Komponenten von **Symfony** aufbaut.

Das bedeutet:
- Service-Container basiert auf Symfony Dependency Injection
- Routing basiert auf Symfony Routing
- Event-System basiert auf Symfony EventDispatcher
- Konfiguration erfolgt nach Symfony-Standards

👉 **Wichtig:**  
Viele zentrale Konzepte in Sulu sind **keine Sulu-spezifischen Features**, sondern stammen direkt aus Symfony.

---

## 🔎 Wo finde ich die richtige Dokumentation?
Wenn du mit folgenden Dateien oder Konzepten arbeitest, musst du in die **Symfony-Dokumentation** schauen – nicht in die Sulu-Doku.

---

## ⚙️ services.yaml
Definiert Services und Dependency Injection.
Typische Anwendungsfälle:
- Eigene Services registrieren
- Autowiring konfigurieren
- Tags setzen
- Parameter definieren

---

## 🛣 routes.yaml
Definiert Routen für Controller.
Typische Anwendungsfälle:
- Eigene Controller registrieren
- API-Endpunkte definieren
- HTTP-Methoden festlegen

---

## 📡 EventSubscriberInterface

Wenn du auf Events reagieren willst (z.B. Content speichern, veröffentlichen, etc.), nutzt du:

```php
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
