# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is a **personal portfolio website** for Rodanim Ganaba, a computer science student (BUT 3 Informatique) showcasing projects, skills, and professional experience. The site presents both web development and data science projects.

**Tech Stack**: Vue 3 + Vite + Vue Router + Tailwind CSS
**Language**: French (content and UI)
**Deployment**: Netlify (https://rodanim-ganaba.netlify.app/)

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Architecture

### Directory Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Navbar.vue      # Main navigation
│   ├── Footer.vue      # Site footer
│   ├── Hero.vue        # Homepage hero section
│   ├── ProjectCard.vue # Project grid item
│   └── SectionHeader.vue # Shared section title component
├── pages/              # Route-level page components
│   ├── Home.vue        # Landing page
│   ├── About.vue       # About section
│   ├── Skills.vue      # Technical skills
│   ├── Experiences.vue # Professional experience
│   ├── Projects.vue    # Projects gallery
│   ├── ProjectDetail.vue # Individual project details
│   └── Contact.vue     # Contact form (EmailJS)
├── data/
│   └── projects.js     # Project data array (9 projects)
├── router/
│   └── index.js        # Vue Router configuration
├── App.vue             # Root component (Navbar + router-view + Footer)
├── main.js             # App entry point
└── style.css           # Global styles + Tailwind imports
```

### Routing

All routes defined in `src/router/index.js`:
- `/` → Home page
- `/about` → About section
- `/skills` → Skills page
- `/experiences` → Professional experience
- `/projects` → Projects gallery
- `/project/:id` → Project detail (dynamic route, accepts numeric ID)
- `/contact` → Contact form
- Catch-all `/*` redirects to `/`

**Scroll Behavior**: Routes reset scroll to top, preserves position on back navigation.

---

## Key Technical Details

### Vue 3 Composition API

All components use `<script setup>` syntax. No Options API.

### Tailwind CSS Custom Theme

Custom design system configured in `tailwind.config.js`:

**Colors**:
- `primary`: Dark navy blue (#0a0e27)
- `secondary`: Lighter navy (#1a1f3a)
- `accent.blue`, `accent.purple`, `accent.cyan`: Blue/purple gradient theme
- `text.primary`, `text.secondary`, `text.muted`: Text hierarchy

**Custom Animations**:
- `animate-float`: Floating effect (6s loop)
- `animate-glow`: Glow pulsing effect
- `animate-slide-up`, `animate-slide-in`, `animate-fade-in`: Entry animations

**Custom Shadows**:
- `shadow-glow-sm/md/lg`: Blue glow effects
- `shadow-glass`: Glassmorphism effect

### Environment Variables

EmailJS configuration (contact form):
```bash
VITE_EMAILJS_SERVICE_ID=     # EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID=    # EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY=     # EmailJS public key
```

Copy `.env.example` to `.env` and fill in values.

### Projects Data Model

Projects stored in `src/data/projects.js` as array of objects:

**Schema**:
```js
{
  id: number,
  title: string,
  shortDescription: string,
  fullDescription: string,
  context: string,
  objectives: string[],
  features: string[],
  technologies: string[],
  image: string,              // Path to /public/images/
  githubLink: string,
  liveLink: string | null,
  featured: boolean,          // Highlighted projects
  teamSize?: number,          // Optional: for team projects
  role?: string,              // Optional: role in team
  duration?: string,          // Optional: project duration
  methodology?: string        // Optional: dev methodology
}
```

**Current Projects**: 9 projects (IDs 1-9) including web apps, ML projects, IoT systems.

---

## SEO & Meta Tags

`index.html` includes comprehensive SEO:
- Open Graph tags (Facebook/LinkedIn sharing)
- Twitter Card metadata
- Structured data (JSON-LD schema.org Person type)
- `robots.txt` and `sitemap.xml` in `/public`
- Canonical URLs
- Bing and Google Search Console verification

**When updating content**, remember to update:
1. Meta descriptions in `index.html`
2. `sitemap.xml` if adding new routes
3. Structured data if profile info changes

---

## Design Conventions

### Visual Style

**Theme**: Dark mode with blue-purple gradient accents
**Design Philosophy**: Modern, clean, professional developer portfolio
**Animations**: Smooth transitions, floating/glowing effects

### Responsive Design

Mobile-first approach. Tailwind breakpoints:
- Base: Mobile (< 640px)
- `sm:`: 640px+
- `md:`: 768px+
- `lg:`: 1024px+
- `xl:`: 1280px+

### Component Patterns

**SectionHeader.vue**: Reusable section title with gradient underline
**ProjectCard.vue**: Grid item for project previews
**Navbar.vue**: Sticky navigation with active route highlighting
**Footer.vue**: Social links and copyright

---

## Common Development Tasks

### Adding a New Project

1. Add project object to `src/data/projects.js` (increment ID)
2. Add project image to `public/images/` (PNG format recommended)
3. Update `featured: true` if it should be highlighted

### Adding a New Page

1. Create Vue component in `src/pages/`
2. Add route in `src/router/index.js`
3. Add navigation link in `Navbar.vue` if needed
4. Update `sitemap.xml` with new route

### Modifying Tailwind Theme

Edit `tailwind.config.js` to add colors, animations, or utility classes.
Purging is automatic—Tailwind scans all Vue/JS/HTML files.

### Testing Contact Form

Requires valid EmailJS credentials in `.env`.
Form in `src/pages/Contact.vue` uses `@emailjs/browser` package.

---

## Content Language & Style

**Primary Language**: French
**Code**: English variable/function names, French comments
**UI Text**: French
**Project Descriptions**: Detailed French descriptions with professional tone

---

## Public Assets

Located in `/public/`:
- `images/`: Project screenshots (1.png - 11.png, parkMR.png)
- `CV Rodanim Ganaba.pdf`: Downloadable resume
- `favicon.ico`: Site icon
- `robots.txt`: Search engine directives
- `sitemap.xml`: Site structure for SEO
- `BingSiteAuth.xml`: Bing verification

---

## Dependencies

**Core**:
- `vue` (3.5.22): Framework
- `vue-router` (4.5.1): Routing
- `@emailjs/browser` (4.4.1): Contact form email service

**Dev Dependencies**:
- `vite` (7.1.7): Build tool
- `@vitejs/plugin-vue` (6.0.1): Vue 3 support
- `tailwindcss` (3.4.10): Utility-first CSS
- `autoprefixer` (10.4.21): CSS vendor prefixing
- `postcss` (8.5.6): CSS processing
- `vite-plugin-image-optimizer` (2.0.2): Image optimization

---

## Browser Support

Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge).
No IE11 support (Vite doesn't support legacy browsers).

---

## Performance Optimizations

- Vite's code splitting for route-based lazy loading
- Image optimization via Vite plugin
- Tailwind CSS purging (production builds only include used classes)
- Preconnect hints for external resources (fonts, CDNs)
- Web history mode (no hash routing)

---

## Notes for Future Development

- **State Management**: None currently. Add Pinia if complex state needed.
- **Testing**: No test setup. Consider Vitest + Vue Test Utils if adding tests.
- **TypeScript**: Not used. Could migrate to TS if type safety needed.
- **i18n**: Currently French only. Add vue-i18n if multilingual support needed.
- **API Integration**: Only EmailJS for contact form. No backend.

---

## Git Workflow

Current branch: `main`
When making commits, use clear, concise messages in English or French.

---

## Contact & Support

**Site Owner**: Rodanim Ganaba
**Email**: ganabarodanimkm@gmail.com
**GitHub**: https://github.com/GANABA
**LinkedIn**: https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/
