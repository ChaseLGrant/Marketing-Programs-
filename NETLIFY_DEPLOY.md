# Deploying The Athlete Market landing page to Netlify

The landing page is a self-contained static site in [`landing/`](./landing).
`netlify.toml` publishes that folder with **no build step**, so the finely
tuned funnel (multi-step application, qualification off-ramp, ad attribution)
ships exactly as written.

## One-time setup

1. Push this branch (already done).
2. In Netlify: **Add new site → Import an existing project** and pick this repo.
3. Netlify reads `netlify.toml` automatically:
   - Publish directory: `landing`
   - Build command: _(none)_
4. Deploy. Your page is live at the Netlify URL (add a custom domain under
   **Domain settings** to serve it from theathletemarket.com or a subdomain).

## Leads (no backend needed)

Lead capture uses **Netlify Forms**. On deploy, Netlify detects the hidden
`athlete-market` form in `landing/index.html` and stores every submission.

- View leads: **Site → Forms → athlete-market**.
- Get notified: **Forms → Form notifications** → add email and/or Slack.
- Every funnel outcome is tagged in the `outcome` field:
  `qualified_application`, `disqualified_free_only`, `free_resource_signup`,
  `spam_suspected`. UTM / fbclid / gclid params are captured for ad reporting.

## Before you go live (recommended, not required)

- Add the founder photo: replace the placeholder `src` in the founder
  `.frame img` (search `ADD PHOTOGRAPH` in `landing/index.html`).
- Add real coach names/photos: edit the `COACHES` array in the page script
  (add `name:` and optional `photo:` to each entry).
- Add a Meta Pixel / GA tag in `<head>` if you're running paid traffic.
- Optionally set `CONFIG.fallbackEmail` / `fallbackPhone` in the script so a
  failed submission shows a manual contact path.
