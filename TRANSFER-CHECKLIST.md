# Vercel Project Transfer — Operator Checklist

Transferring the **Discren** Vercel project to a different Vercel account / team.
Do this from the Vercel dashboard while signed in — it cannot be scripted without
an owner token, and it is an irreversible ownership change, so verify the
destination account first.

---

## 0. Prerequisites (read this first)

Vercel enforces two hard rules. If either is unmet, the **Transfer** button will
not offer the destination:

- You must be an **Owner of the source team**.
- You must be a **member of the destination team** already.

A personal Vercel account is just a Hobby *team* under the hood. So the receiving
person must invite you to their team (or you invite them to yours) **before**
the transfer. You cannot push a project into another person's account directly.

> Vercel uses the terms "team" and "account" interchangeably for personal scopes.

---

## 1. Start the transfer

1. Open the project in the Vercel dashboard.
2. **Settings** → **General** → scroll to the bottom → **Transfer Project**.
3. Click **Transfer**, pick the destination team, confirm.

If the destination team has no valid payment method, Vercel requires one before
the transfer completes.

---

## 2. What moves automatically

- Project name, all builds, deployment history
- Git repository link (`https://github.com/shkdot/Discren`)
- Project-level **Environment Variables**
- Security settings, Cron Jobs, Preview Comments
- Web Analytics, Speed Insights, Function Region, Directory Listing setting

## 3. What does NOT move — you must redo these

| Item | Status for this project |
|---|---|
| Marketplace / Integrations | ✅ None installed — nothing to redo |
| Env vars inside `vercel.json` (`env` / `build.env`) | ✅ Not used — `vercel.json` only has `rewrites` |
| Usage / billing counters | ⚠️ Reset on transfer (expected) |
| Logs, monitoring data, Log Drains | ⚠️ Lost — export anything you need first |
| Vercel Blob, Secure Compute, Static IPs | ✅ Not used |

---

## 4. Project-specific gotchas

### 4a. Environment variables (must exist in the destination team)

This repo contains **no `.env` file** — only `.env.example` is committed. Every
environment variable therefore lives in the Vercel project settings and is the
only source of truth for production. Confirm all three survive the transfer:

| Variable | Purpose | Required? |
|---|---|---|
| `VITE_SITE_URL` | Canonical URL, Open Graph, JSON-LD schema | Recommended |
| `VITE_WEB3FORMS_ACCESS_KEY` | Contact form delivery to the DISCREN inbox | Required for the form |
| `VITE_FORM_ENDPOINT` | Fallback JSON form relay (Formspree/Getform) | Optional |

If `VITE_SITE_URL` is missing, `src/config/site.ts` falls back to
`https://discren.in`, which will silently mis-point canonical tags and schema
markup if the live domain differs.

### 4b. `index.html` contains hardcoded production URLs

These three tags are literal strings, **not** driven by environment variables:

- line 17 — `<meta property="og:url" content="https://discren.vercel.app/">`
- line 23 — `<meta property="og:image" content="https://discren.vercel.app/og-image.jpg">`
- line 32 — `<meta name="twitter:image" content="https://discren.vercel.app/og-image.jpg">`

`src/components/SEO.tsx` rewrites `og:url`, `og:image`, `og:title` and
`twitter:image` at runtime from `VITE_SITE_URL` (lines 78, 83, 94), so the
**browser and Google see the correct values**. The static `index.html` strings
are what non-JS link scrapers read — that is, Facebook, WhatsApp, X/Twitter,
LinkedIn and Slack previews. Those will show a broken or stale image if the
project's auto-generated URL changes on transfer.

After a transfer the auto-generated URL changes with the destination scope. If no
custom domain is attached, update these three lines at build time and redeploy.
Better: attach the real domain and set `VITE_SITE_URL` to match, then this
becomes moot for the scrapers that matter.

### 4c. Git connection

The project is linked to `github.com/shkdot/Discren`. The link transfers as-is,
but if the **GitHub repository** also changes owner, the connection breaks —
reconnect it in **Settings → Git** after the move.

### 4d. Domains

Domains are delegated automatically to the destination team. Note that a
**subdomain** (`blog.example.com`) is delegated while the **root domain**
(`example.com`) stays on the original scope, which remains the primary owner and
keeps getting billed. If you move a domain purchased through Vercel, the new team
becomes the billed owner.

---

## 5. Post-transfer verification

1. Open the new project URL — the SPA should render (the `vercel.json` rewrite
   sends every path to `/index.html`, so deep links like `/capabilities` may be
   tested directly).
2. Confirm env vars are present: **Settings → Environment Variables**.
3. Trigger a deployment and confirm the build uses `npm run build` with publish
   directory `dist` (Vite preset).
4. Submit the contact form once and confirm the enquiry lands in the inbox.
5. View page source and confirm `og:url` / `og:image` point at the live domain.
6. Confirm your own account still has the access level you expect, then remove
   any stale members from the old team.

---

## 6. Rollback

Transfers are not reversible from the UI in one click. To undo, transfer the
project back to the original team — which requires the same owner/member
conditions in reverse. Keep the original team intact until verification (step 5)
passes.