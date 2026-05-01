# Project Architecture & Structure

This document outlines the organization of the **Vikash Kumar Portfolio** codebase to help developers understand the architecture and flow.

## 🏗️ Directory Overview

```text
/
├── public/              # Static assets (images, badges, logos)
├── src/
│   ├── app/             # Next.js App Router (pages, layout, globals.css)
│   ├── components/
│   │   ├── sections/    # Major page sections (Hero, Projects, Certifications)
│   │   └── ui/          # Reusable UI components (GlowCard, Typewriter, Buttons)
│   ├── data/            # Centralized content (projects.ts, certs.ts, socials.ts)
│   ├── hooks/           # Custom React hooks (useScroll, useMousePosition)
│   ├── lib/             # Utilities and animation variants
│   └── types/           # TypeScript interfaces and types
├── tailwind.config.js   # Custom theme and gradient tokens
└── next.config.mjs      # Framework configuration
```

## 🧩 Key Components

### 1. `src/components/sections/`
- **Hero.tsx**: The entrance experience. Integrates the `HeroScene` and `TypewriterText`.
- **Projects.tsx**: Displays high-fidelity project cards with bento-grid layouts.
- **Certifications.tsx**: Showcases validated credentials with custom hover states and pulsing animations.

### 2. `src/components/ui/`
- **HeroScene.tsx**: Contains the Three.js/R3F logic for the interactive 3D elements.
- **TypewriterText.tsx**: A custom-built state machine for typewriter animations with precise timing controls.
- **GlowCard.tsx**: A specialized glassmorphic container with dynamic glow effects.
- **MagneticButton.tsx**: Implements physics-based hover interactions.

### 3. `src/data/`
- All content is decoupled from the UI. To update projects, certifications, or links, modify the corresponding file in this directory.

## 🎨 Design System

The project uses a custom design system defined in `globals.css` and `tailwind.config.js`:
- **Colors**: Obsidian-based palette (`bg-void`, `bg-deep`).
- **Typography**: Space Grotesk (Headings) and Inter (Body).
- **Gradients**: Custom `gradient-brand` and `gradient-text` tokens.

## ⚡ Animations

Animations are handled via **Framer Motion**:
- **Scroll Reveals**: Using `IntersectionObserver` via custom `ScrollReveal` component.
- **Transitions**: Controlled using custom cubic-bezier curves for a "premium" feel.
