# 🎬 Documentary Editor Portfolio

A premium cinematic portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

**Design direction:** Apple × Netflix × Johnny Harris — dark, minimal, editorial.

---

## 🚀 Complete Setup & Deployment Guide

### Step 1 — Prerequisites (Free)

Install these on your machine:
- [Node.js](https://nodejs.org) (v18 or higher — free)
- [Git](https://git-scm.com) (free)
- [VS Code](https://code.visualstudio.com) (free, recommended editor)
- [GitHub account](https://github.com) (free)
- [Vercel account](https://vercel.com) (free tier — sign up with GitHub)

---

### Step 2 — Get the Project Running Locally

```bash
# 1. Navigate to this folder (or clone from your GitHub repo)
cd portfolio

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser and go to:
# http://localhost:3000
```

You should see the full cinematic portfolio running locally.

---

### Step 3 — Customize Your Content

Before deploying, update these files with YOUR information:

#### 3a. Personal Details
Open each section component and replace placeholder text:

| File | What to Update |
|------|---------------|
| `src/app/layout.tsx` | Your name, domain, social URLs in metadata |
| `src/components/sections/HeroSection.tsx` | Stats (projects, views, experience) |
| `src/components/sections/ShowreelSection.tsx` | Your YouTube video ID |
| `src/components/sections/PortfolioSection.tsx` | Real project titles, descriptions, YouTube IDs |
| `src/components/sections/TestimonialsSection.tsx` | Real client testimonials |
| `src/components/sections/ContactSection.tsx` | Web3Forms key, social links, Calendly URL |
| `src/components/layout/Footer.tsx` | Your brand name |

#### 3b. Add Your Showreel (Free Hosting Options)

**Option A — YouTube Unlisted (Recommended)**
1. Upload your showreel to YouTube as "Unlisted"
2. Copy the video ID from the URL (e.g., `https://youtube.com/watch?v=ABC123xyz` → ID is `ABC123xyz`)
3. Paste it in `ShowreelSection.tsx`: `const YOUTUBE_VIDEO_ID = 'ABC123xyz'`

**Option B — Vimeo Free**
1. Upload to [Vimeo](https://vimeo.com) (free plan: 5GB storage, 500MB/week)
2. Set to "Hide from Vimeo" for portfolio-only viewing
3. Replace the YouTube iframe with:
```html
<iframe src="https://player.vimeo.com/video/YOUR_VIMEO_ID?autoplay=1&color=c8a96e&title=0&byline=0&portrait=0" />
```

**Option C — Cloudinary Free Tier**
- Free: 25GB storage, 25GB monthly bandwidth
- Upload via [cloudinary.com](https://cloudinary.com) dashboard
- Use the `.mp4` URL directly in a `<video>` tag

#### 3c. Setup Web3Forms (Free Contact Form)
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. They'll email you a free Access Key
4. In `ContactSection.tsx`, replace: `const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'`
5. Done — form submissions land in your inbox for free, forever

#### 3d. Add Project Thumbnails

Place thumbnail images in `/public/images/projects/`:
```
public/
  images/
    projects/
      india-china-border.jpg    (1600×900px recommended)
      why-countries-collapse.jpg
      indian-rupee.jpg
      oil-geopolitics.jpg
      trade-routes.jpg
    og-image.jpg                (1200×630px — for social sharing)
```

Then in `PortfolioSection.tsx`, update each project with:
```tsx
thumbnail: '/images/projects/india-china-border.jpg'
```

And use Next.js `<Image>` for optimization:
```tsx
import Image from 'next/image'
<Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
```

---

### Step 4 — Upload to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio build"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 5 — Deploy to Vercel (Free)

**Method A — Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click "Add New Project"
3. Import your portfolio GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Click "Deploy"
6. Your site is live at `https://your-repo-name.vercel.app` within 60 seconds ✅

**Method B — Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project folder
vercel

# Follow the prompts (all free)
```

**Auto-deploy on every push:**
After initial setup, every `git push` to `main` automatically redeploys your site on Vercel. Free forever on the Hobby plan.

---

### Step 6 — Custom Domain Options (Free)

**Option A — Keep Vercel Subdomain (100% Free)**
Your site is already live at: `https://your-project.vercel.app`
This is totally professional for a portfolio — many top editors use it.

**Option B — Free .is-a.dev Subdomain**
1. Go to [is-a.dev](https://is-a.dev)
2. Submit a PR with your subdomain config
3. Get `yourname.is-a.dev` for free

**Option C — Freenom (Free .tk/.ml/.ga domain)**
1. Go to [freenom.com](https://freenom.com)
2. Search for `yourname.tk` or `yourname.ml`
3. Register free (1 year, renewable)
4. In Vercel: Settings → Domains → Add your domain
5. Update DNS at Freenom to point to Vercel

**Option D — Buy a Cheap Domain (Recommended when ready)**
- `.com` domains are ~₹800–1200/year on [Namecheap](https://namecheap.com) or [Porkbun](https://porkbun.com)
- Add to Vercel in 2 minutes

---

### Step 7 — Add Free Analytics

**Google Analytics 4 (Most powerful)**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property → Get your Measurement ID (G-XXXXXXXXXX)
3. In `src/app/layout.tsx`, uncomment and update:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```

**Microsoft Clarity (Free heatmaps + session recordings)**
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create project → Get your Clarity ID
3. Uncomment the Clarity script in `layout.tsx` and add your ID

**Why use both:** GA4 for traffic data + Clarity to see exactly where visitors click, scroll, and drop off.

---

## 🎥 Video Optimization Guide

### Showreel Export Settings (Premiere Pro)

For YouTube unlisted upload:
```
Format: H.264
Preset: YouTube 1080p Full HD
Resolution: 1920×1080 (or 3840×2160 for 4K)
Frame Rate: 24fps (cinematic) or 30fps
Bitrate: VBR 2-pass
Target: 16 Mbps | Max: 24 Mbps
Audio: AAC, 320 kbps, Stereo
Color Space: Rec. 709
```

For Vimeo (better compression):
```
Format: H.264 or H.265
Resolution: 1920×1080
Bitrate: 10–20 Mbps (Vimeo recompresses beautifully)
Audio: AAC 320kbps
```

### Thumbnail Optimization

- **Size:** 1280×720px minimum (1920×1080 ideal)
- **Format:** JPG at 85% quality (balance of size/quality)
- **File size:** Under 2MB
- **Style:** High contrast, strong face/map composition, readable text at small sizes
- **Tools (free):** Canva, Adobe Express, Photoshop

### Video Preview Optimization

For project card hover previews (advanced feature):
1. Export a 5–10 second looping preview clip (no audio)
2. Format: WebM (smallest file) or MP4
3. Resolution: 640×360 (low res is fine for preview)
4. Upload to Cloudinary free tier
5. Use as `<video autoPlay muted loop playsInline>` in project cards

---

## 🗂️ Recommended Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          ← Project thumbnails (1600×900)
│   │   │   ├── india-china-border.jpg
│   │   │   ├── why-countries-collapse.jpg
│   │   │   └── ...
│   │   ├── og-image.jpg       ← Social share preview (1200×630)
│   │   └── avatar.jpg         ← Your photo for About section
│   ├── fonts/                 ← Self-hosted fonts (optional)
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← SEO, fonts, global scripts
│   │   ├── page.tsx           ← Main page assembly
│   │   └── globals.css        ← Global styles, animations
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ShowreelSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── WhySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── Marquee.tsx
│   │
│   └── lib/                   ← Future: utilities, hooks
│
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🔍 SEO Optimization Guide

### Target Keywords (update in layout.tsx)
- "documentary video editor for hire"
- "GeoLayers map animation editor"
- "Johnny Harris style video editor"
- "YouTube explainer video editor"
- "geopolitics documentary editor"
- "cinematic video editor India"

### On-Page SEO Checklist
- ✅ Title tag with keyword + brand
- ✅ Meta description (150–160 chars)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Schema.org Person structured data
- ✅ Semantic HTML (h1, h2, section, nav)
- ✅ Alt text on all images
- ✅ Canonical URL set

### Submit to Google Search Console (Free)
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain property
3. Verify ownership (add a meta tag to `layout.tsx`)
4. Submit your sitemap: `https://yourdomain.vercel.app/sitemap.xml`

**Auto-generate sitemap** — add to `next.config.js`:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://yourdomain.vercel.app',
  generateRobotsTxt: true,
}
```

---

## 📱 Mobile Optimization Notes

The portfolio is fully responsive. Key breakpoints:
- `< 768px` — Mobile: single column, hidden cursor, stacked hero
- `768–1024px` — Tablet: 2-column grids
- `> 1024px` — Desktop: full layout with stats panel

For mobile-specific improvements after launch:
1. Test on real iPhone/Android (Chrome DevTools isn't enough)
2. Check that video embeds don't autoplay (iOS blocks it without `muted playsInline`)
3. Ensure touch targets are at least 44×44px
4. Run Lighthouse in Chrome DevTools → aim for 90+ on all metrics

---

## 🎯 Content Strategy — What to Showcase First

### Priority Order for Portfolio Projects:
1. **Your most viewed/viral edit** — social proof first
2. **Map animation showcase** — this is your rarest skill
3. **Sound design showcase** — create a "before/after" audio version
4. **Full documentary edit** — shows range
5. **Retention-optimized edit** — show CTR/retention stats if possible

### Showreel Structure (60–90 seconds ideal):
```
0:00–0:05  — Cinematic opening frame (map, title card)
0:05–0:15  — Best map animation sequence
0:15–0:30  — Motion graphics showcase (multiple cuts)
0:30–0:50  — Documentary storytelling excerpt
0:50–1:00  — Sound design moment (let audio breathe)
1:00–1:15  — Retention hook sequence (rapid cuts)
1:15–1:25  — Your name/contact CTA
```

### Attracting Clients Organically:
1. **Post process videos on Instagram** — "How I made this map animation" gets massive engagement from fellow creators
2. **Comment on YouTube editing forums** — SubredditS: r/youtubers, r/editors
3. **Tag creators in showcase posts** — "Inspired by @JohnnyHarris style" gets discovery
4. **Before/after reels** — Nothing converts better than transformation proof
5. **Add portfolio link to every email signature**

---

## 🔄 Updating the Portfolio Later

```bash
# Make changes in VS Code
# Then deploy:

git add .
git commit -m "Added new project: [project name]"
git push

# Vercel auto-deploys in ~30 seconds ✅
```

---

## 🆓 Complete Free Tech Stack Summary

| Purpose | Tool | Cost |
|---------|------|------|
| Framework | Next.js | Free |
| Styling | Tailwind CSS | Free |
| Animations | Framer Motion | Free |
| Hosting | Vercel Hobby | Free forever |
| Version control | GitHub | Free |
| Contact form | Web3Forms | Free (250/month) |
| Video hosting | YouTube Unlisted | Free |
| Backup video | Vimeo Free | Free (5GB) |
| CDN/images | Cloudinary | Free (25GB) |
| Analytics | Google Analytics 4 | Free |
| Heatmaps | Microsoft Clarity | Free |
| Domain option | Vercel subdomain | Free |
| Fonts | Google Fonts | Free |

**Total monthly cost: ₹0**

---

Built with ❤️ for documentary storytellers.
#   P o r t f o l i o  
 