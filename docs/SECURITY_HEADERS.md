# Security headers and asset caching

Code: `server/security-headers.js` (headers), `server/static-delivery.js` (static files), hooked in at the top of the request listener in `server.js`.
Tests: `test/nexus/security-headers-and-asset-caching.test.js`, `test/nexus/service-worker-shell.test.js`.

## What is set, on every response (pages, static files, API answers, 400/401/404/429/500)

| Header | Value | Why |
| --- | --- | --- |
| `X-Content-Type-Options` | `nosniff` | The browser must trust the declared content-type. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Other sites learn the origin, never a path or query. |
| `X-Frame-Options` | `SAMEORIGIN` | Nobody else can frame the app (clickjacking). Nothing in the repo embeds the app; the app itself only embeds YouTube players, which this does not affect. |
| `Content-Security-Policy` | `frame-ancestors 'self'` | Same rule for current browsers. This is the ONLY CSP directive; it restricts nothing the app loads. |
| `Strict-Transport-Security` | `max-age=31536000` | Only when the request arrived over HTTPS: `req.socket.encrypted`, or, when `AGRINEXUS_TRUST_PROXY=true`, `X-Forwarded-Proto: https` (first value) or Cloudflare's `CF-Visitor` scheme. Never `includeSubDomains`, never `preload`. |

API (`/api/`) and export (`/exports/`) answers also default to `Cache-Control: no-store` (a route that sets its own value still wins).

## Deliberately not set

* **Permissions-Policy on pages.** `send()` has long put `camera=(self), microphone=(self), geolocation=(self)` on API JSON answers, where it has no effect. A policy on the HTML document would matter, but the microphone / camera permission prompts (voice orb, WebRTC, maps, push) cannot be exercised in the headless checks used for this change, and the app's use of other features (clipboard, notifications, speech) is wide. Adding it is left until someone can test the prompts on real phones.
* **An enforced `Content-Security-Policy`.** It would break the app today (see inventory below).
* **`Content-Security-Policy-Report-Only`.** It is only useful with a report endpoint, and that means a new public write endpoint. Not added.
* **HSTS `includeSubDomains` / `preload`.** One-way doors; the owner decides.

## Moving to an enforced CSP later

Inventory taken from `public/*.html`, `public/app.js` and the other loaded scripts (read it as a starting list, then confirm with a Report-Only run):

* Inline scripts: only the `<script type="importmap">` in `index.html` (needs a hash or nonce). No `onclick=`-style attributes in any page.
* Inline styles: 2 `style="..."` attributes in `index.html`, and the app sets `element.style` / injects style text from JavaScript (`style-src` would need `'unsafe-inline'` or a refactor).
* Page scripts are same-origin files; one vendored module is served from `/vendor/livekit-client/` and one from `/vendor/nexus-openai-realtime-agent.bundle.mjs`.
* Origins named in the front end source (some are only links the user can open, some are loaded or fetched):
  * map tiles: `https://{s}.tile.openstreetmap.org`, `https://{s}.tile.openstreetmap.fr`, `https://services.arcgisonline.com` / `https://server.arcgisonline.com` (`img-src`)
  * images: `https://images.unsplash.com` (`img-src`); Wikimedia Commons media (`https://commons.wikimedia.org`, `img-src` / `media-src`)
  * video: `https://www.youtube.com`, `https://www.youtube-nocookie.com` (`frame-src`)
  * weather and geocoding: `https://api.open-meteo.com`, `https://geocoding-api.open-meteo.com` (`connect-src`, if fetched by the browser rather than the server; check)
  * links only (no CSP effect): `wa.me`, `open.spotify.com`, `music.apple.com`, `en.wikipedia.org`, `www.who.int`, `www.fao.org`, `www.cabi.org`, `www.kalro.org`, `www.health.go.ke`, `medlineplus.gov`, `plantwiseplusknowledgebank.org`, `open-meteo.com`, `www.openstreetmap.org`
  * realtime voice: the OpenAI realtime / WebRTC connection made by the vendored agents bundle (`connect-src` for the OpenAI API host, plus `media-src`/`blob:` for audio); the exact hosts are not written in the page source and must be taken from a Report-Only run
  * also needed: `worker-src 'self'` (service worker), `manifest-src 'self'`, `connect-src 'self'` (API, Server-Sent/WebSocket on the same host)
* Steps: (1) add a report endpoint with strict size limits and rate limiting; (2) ship `Content-Security-Policy-Report-Only` with the list above; (3) read the reports for a week of real traffic; (4) replace the importmap/inline needs with a nonce or hash; (5) enforce.

## Asset caching rules (see the header comment of `server/static-delivery.js`)

* `index.html`, every other `.html` page and `sw.js`: `no-store`.
* `.js` / `.mjs` / `.css`: strong content ETag + `Cache-Control: no-cache` (the browser keeps a copy but asks first; unchanged = 304, no body).
* `index.html` is rewritten on the way out so every local script, stylesheet and the manifest is named `?v=<first 12 hex of the sha-256 of its bytes>`. Those exact URLs are `public, max-age=31536000, immutable`, only when the hash in the URL equals the hash of the bytes this process serves. Any other `?v=` value is answered with `no-cache`.
* `app.js` no longer contains the release id; the page carries it in `<meta name="agrinexus-release">`, which is why `app.js` keeps its bytes (and URL) from one release to the next.
* Everything else (images, json): `public, max-age=3600` as before, with an ETag.
* Cloudflare compresses in front of the app. It makes strong ETags weak when it does; `If-None-Match` is compared weakly, `Vary: Accept-Encoding` is set.
