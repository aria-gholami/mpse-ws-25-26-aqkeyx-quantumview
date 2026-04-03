# Stages

## Inhaltsverzeichnis
- [📦 Übersicht](#-übersicht)
- [🧹 1. prettier_check](#-1-prettier_check)
- [🐳 2. build_quantumview_image](#-2-build_quantumview_image)
- [🧱 3. build_cms_image](#-3-build_cms_image)
- [🧪 4. cypress_e2e_test](#-4-cypress_e2e_test)
- [🚀 5. deploy_website](#-5-deploy_website)
- [🏗 Technologiestack](#-technologiestack)
- [🔄 Pipeline Flow](#-pipeline-flow)

## 📦 Übersicht

Die Pipeline besteht aus folgenden Stages:

```yaml
stages:
  - prettier_check
  - build_quantumview_image
  - build_cms_image
  - cypress_e2e_test
  - deploy_website
````
Jede Stage wird nacheinander ausgeführt.

## 🧹 1. prettier_check
### Ziel
Überprüft die Code-Formatierung mit Prettier.

### Umgebung
- `node:24-alpine`

### Ablauf
````
npm ci
npm run prettier:check
````

### Beschreibung
- Installiert alle Abhängigkeiten mit npm ci
- Prüft den Code mit Prettier
- Pipeline schlägt fehl, wenn Formatierungsfehler vorhanden sind

## 🐳 2. build_quantumview_image
### Ziel
Erstellt und veröffentlicht das Haupt-Docker-Image von QuantumView.

### Umgebung
- `docker:latest` 
- `docker:dind`

### Ablauf
1. Version wird aus package.json gelesen
2. Login in GitLab Container Registry
3. Docker Build
4. Tagging mit:
   - `vX.X.X`
   - `latest`
5. Push beider Tags

### Versionsermittlung
```
VERSION=$(cat package.json | grep '"version":' | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/v\1/')
```

### Ergebnis
Image wird veröffentlicht unter:
- `$CI_REGISTRY_IMAGE:vX.X.X`
- `$CI_REGISTRY_IMAGE:latest`

## 🧱 3. build_cms_image
### Ziel
Erstellt und veröffentlicht das Docker-Image für das CMS.

### Besonderheit
- Build findet im `cms/` Verzeichnis statt
- Nutzt `Dockerfile.prod`

### Image Name
- `$CI_REGISTRY_IMAGE/cms`

### Ablauf
1. Version aus package.json
2. Docker Login
3. cd cms
4. Docker Build mit Dockerfile.prod
5. Tagging:
   - `vX.X.X`
   - `latest`
6. Push

## 🧪 4. cypress_e2e_test
### Ziel
Führt End-to-End-Tests mit Cypress aus.

### Umgebung
- `docker:latest` 
- `docker:dind`
- Docker Compose

### Ablauf
```
cp .env.preview .env.local
cd .docker
docker compose -p 'quantum-view' build --no-cache
docker compose -p 'quantum-view' up -d reverse-proxy wiremock websocketmock quantumview
docker compose -p 'quantum-view' run --rm cypress
```

### Cleanup
Nach dem Testlauf:
````
docker compose logs
docker compose down -v
````

### Artifacts
Werden immer gespeichert (auch bei Fehlern):
- `.cypress/screenshots/`
- `.cypress/videos/`

Speicherdauer: 7 Tage

## 🚀 5. deploy_website
### Ziel
Deployment auf den Server via Ansible.

### Umgebung
- `alpine/ansible:latest`

### Vorbereitung
- Installation von OpenSSH
- Start des SSH-Agent
- Dekodieren des Base64 Private Keys
- Hinzufügen des SSH Keys
- `echo "$SSH_PRIVATE_KEY" | base64 -d > ~/.ssh/id_ed25519`

### Deployment-Befehl
````
ansible-playbook -i .deploy/hosts.ini --become --become-user=root .deploy/server.yaml \
-e "ci_job_token=$CI_JOB_TOKEN ci_registry=$CI_REGISTRY" \
-e "mysql_root_password=$MYSQL_ROOT_PASSWORD" \
-e "mysql_quantumview_password=$MYSQL_QUANTUMVIEW_PASSWORD"
````

### Deployment-Regeln
Deployment wird nur ausgeführt wenn:
- `Branch == main` und 
- folgende Regel gilt:

```
rules:
- if: '$CI_COMMIT_BRANCH == "main"'
  when: on_success
- when: never
```

### 🔐 Benötigte CI/CD Variablen
Folgende Variablen müssen in GitLab gesetzt sein:

| Variable                     | Beschreibung                     |
|------------------------------|----------------------------------|
| `CI_JOB_TOKEN`               | Automatisch von GitLab           |
| `CI_REGISTRY`                | Automatisch von GitLab           |
| `SSH_PRIVATE_KEY`            | Base64-kodierter SSH Private Key |
| `MYSQL_ROOT_PASSWORD`        | MySQL Root Passwort              |
| `MYSQL_QUANTUMVIEW_PASSWORD` | MySQL User Passwort              |

## 🏗 Technologiestack
- Node.js 24
- Docker & Docker-in-Docker
- Docker Compose
- Cypress
- Ansible
- GitLab CI/CD

## 🔄 Pipeline Flow
1. Code Push
2. Prettier Check
3. Docker Build (App)
4. Docker Build (CMS)
5. Cypress E2E Tests
6. Deployment (nur main)