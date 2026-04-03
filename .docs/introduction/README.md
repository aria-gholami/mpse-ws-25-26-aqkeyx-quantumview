# Introduction

## Inhaltsverzeichnis
- [Motivation](#motivation)
- [Problemstellung](#problemstellung)
- [Zielsetzung](#zielsetzung)
- [Inspiration](#inspiration)
- [Literatur](#literatur)
- [Arbeitsumgebung & Tools](#arbeitsumgebung--tools)
- [Kontakt](#kontakt)

## Motivation

Quantencomputer bedrohen die Sicherheit unserer aktuellen IT-Infrastruktur, denn sie könnten die aktuell genutzte asymmetrische Kryptografie brechen.
Quantum Key Distribution (QKD) ermöglicht eine quantensichere Option für den Austausch symmetrischer Schlüssel zwischen zwei QKD-Modulen. Die Verbindung von mehreren QKD-Modulpaaren zu einem QKD Netzwerk ermöglicht die Kommunikation zwischen beliebigen Knotenpunkten des Netzwerks über beliebige Distanzen. Ein Knotenpunkt besteht dabei aus mindestens einem QKD-Modul und einem Key Management System (KMS), welches die QKD-Schlüssel hält und die Schlüsselweiterleitung im Netzwerk ermöglicht.

Da bei solch komplexen Systemen potentiell immer die Möglichkeit von Sicherheitslücken besteht, möchte man sich redundant absichern, indem neben der Schlüsseletablierung per QKD mindestens ein weiterer Schlüsselaustausch (oftmals mittels Post-Quanten Kryptografie (PQC)) durchgeführt und die Outputs gewinnbringend kombiniert werden. Dieses Vorgehen wird auch als hybrider Schlüsselaustausch bezeichnet. Voraussetzung für eine gelungene Hybridisierung ist, dass der resultierende Schlüssel sicher ist, solange mindestens eines der zugrundeliegenden Verfahren hält.

Die Open Source Anwendung _GoHybridizeKeyService_ ermöglicht die Hybridisierung eines Schlüssels. Dazu werden als Input Parameter der Schlüssel, dessen eindeutige ID sowie Informationen zum zugehörigen Kommunikationspartner übergeben. Als Ergebnis wird ein neuer, hybridisierter Schlüssel mit eigener ID retourniert, welcher für die Kommunikation mit dem angegebenen Kommunikationspartner genutzt werden kann.

## Problemstellung

QKD und QKDNs können sich zu einem Schlüsselfaktor hinsichtlich der Sicherheit zukünftiger IT-Systeme entwickeln. Für die Realisierung dieses Vorhabens sind Akzeptanz und Vertrauen unabdingbar. Zudem ist die Bereitschaft, in die Technologie zu investieren, von signifikanter Relevanz. Die Prozesse der Schlüsseletablierung via QKD bzw. QKDN sind jedoch vergleichsweise komplex und für Fachfremde schwer nachzuvollziehen, denn sie inkludieren eine Vielzahl unterschiedlicher Komponenten und verbinden, mehrere, ganz unterschiedliche Forschungsgebiete miteinander. Durch die zusätzliche Ebene der Hybridisierung mit PQC verstärkt sich das Problem. 

## Zielsetzung

Ziel des Projekts ist es, eine Webanwendung zu konzipieren und zu entwickeln, welche unterschiedlichen Nutzern die Funktionsweise von QKD/QKDNs erklärt, die Chancen deutlich macht, aber auch mögliche Risiken beleuchtet. Dabei soll eine geeignete Form mit visuell unterstützenden Elementen gewählt werden und zudem sollen die Nutzer (möglichst interaktiv) eingebuden werden. In einem weiteren Schritt könnte zudem der hybride Schlüsselaustausch behandelt werden

## Inspiration

#### Unterschiedliche Nutzergruppen

Für unterschiedliche Benutzergruppen könnten unterschiedliche Erklärungswege gewählt werden. Z.B. in der Form "Explain ist like I am ...":
* a five year old
* a software developer
* a cryptographer 

Ein gutes Beispiel ist die Erklärung bzgl. Rosenpass auf deren [Webseite](https://rosenpass.eu/#what-is-rosenpass).

#### Animationen

Animationen, mit oder ohne Interaktionen, erleichtern oftmals das Verständnis. Ein Beispiel für unterschiedliche kryptographische Technologien bietet die Webseite [CrypTool](https://www.cryptool.org/en/cto/).

#### Implementierungen von QKD Komponenten

* [Git Repo für KMS und KD Module](https://code.fbi.h-da.de/danet/costaquanta)
* [Git Repo für Schlüsselhybridisierung](https://code.fbi.h-da.de/hybridizekeyservice/gohybridizekeyservice)

## Literatur

#### [Henrich: „Ways for confidential and authenticated hop-by-hop key establishment in QKDN“ (2024)](https://dl.gi.de/server/api/core/bitstreams/6df0ea28-d32d-42cf-a647-ae93ceb58d9c/content)

In dieser Arbeit werden unter anderem QKDN Aufbau & Forwarding beschrieben. Außerdem finden sich Referenzen zu anderen QKDNs, die im Laufe der letzten entwickelt und aufgebaut wurden.

#### [ITU-T Recommendations Y.3800-Y.3999: Quantum Key Distribution Networks](https://www.itu.int/itu-t/recommendations/index.aspx?ser=Y)

Offizielle Empfehlungen der ITU zu diversen QKDN Themen wie Requirements, SDN und QoS Parameter. Wichtig sind insbesondere Y.3800, Y.3802 und Y.3803.

#### [Horoschenkoff et al.: „DemoQuanDT: A Carrier-Grade QKD Network“ (2025)](https://arxiv.org/abs/2503.21186)

## Arbeitsumgebung & Tools

* Frei verfügbarer Server:
    * IP:  141.100.237.231  User: ubuntu
* Programmiersprache und Server Software frei wählbar
    * (bei potentiellen Kosten vorherige Absprache notwendig)

## Kontakt

* Johanna Henrich (johanna.henrich@h-da.de)
* Fabian Seidl (fabian.seidl@h-da.de)