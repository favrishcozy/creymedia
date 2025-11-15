# MediaSite — Hybrid Live Streaming (YouTube) README

> **Goal:** A production-ready plan and README for a media-driven website that uses **YouTube Live** as the streaming backend (free), a custom branded player (Video.js), dynamic video library, auto-updating news, social integrations, and an Admin UI. The app is built with **React + Vite** for frontend, serverless functions for secure API calls, and **Supabase** (or Firebase) for auth and database.

---

## Table of Contents

1. Overview
2. Features
3. Tech stack
4. Project structure
5. Pages & Components (frontend)
6. Backend / Serverless functions
7. Authentication flow
8. Database schema
9. YouTube & News APIs
10. Admin UI & content management
11. Environment variables (.env)
12. Development setup
13. Deployment (Vercel + Supabase)
14. Security & best practices
15. Maintenance & scaling notes
16. FAQ

---

## 1. Overview

This repository contains a starter plan and file structure for a website that:

* Streams live sessions using **YouTube Live** embedded into a custom player.
* Displays a searchable **Video Library** of past streams pulled from YouTube Data API.
* Shows **News/Articles** from trusted sources (NewsAPI or RSS feeds).
* Integrates **YouTube trailers**, social media post links, and direct links to posts.
* Provides an **Admin UI** to update site configuration and featured items without redeploying.
* Uses free tiers where possible (YouTube / Vercel / Supabase free tier) to remain cost-efficient.

---

## 2. Features

* Branded Video player (Video.js + videojs-youtube plugin)
* Home, News, Videos, About, Contact, Admin, Livestream Guide pages
* Dynamic "Latest Trailers" section (YouTube API)
* News feed (NewsAPI or RSS parsing serverless endpoint)
* Admin-managed site configuration (live video ID, featured items)
* Auth (Supabase email/password + OAuth providers)
* Serverless functions to mediate API requests (protect API keys)

---

## 3. Tech stack

**Frontend**

* React + Vite
* React Router
* Tailwind CSS
* Video.js + videojs-youtube
* hls.js (if you later support HLS)
* axios or fetch

**Backend / Services**

* Supabase (Auth + Postgres DB + Storage) *or* Firebase (Auth + Firestore)
* Vercel serverless functions (for API proxy)

**APIs**

* YouTube Data API v3 (channel uploads, live video details)
* NewsAPI.org or custom RSS sources
* Optional: Social media oEmbed endpoints (for embedding posts)

**Deployment**

* Vercel (frontend + serverless functions)
* Supabase hosted DB

---

## 4. Project structure

```
/media-site
├─ .env.local            # local environment variables
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ /public
│   └─ favicon, manifest
└─ /src
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ /pages
   │  ├─ Home.jsx
   │  ├─ Videos.jsx
   │  ├─ News.jsx
   │  ├─ About.jsx
   │  ├─ Contact.jsx
   │  ├─ Admin.jsx
   │  └─ LivestreamGuide.jsx
   ├─ /components
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ VideoPlayer.jsx       # Video.js wrapper + youtube plugin
   │  ├─ VideoCard.jsx
   │  ├─ NewsCard.jsx
   │  └─ AdminControls.jsx
   ├─ /lib
   │  ├─ youtube.js           # helper to call YouTube endpoints via serverless
   │  ├─ news.js              # news fetch helpers
   │  └─ supabaseClient.js
   └─ /api                    # serverless functions for Vercel
      ├─ youtube-proxy.js     # fetches youtube api with API key
      └─ news-proxy.js        # fetches news or rss
```

---

## 5. Pages & Components (frontend)

**Home** — Hero with Live Player, Latest Trailers (from YouTube), Quick News highlights, CTA to Videos and Admin (for owners).

**Videos** — Grid of video cards (title, thumbnail, publish date). Search, filter by playlist, pagination.

**News** — List of headlines with summary, source and date. Filters by category.

**About** — Static content about the org.

**Contact** — Simple form (name, email, message) — submits to Supabase function or Netlify/Vercel function that emails owner.

**Admin** — Protected route. Features:

* Update `liveVideoId` (current live YouTube video id)
* Feature/unfeature videos or news
* Manage site text content (home hero), social links
* View basic analytics (views from client, or Supabase logs)

**LivestreamGuide** — Owner instruction page + downloadable PDF (you already generated one).

**Key Components**

* `VideoPlayer.jsx` — Video.js wrapper that accepts `videoId` prop. Uses `videojs-youtube` tech and uses `modestbranding` options.
* `VideoCard.jsx` — Thumbnail + click to open video modal or link to watch page.
* `NewsCard.jsx` — News snippet.

---

## 6. Backend / Serverless functions

Use Vercel serverless functions for API proxying to hide API keys and to implement any small backend logic.

Example functions:

* `/api/youtube?channelId=...&maxResults=6` — calls YouTube Data API using `YOUTUBE_API_KEY` stored in Vercel environment, returns JSON to client.
* `/api/news?country=ng` — calls NewsAPI or fetches aggregated RSS feeds, returns normalized feed.
* `/api/contact` — receives contact form POST and forwards to owner email (via SendGrid or Supabase function).

**Why proxy?** To keep API keys secret and to comply with usage limits, caching, and server-side filtering.

---

## 7. Authentication flow

Use Supabase Auth (can use Firebase similarly). Supabase gives email/password plus OAuth (Google, GitHub).

**Flow**

1. User clicks "Sign in" → Initiates Supabase auth (email link or OAuth).
2. Upon success, client receives JWT token that Supabase manages.
3. Admin routes are protected by checking `supabase.auth.user()` or context in frontend.
4. Serverless functions that require admin rights verify the JWT (send auth header to Supabase or use RLS policies).

