# Tcongs Infotech — Homepage Redesign

A modern, premium homepage redesign for Tcongs Infotech, built with React (Vite),
Tailwind CSS, Framer Motion and Lucide React.

## Stack
- **React 18 + Vite** — fast dev/build tooling
- **Tailwind CSS** — utility-first styling with a custom design token system
- **Framer Motion** — scroll-triggered and page-load animations
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    layout/       Navbar, Footer
    sections/     Hero, Services, About, WhyChooseUs, Process, Portfolio,
                   Testimonials, CTA
    ui/            Reusable primitives: Button, SectionHeading, Icon
  data/            Content separated from markup (services, process steps,
                   projects, testimonials, stats, nav links)
  index.css        Design tokens as Tailwind @layer utilities (glass, buttons,
                   gradient text, section spacing)
App.jsx            Composes all sections
```

## Design system

- **Background:** deep navy (`#05070F`–`#0F1428`) with soft cyan / indigo /
  violet radial gradients (aurora effect).
- **Typography:** Space Grotesk for display headings, Inter for body copy,
  JetBrains Mono for eyebrows/labels/stats.
- **Surfaces:** glassmorphism cards (`bg-white/[0.04] backdrop-blur-xl`) with
  hairline borders and soft shadows.
- **Motion:** staggered scroll reveals via Framer Motion `whileInView`,
  ambient floating elements in the hero, respects `prefers-reduced-motion`.

## Notes on content

Copy is written from the real Tcongs Infotech site (services, process,
8+ years / Mumbai / global client base, contact email). The portfolio
project names and client testimonials are illustrative placeholders —
swap in real case studies and quotes before shipping to production.
