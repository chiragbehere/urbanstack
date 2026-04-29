# UrbanStack — Full Website Build Prompt
> Paste this entire prompt into the Anthropic / Antigravity Claude Opus builder.

---

## SYSTEM CONTEXT

You are an expert full-stack web developer and UI/UX designer. Build a complete, multi-page, fully responsive, production-ready website for a freelance tech agency called **UrbanStack**. The website must be modern, visually striking, and technically impressive. Use the latest web standards and best practices.

---

## BRAND IDENTITY

- **Studio Name:** UrbanStack
- **Tagline:** *"We Build What the Future Runs On."*
- **Industry:** Freelance Technology Studio — Web Development, App Development, and Digital Solutions
- **Brand Personality:** Bold, modern, technical, trustworthy, creative, minimalist-forward
- **Target Clients:** Startups, SMEs, entrepreneurs, and enterprise teams

### Color Palette
- **Primary:** `#0F0F0F` (near-black)
- **Accent 1:** `#6C63FF` (electric indigo/violet)
- **Accent 2:** `#00D9A3` (neon teal/mint)
- **Surface:** `#111827` (dark card bg)
- **Light Surface:** `#F9FAFB`
- **Text Dark:** `#E5E7EB`
- **Text Light:** `#111827`

### Typography (Google Fonts — import both)
- **Headings:** `Space Grotesk` (700, 600)
- **Body/UI:** `Inter` (400, 500)
- **Code/Accent:** `JetBrains Mono` (for code snippets or tech labels)

### Design Language
- Dark-first design with a clean light mode toggle
- Glassmorphism cards (backdrop-filter blur, semi-transparent surfaces)
- Subtle gradient mesh background on hero sections
- Smooth scroll with scroll-triggered animations (Intersection Observer)
- Micro-interactions on hover (lift, glow, scale)
- Custom scrollbar styled to match brand
- No stock-looking design — every element must feel intentional and crafted

---

## TECH STACK