**Admin Role**

* Create an `admins` table in Supabase and link by `user_id`. Or use a `role` field in `profiles` table.
* Protect admin API endpoints by checking if the `user_id` is in admins table (serverless function verifies token).

---

## 8. Database schema (Supabase)

**Tables (minimal)**

* `profiles` (id pk, email, display_name, avatar_url, created_at)
* `admins` (id pk, user_id fk -> profiles.id)
* `site_config` (key text pk, value json) — store `{"liveVideoId":"...", "featuredPlaylistId":"..."}`
* `featured_videos` (id, youtube_video_id, title, thumb, added_by, added_at)
* `news_items` (if you store curated news locally) (id, title, url, source, published_at, cached_at)

Use Supabase Storage for uploaded assets like logos.

---

## 9. YouTube & News APIs

**YouTube (serverless proxy)**

* Endpoint: `GET https://www.googleapis.com/youtube/v3/search` and `videos`
* Use `search` to get latest uploads, then `videos` for details/stats.
* For live detection, check `liveBroadcastContent` and `snippet.liveBroadcastContent`.

**NewsAPI / RSS**

* NewsAPI.org: `GET /v2/top-headlines?country=ng&apiKey=NEWS_API_KEY`
* If you prefer RSS: serverless function fetches specific trusted sources' RSS feeds and normalizes them.

---

## 10. Admin UI & content management

Options (low-cost):

* Build a React Admin page that writes to `site_config` and `featured_videos` in Supabase via client library.
* Or use **Google Sheets as CMS**: Owner edits sheet, deploy a serverless function to fetch sheet as JSON (requires Google API credentials).

**Recommended:** Supabase — owner can be granted rights and a simple Admin UI can manage content directly.

---

## 11. Environment variables (.env)

Create `.env.local` (do NOT commit to git). Example variables:

```
VITE_SUPABASE_URL=https://xyz.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY      # used by serverless only (set in Vercel env)
NEWS_API_KEY=YOUR_NEWS_API_KEY            # used by serverless only
SUPABASE_SERVICE_ROLE_KEY=...             # only for server-side if needed (never in client)
SENTRY_DSN=...                            # optional
VERCEL_URL=                                  # Vercel provides automatically
```

**Note:** Prefix client-side variables with `VITE_` so Vite exposes them. Serverless functions will use server env vars directly in Vercel settings.

---

## 12. Development setup

1. Clone repo

```bash
git clone git@github.com:yourorg/media-site.git
cd media-site
npm install
```

2. Setup Tailwind

```bash
npx tailwindcss init -p
# configure content paths in tailwind.config.js
```

3. Setup Supabase

* Create project on Supabase
* Run SQL schema migrations or create tables with the SQL provided in `/migrations` (not included here)
* Add `VITE_SUPABASE_URL` & `VITE_SUPABASE_ANON_KEY` to `.env.local`

4. Start dev server

```bash
npm run dev
```

5. Test serverless endpoints locally with `vercel dev` or `netlify dev`.

---

## 13. Deployment (Vercel + Supabase)

**Frontend**

* Push to GitHub
* Connect repo in Vercel
* Set build command: `npm run build`
* Output dir: `dist`
* Add environment variables in Vercel dashboard: `YOUTUBE_API_KEY`, `NEWS_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (server-only), `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (client)

**Serverless**

* Place functions in `/api` (Vercel functions) — they will be deployed automatically.
* Keep your keys in Vercel env and **never expose them in the frontend**.

**Supabase**

* Point your frontend to the Supabase URL/Anon key.
* Use service role key only server-side where needed for admin actions.

---

## 14. Security & best practices

* **Never** expose private API keys in the frontend. Use serverless proxies for YouTube and News API calls that require keys.
* Use HTTPS (Vercel gives it automatically).
* Use Supabase RLS (Row-level security) for sensitive tables and require JWT validation for server endpoints.
* Rate-limit serverless endpoints and cache responses (e.g., cache YouTube results for 1-5 minutes).
* Sanitize and validate contact form inputs.

---

## 15. Maintenance & scaling notes

* **Caching:** Cache YouTube and News responses server-side so you don't hit API limits.
* **CDN:** Vercel + Cloudflare will handle caching for static assets.
* **Analytics:** Use Google Analytics or Plausible to measure engagement.
* **Costs:** YouTube + Vercel + Supabase free tiers will be enough for small audiences. If you need to self-host later, expect bandwidth costs.

---

## 16. FAQ

**Q: Can I go live directly from the website without using YouTube?**
A: Yes — but that requires a self-hosted RTMP/HLS setup and significant bandwidth costs. This README targets the hybrid YouTube approach to keep costs low.

**Q: How do I rotate API keys or revoke access?**
A: Rotate keys in Vercel environment and update serverless config. For Supabase, rotate service keys in the Supabase dashboard.

---

## Appendix: Helpful code snippets

**YouTube serverless proxy (Vercel) — simplified**

```js
// /api/youtube-proxy.js
import fetch from 'node-fetch';
export default async function handler(req, res) {
  const { channelId, maxResults = 6 } = req.query;
  const key = process.env.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&key=${key}`;
  const r = await fetch(url);
  const data = await r.json();
  // Basic caching headers
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
  res.status(200).json(data);
}
```

**Client fetch (Vite app)**

```js
// src/lib/youtube.js
export async function fetchLatest(channelId) {
  const res = await fetch(`/api/youtube-proxy?channelId=${channelId}&maxResults=8`);
  return res.json();
}
```

---

src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   ├── SubscribeSection.jsx
│   └── ...
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── BlogPage.jsx
│   ├── ContactPage.jsx
│   └── LiveSessionPage.jsx
├── App.jsx
└── main.jsx