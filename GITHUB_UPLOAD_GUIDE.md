# GitHub Upload Guide

This folder is the GitHub-ready AgriNexus demo application.

## What To Upload

Upload the contents of `agrinexus_fullstack` as the repository root.

Recommended repository name:

```text
agrinexus-demo
```

## Do Not Upload

The `.gitignore` is configured to exclude:

- `.env` and local secret files
- `node_modules`
- logs
- local backups
- provider runtime event logs
- temporary server files

Before uploading, run:

```powershell
npm run github:check
```

## Local Demo

Install and run:

```powershell
npm install
npm start
```

Open:

```text
http://localhost:4173
```

Demo login:

```text
demo@agrinexus.org
Prototype2026!
```

## Recommended Partner Demo Path

GitHub stores the code. To give your partner a clickable web link, connect the GitHub repo to Render.

1. Create a new GitHub repository.
2. Upload or push this folder.
3. Go to Render.
4. Create a new Blueprint or Web Service from the GitHub repository.
5. Render can use `render.yaml`.
6. Wait for deployment.
7. Share the Render URL.

The Render blueprint is set for strict live-service readiness. It will deploy the web service, but `/status.html` will show live gaps until PostgreSQL, AI, and provider credentials are added in Render.

## Production Notes

For a true production deployment, configure these in the host environment:

- `DATABASE_URL`
- `SESSION_SECRET`
- `PASSWORD_PEPPER`
- `OPENAI_API_KEY` or `AI_PROVIDER=webhook`
- Live provider webhook URLs and API keys
- `AGRINEXUS_REQUIRE_LIVE_SERVICES=true`

Do not commit real credentials to GitHub.

## Demo Script

Use:

```text
AGRINEXUS_VIDEO_PRESENTATION_SCRIPT.md
```

That file contains the HD video/presentation walkthrough script.
