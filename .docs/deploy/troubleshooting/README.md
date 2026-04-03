# Troubleshooting

## Inhaltsverzeichnis
- [❌ Rate Limit (Docker Hub)](#-rate-limit-docker-hub)
- [❌ Deployment-Fehler](#-deployment-fehler)

## ❌ Rate Limit (Docker Hub)
### Problem
Beim Build, Pull oder Deployment von Docker-Images tritt ein Fehler aufgrund eines Rate Limits von Docker Hub auf. Docker Hub begrenzt die Anzahl der Image-Pulls pro Zeitfenster – insbesondere für nicht authentifizierte Nutzer.

### Ursache
Docker Hub setzt Pull-Limits abhängig vom Authentifizierungsstatus:

| Nutzer-Typ             | Pull-Limit                              |
| ---------------------- | --------------------------------------- |
| Nicht eingeloggt       | 100 Pulls / 6 Stunden / IP              |
| Eingeloggt (kostenlos) | 200 Pulls / 6 Stunden                   |
| Docker Pro / Team      | Deutlich höhere oder unbegrenzte Limits |

CI/CD-Pipelines (z. B. GitLab CI, GitHub Actions) erreichen dieses Limit besonders schnell, da sie häufig neue Runner und frische Pulls verwenden.

### ✅ Lösungsansätze
warten.... Das Rate Limit wird nach 6 Stunden automatisch zurückgesetzt.

## ❌ Deployment-Fehler
Beim Ausführen des Deployments ist ein Fehler aufgetreten. Der Ansible-Task „Run the bash script“ ist mit einem non-zero return code (rc=1) fehlgeschlagen.

### ✅ Lösungsansätze

#### 1. Melde dich im Server mit SSH an
#### 2. Führe folgenden Befehl aus
```
./home/ubuntu/quantumview/rollout-release.sh
```
#### 3. Starte die Pipeline erneut