# UrbanStack Website

> "We Build What the Future Runs On."

A complete, multi-page, fully responsive website for UrbanStack — a freelance tech studio.

## 📁 Project Structure

```
urbanstack/
├── index.html          # Home page
├── services.html       # Services page
├── portfolio.html      # Portfolio / Our Work
├── team.html           # Team overview
├── team-member-1.html  # Member 1 profile (progress bars layout)
├── team-member-2.html  # Member 2 profile (split-screen + donut charts)
├── team-member-3.html  # Member 3 profile (banner hero + keyword cloud)
├── pricing.html        # Pricing tiers + FAQ
├── blog.html           # Blog with featured article
├── contact.html        # Contact form
├── privacy.html        # Privacy Policy
├── terms.html          # Terms & Conditions
├── base.css            # Shared stylesheet
├── main.js             # Shared JavaScript
├── robots.txt          # SEO robots
├── sitemap.xml         # SEO sitemap
└── README.md           # This file
```

## 🎨 Changing Colors

Edit CSS custom properties in `base.css` at the top of the file:

```css
:root {
  --accent-1: #6C63FF;   /* Primary accent (electric indigo) */
  --accent-2: #00D9A3;   /* Secondary accent (neon teal) */
  --primary: #0F0F0F;    /* Background dark */
  --surface: #111827;    /* Card/surface dark */
}
```

## 👥 Editing Team Member Info

All team content is wrapped with HTML comments like:
```html
<!-- TEAM: Edit name below -->
<h2 class="member-name">Team Member One</h2>
```

Search for `<!-- TEAM:` across all HTML files to find editable content.

Key files to edit:
- `team.html` — Team overview cards
- `team-member-1.html` / `2` / `3` — Individual profiles
- `index.html` — Team teaser section

## 🚀 How to Deploy

### GitHub Pages
1. Push all files to a GitHub repository
2. Go to Settings → Pages → Source: main branch
3. Your site is live!

### Netlify
1. Drag and drop the folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done!

### Vercel
1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Framework Preset: Other
4. Deploy!

## 🛠 Tech Stack

- HTML5 + CSS3 + JavaScript (ES6+)
- GSAP (CDN) for animations
- Lucide Icons (CDN)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- No build tools required

## 📱 Responsive Breakpoints

- 480px (small mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1280px (large desktop)