- **Framework:** Vanilla HTML5 + CSS3 + JavaScript (ES6+) — no build tools needed, single deployable
- **Animations:** GSAP (CDN) for entrance animations + CSS transitions for micro-interactions
- **Icons:** Lucide Icons (CDN) or inline SVGs
- **Fonts:** Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`)
- **Scroll effects:** Native Intersection Observer API
- **Forms:** HTML5 forms with client-side validation (no backend required — show a success state)
- **CSS Architecture:** CSS Custom Properties (variables) throughout, BEM-like class naming
- **Responsive:** Mobile-first, breakpoints at 480px / 768px / 1024px / 1280px
- **Performance:** Lazy-loaded images, deferred scripts, semantic HTML

> Output all pages as separate, fully self-contained `.html` files that share a common `style.css` and `main.js`. Alternatively, output as a single-file multi-page SPA using hash routing — whichever produces the most polished result.

---

## SITE STRUCTURE — ALL PAGES

Build the following **10 pages** with a persistent navigation and footer across all:

### NAV LINKS (Sticky, with mobile hamburger)
- Home
- Services
- Our Work (Portfolio)
- The Team
- Pricing
- Blog
- Contact
- [CTA Button] → "Start a Project"

---

## PAGE 1: HOME (`index.html`)

### Hero Section
- Full-viewport animated hero
- Animated gradient mesh / particle canvas background (subtle, not distracting)
- Main headline: **"We Build What the Future Runs On."**
- Sub-headline: *"UrbanStack is a boutique tech studio crafting high-performance web & mobile experiences, scalable digital products, and custom technological solutions."*
- Two CTA buttons: **[Start a Project]** (filled, accent color) + **[See Our Work]** (ghost)
- Animated counter row below CTA: `47+ Projects Delivered` | `3 Expert Builders` | `98% Client Satisfaction` | `4+ Years Combined Experience`
- Scroll indicator arrow with bounce animation

### Services Overview Strip
- Horizontal scrollable strip (desktop: grid, mobile: scroll) showing 4 service icons with one-liner each:
  - 🌐 Web Development
  - 📱 App Development
  - ⚙️ Tech Consulting
  - 🚀 Digital Products

### Why UrbanStack Section
- Left: bold heading + 3-4 bullet differentiators with custom icons
- Right: animated mockup or abstract 3D-style CSS illustration
- Differentiators: Speed of execution, Modern stack, End-to-end delivery, Startup-friendly pricing

### Featured Work (3 cards)
- Project cards with: cover image/mockup, project name, tech stack tags, short description, "View Case Study" link
- Hover: card lifts, overlay appears with CTA

### Testimonials
- Auto-rotating testimonial carousel (3 testimonials)
- Each: quote, client name, company, avatar initials circle

### Mini Team Teaser
- 3 circular avatar cards with name + role + "Meet [Name] →" link
- Links to individual team member pages

### CTA Banner
- Full-width dark section: "Ready to build something great?" + [Start a Project] button
- Background: accent gradient or animated gradient

### Footer (repeated on all pages)
- Logo + tagline
- Navigation links grouped: Company | Services | Legal
- Social links: GitHub, LinkedIn, Twitter/X, Instagram
- Bottom bar: "© 2025 UrbanStack. All rights reserved." | Privacy Policy | Terms & Conditions

---

## PAGE 2: SERVICES (`services.html`)

- Page hero: "What We Do" + short paragraph
- **6 detailed service cards** (each expandable or linked to anchor):
  1. **Web Development** — Custom websites, landing pages, SPAs, e-commerce, CMS integration. Tech: React, Next.js, Vue, Tailwind, Node.js
  2. **Mobile App Development** — iOS & Android native + cross-platform. Tech: React Native, Flutter, Swift, Kotlin
  3. **UI/UX Design** — Wireframing, prototyping, design systems, Figma handoff
  4. **Backend & APIs** — RESTful & GraphQL APIs, microservices, serverless, database architecture
  5. **Tech Consulting** — Architecture reviews, code audits, MVP strategy, team mentoring
  6. **Maintenance & Support** — Ongoing support, performance monitoring, updates, SLAs
- Each card: icon, title, description, technology tags, "Learn More" button
- **Process Section** — Horizontal timeline: Discovery → Design → Build → Test → Launch → Support
- **Tech Stack Showcase** — Animated logo strip (logos of: React, Next.js, Flutter, Node.js, PostgreSQL, Firebase, Figma, AWS, TypeScript, Python)

---

## PAGE 3: PORTFOLIO / OUR WORK (`portfolio.html`)

- Filter bar at top: All | Web | Mobile | Design | Full-Stack
- **6 project cards** (make up impressive-sounding fictional projects):
  1. **Nexora** — SaaS dashboard for logistics companies (Web, React, Node.js)
  2. **Bloom** — Mental wellness mobile app (Flutter, Firebase)
  3. **TradeStack** — Crypto portfolio tracker web app (Next.js, TypeScript, Chart.js)
  4. **Parcel+** — Delivery management platform (React Native, Node, PostgreSQL)
  5. **NOVA Agency** — Creative studio website with 3D interactions (HTML, GSAP, Three.js)
  6. **EduPath** — Online learning platform (Next.js, Stripe, AWS)
- Each card has: thumbnail mockup (use CSS gradients as placeholders), project type badge, tech tags, description, GitHub link (dummy), Live Demo link (dummy)
- Case study modal or page-within-page for at least 2 projects (detailed breakdown: problem, solution, tech, outcome)

---

## PAGE 4: THE TEAM (`team.html`)

### Team Overview
- Heading: "The Humans Behind the Stack"
- Sub: "We're a tight-knit crew of 3 — each one a specialist, all of us obsessed with craft."

### Team Member Cards (3)
**Note:** Since exact names/details aren't provided, use placeholder names and roles that the team can easily edit. Make each profile feel real and detailed.

Each card includes:
- Circular avatar with initials (styled uniquely per person, using brand accent colors)
- Full name (placeholder: editable)
- Role/Title
- Short bio (2-3 sentences, edit-friendly)
- **Skills tags** (e.g., React, Node.js, UI/UX)
- **Fun fact** (add personality)
- Social links: GitHub, LinkedIn, Twitter
- **[View Full Profile →]** button → links to their dedicated page

---

## PAGE 5: TEAM MEMBER 1 (`team-member-1.html`)

Full individual profile page:
- Large avatar / initials circle (hero section)
- Name + Role + Location (e.g., "Mumbai, India")
- One-line personal tagline (editable)
- **About Me** — 2 paragraphs (placeholder, editable)
- **Skills** — progress-bar style or tag cloud: Frontend, Backend, Mobile, DevOps, Design
- **My Specialty Stack** — icon grid of technologies
- **Projects I've Worked On** — 3 mini project cards linking back to portfolio
- **Experience Timeline** — vertical timeline of 2-3 experience milestones
- **Contact Me** — small inline contact form (Name, Email, Message, Send button)
- Social links footer row

---

## PAGE 6: TEAM MEMBER 2 (`team-member-2.html`)

Same structure as Member 1 but with different layout variation:
- Split-screen hero (left: avatar, right: name + bio)
- Skills displayed as animated circular skill charts (CSS-only donut rings)
- Different accent color highlight (use the teal accent instead of indigo)
- Quote block: their personal philosophy on building software
- Same sections: projects, timeline, contact form, socials

---

## PAGE 7: TEAM MEMBER 3 (`team-member-3.html`)

Same structure but third layout variation:
- Full-width banner hero with name overlaid
- Skills as a tech keyword cloud
- Different highlight color (gradient between indigo and teal)
- "My Design Process" mini-section (if design-focused) OR "My Dev Philosophy"
- Same sections: projects, timeline, contact form, socials

---

## PAGE 8: PRICING (`pricing.html`)

- Heading: "Simple, Transparent Pricing"
- Sub: "No surprises. No hidden fees. Just great work at fair prices."
- **Toggle switch:** Monthly Retainer ↔ Project-Based

### 3 Pricing Tiers (Project-Based default):

| | Starter | Growth | Enterprise |
|---|---|---|---|
| Price | From ₹50,000 | From ₹1,50,000 | Custom |
| Best for | Landing pages, MVPs | Full web/app builds | Scale-ups, SaaS |
| Delivery | 1-2 weeks | 4-8 weeks | Scoped |
| Revisions | 2 | 5 | Unlimited |
| Support | 7 days post-launch | 30 days | 90 days + SLA |
| [CTA] | Get Started | Most Popular | Let's Talk |

- **FAQ Section** — 6 accordion-style questions:
  1. Do you work with international clients?
  2. What's your payment structure?
  3. Do you sign NDAs?
  4. What if I need changes after launch?
  5. Can you maintain my project long-term?
  6. How do we get started?

- **"Not sure which plan?" CTA** → links to Contact page

---

## PAGE 9: BLOG (`blog.html`)

- Header: "The UrbanStack Blog" + "Thoughts on tech, design, and building things that matter."
- **Featured Article** (large card at top):
  - Title: *"Why We Chose Next.js 14 for Every New Client Project in 2025"*
  - Author: Team Member 1 | Date | Read time | Tags
- **Article Grid** (6 cards):
  1. *"Designing for Dark Mode First — A Developer's Guide"*
  2. *"React Native vs Flutter in 2025: An Honest Comparison"*
  3. *"How We Deliver MVPs in Under 3 Weeks"*
  4. *"The API-First Architecture Pattern We Swear By"*
  5. *"Why Small Teams Ship Faster Than Big Agencies"*
  6. *"Freelancing in Tech: What We've Learned in 4 Years"*
- Each card: cover gradient, category tag, title, excerpt, author avatar + name, date, read time
- Newsletter signup bar at bottom: email input + "Subscribe" button

---

## PAGE 10: CONTACT (`contact.html`)

- Heading: "Let's Build Something Together"
- Split layout:
  **Left panel:**
  - Brief intro paragraph
  - Contact info row: 📧 hello@urbanstack.dev | 📍 Mumbai, India | 🕐 Response within 24 hours
  - Social icons row
  - Availability status badge: 🟢 Currently taking new projects

  **Right panel — Contact Form:**
  - Name (text)
  - Email (email)
  - Budget Range (select: Under ₹50k / ₹50k–₹1.5L / ₹1.5L–₹5L / ₹5L+ / Let's discuss)
  - Project Type (select: Web / Mobile App / Design / Consulting / Other)
  - Timeline (select: ASAP / 1 month / 1-3 months / Flexible)
  - Message (textarea, min 120 chars)
  - **[Send Message →]** button
  - On submit: animated success state ("Message received! We'll be in touch within 24 hours. 🚀")

---

## PAGE 11: PRIVACY POLICY (`privacy.html`)

Full legal page with:
- Last updated date
- Sections: Information We Collect | How We Use It | Cookies | Third-Party Services | Data Security | Your Rights | Contact for Privacy Issues
- Professional tone, clear language, no legalese overload
- Well-typeset with sidebar anchor navigation

---

## PAGE 12: TERMS & CONDITIONS (`terms.html`)

Full legal page with:
- Last updated date
- Sections:
  1. Agreement to Terms
  2. Services Description
  3. Client Responsibilities
  4. Payment Terms & Late Fees
  5. Intellectual Property Rights
  6. Revision & Change Request Policy
  7. Project Timelines & Delays
  8. Confidentiality & NDAs
  9. Termination of Services
  10. Limitation of Liability
  11. Dispute Resolution
  12. Governing Law (Maharashtra, India)
  13. Amendments to These Terms
  14. Contact Information
- Each section numbered, clearly titled, with concise professional language
- Sidebar table of contents with anchor links

---

## GLOBAL COMPONENTS (included on every page)

### Navigation
- Logo (left): "UrbanStack" in Space Grotesk, accent color dot or bracket
- Links (center/right): Home | Services | Work | Team | Pricing | Blog | Contact
- CTA button (right): "Start a Project" — filled accent
- Mobile: hamburger menu → full-screen overlay menu with staggered link animation
- On scroll: nav gains glass background (backdrop-filter blur)
- Active page link highlighted

### Footer
- 4-column layout:
  - Col 1: Logo + tagline + short description + social icons
  - Col 2: Company links (Home, About/Team, Blog, Careers)
  - Col 3: Services links (Web Dev, App Dev, UI/UX, Consulting)
  - Col 4: Legal links (Privacy Policy, Terms & Conditions, Cookie Policy)
- Bottom bar: copyright + "Made with ☕ in Mumbai"
- Subtle top border with gradient

---

## ANIMATIONS & INTERACTIONS

- **Page load:** fade-in + slide-up for hero elements (staggered, GSAP)
- **Scroll reveal:** elements animate in as they enter viewport (Intersection Observer)
- **Hover states:** Cards lift with subtle box-shadow + scale(1.02), buttons glow
- **Number counters:** Animate counting up when stats section enters viewport
- **Filter transitions:** Portfolio filter with fade + reflow animation
- **Accordion:** Smooth height transitions for FAQ
- **Carousel:** Smooth sliding testimonials with dot indicators
- **Dark/Light toggle:** Smooth transition, saves preference to localStorage
- **Page transitions:** Fade out/in between page navigations
- **Custom cursor:** Optional — a small dot + ring custom cursor on desktop

---

## ACCESSIBILITY & SEO

- All images have descriptive `alt` text
- Proper heading hierarchy (h1 → h2 → h3) on every page
- ARIA labels on interactive elements
- Keyboard navigable
- Skip-to-content link
- `<meta>` tags on every page: title, description, og:image, og:title, twitter:card
- Canonical URLs
- `robots.txt` and `sitemap.xml` (generate as bonus files)
- Structured data (JSON-LD): Organization schema on homepage
- Page titles follow format: "Page Name | UrbanStack"

---

## OUTPUT REQUIREMENTS

1. Output each page as a complete, working `.html` file
2. One shared `style.css` with all global styles + page-specific classes
3. One shared `main.js` with all interactive behaviors
4. All files must be ready to drop into a hosting provider (Vercel, Netlify, GitHub Pages) with zero additional setup
5. Comment key sections in CSS and JS for easy editing
6. Include a `README.md` with: project structure, how to edit team member info, how to change colors, how to deploy

---

## EDITABLE PLACEHOLDER SYSTEM

Wrap all team-specific content in clearly labeled HTML comments so the team can swap details:

```html
<!-- TEAM: Edit name below -->
<h2 class="member-name">Team Member One</h2>
<!-- TEAM: Edit role below -->
<p class="member-role">Full-Stack Developer</p>
```

Similarly for: phone numbers, email addresses, social links, profile bios, project descriptions.

---

## FINAL QUALITY CHECK

Before outputting, verify:
- [ ] All 12 pages are complete and functional
- [ ] Navigation works between all pages (relative links)
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] Dark mode toggle works and persists
- [ ] All forms validate and show success states
- [ ] No broken links or missing assets
- [ ] Consistent design language across all pages
- [ ] All fonts load correctly via Google Fonts
- [ ] GSAP and Lucide load from CDN correctly
- [ ] Terms and Privacy pages are complete legal documents

---

*Build this as if UrbanStack is your own studio and you want to impress every potential client who lands on it. Make it exceptional.*
