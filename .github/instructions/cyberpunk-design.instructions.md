---
description: "Cyberpunk neon design guide for Bingo Mixer UI, featuring dark theme, glassmorphism, glowing borders, and animated highlights"
applyTo: "src/components/**, src/index.css"
---

# Cyberpunk Neon Design Guide

## Overview

The Bingo Mixer UI has been redesigned with a dark cyberpunk neon aesthetic, featuring glassmorphism panels, glowing borders, animated effects, and a high-contrast color palette.

## Design System

- **Color Palette**: Dark backgrounds with neon accents (cyan, magenta, lime green)
- **Typography**: Bold, high-contrast text with neon glow effects
- **Effects**: Glassmorphism panels, blur overlays, glowing borders, pulsating animations
- **Spacing**: Maintained for readability; adjusted for neon glow clearance

## Key Components

### Global Styling (`src/index.css`)
- Full-screen gradient background (dark to darker gradient)
- CSS custom properties for neon colors
- Neon glow utilities (e.g., `glow-cyan`, `glow-magenta`)
- Custom keyframe animations for pulsation and glowing effects
- Body styling with backdrop blur and color adjustments

### Start Screen (`src/components/StartScreen.tsx`)
- Neon-backlit hero title and subtitle with glow effect
- Glassmorphism card with backdrop blur
- Glowing accent borders
- Neon buttons with hover animations

### Game Screen (`src/components/GameScreen.tsx`)
- Dark neon environment with gradient panels
- Glowing header with neon status indicators
- Glass blur effect on instruction text
- Neon status chips for bingo indicators

### Bingo Board (`src/components/BingoBoard.tsx`)
- Futuristic 5x5 grid layout
- Neon border glow around board container
- Consistent spacing for visual hierarchy

### Bingo Squares (`src/components/BingoSquare.tsx`)
- Dark glass square design with neon outlines
- Luminous marked states with glow effect
- Distinct neon badge for FREE_SPACE
- Hover and active neon glow animations
- Optional pulsation animation for marked squares

### Bingo Modal (`src/components/BingoModal.tsx`)
- Tinted neon haze overlay
- Glass dialog panel with blur effect
- Big neon celebration heading
- Glowing action button with subtle pulse animation

## Development Workflow

1. Use `npm run dev` for live preview with hot reload
2. Iterate on neon colors, glow intensity, and spacing
3. Test glassmorphism effects across different backgrounds
4. Validate animations perform smoothly without jank
5. Run `npm run lint` and `npm test` to ensure no regressions
6. Use `npm run build` for production validation

## Implementation Notes

- Use Tailwind v4 utilities as the base
- Supplement with custom CSS in `src/index.css` for neon/glow effects not available in Tailwind
- Maintain component structure and game logic unchanged
- Ensure accessibility with sufficient contrast for neon text
- Test on different screen sizes for responsive design
- Keep animation frame rates optimized for performance

## Color Reference

- **Neon Cyan**: For primary accents and glowing borders
- **Neon Magenta**: For secondary accents and hover states
- **Neon Lime**: For success states and highlights
- **Dark Background**: Base color for depth and contrast
- **Glass White**: For text and subtle accents