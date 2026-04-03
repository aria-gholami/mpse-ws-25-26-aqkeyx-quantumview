# Security

Diese README beschreibt, wie der API Key im Projekt verwendet wird, worauf bei API-Aufrufen zu achten ist und wie die Validierung im CMS erfolgt.

## Inhaltsverzeichnis
- [API-Key Header](#api-key-header)
- [Worauf beim API-Aufruf achten](#worauf-beim-api-aufruf-achten)
- [Wo man den API Key einsehen kann](#wo-man-den-api-key-einsehen-kann)
- [Wie der API Key validiert wird](#wie-der-api-key-validiert-wird)

## API-Key Header
Für alle API-Endpunkte wird der Header `api-key` erwartet.

Beispiel:
```bash
curl -X GET "https://<cms-host>/landingpage.json" \
  -H "api-key: <DEIN_API_KEY>"
```

## Worauf beim API-Aufruf achten
- Header-Name muss exakt `api-key` sein.
- Der Key muss bei jedem Request auf CMS-Endpunkte mitgegeben werden.
- Bei fehlendem oder falschem Key liefert das Backend `401 Unauthorized` mit `{"message":"Unauthorized."}`.

## Wo man den API Key einsehen kann
Der Key ist in Frontend und CMS als Umgebungsvariable hinterlegt:

- Frontend: `.env` und `.env.dev` als `VITE_CMS_API_KEY`
- CMS: `cms/.env` und `cms/.env.dev` als `API_KEY`

Verknüpfung im Backend:
- `cms/config/services.yaml` mappt `API_KEY` auf den Parameter `api_key`.

Verwendung im Frontend (Beispiele):
- `app/features/cmsLandingpage/reducers/fetchCMSLandingpage.ts`
- `app/features/cmsNews/reducers/fetchCMSNews.ts`
- `app/features/contactForm/reducers/sendContactForm.ts`

## Wie der API Key validiert wird
Die Prüfung läuft zentral im Symfony/Sulu Backend:

1. `ValidateApiKeySubscriber` hört auf `kernel.request` und startet die Validierung.
2. `DefaultApiKeyValidator` erwartet den Header `api-key`.
3. Der Header-Wert wird per String-Vergleich mit dem konfigurierten `API_KEY` verglichen.
4. Ist der Header fehlend oder ungültig, wird eine `InvalidApiKeyException` ausgelöst.
5. Der Subscriber fängt die Exception und antwortet mit `401` + `{"message":"Unauthorized."}`.

Relevante Implementierung:
- `cms/src/Security/ValidateApiKeySubscriber.php`
- `cms/src/Security/DefaultApiKeyValidator.php`
- `cms/src/Security/Exception/InvalidApiKeyException.php`

Hinweis:
- Requests auf Pfade unter `/admin` sind von dieser API-Key-Prüfung ausgenommen.
