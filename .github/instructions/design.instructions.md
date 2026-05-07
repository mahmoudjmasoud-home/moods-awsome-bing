---
description: "Design guidance for Bingo Mixer UI updates, especially theme-driven frontend redesigns."
applyTo: "src/components/**, src/index.css"
---

# Bingo Mixer Design Guidelines

## Purpose
- Guide UI redesigns and theme work in this repo.
- Keep components responsive, accessible, and visually coherent.
- Link visual choices to the app's existing structure and game flow.

## Reference Documents
- `workshop/02-design.md` — design-first frontend workflow
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 patterns
- `.github/skills/frontend-design/SKILL.md` — creative frontend design guidance

## Style Rules
- Use Tailwind v4 utilities and `@theme` variables in `src/index.css`
- Preserve the current component structure: `App` → `GameScreen` → `BingoBoard` → `BingoSquare`
- Prefer mobile-first responsive layouts and clear visual hierarchy
- Use semantic HTML and accessible button controls
- Keep hover/focus/active states consistent
- Use animated effects sparingly and respect reduced-motion preferences

## Validation
- Preview in browser with `npm run dev`
- Run `npm run lint`, `npm test`, and `npm run build`
- Ensure text contrast and keyboard accessibility
- Compare new design to theme direction (reference `workshop/02-design.md` task themes)