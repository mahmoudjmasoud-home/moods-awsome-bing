---
AGENTS.md

This file provides essential guidance for AI coding agents working on the Bingo Mixer project.

## Project Overview

Bingo Mixer is a social bingo game for in-person mixers, built with React 19, TypeScript, Vite, and Tailwind CSS v4. Players mark questions to get 5 in a row and find people with matching answers.

## Essential Commands

AI agents should run these automatically for validation:

- **Install**: `npm install` (requires Node.js 22+)
- **Dev server**: `npm run dev` (starts on port 5173)
- **Build**: `npm run build` (outputs to dist/)
- **Test**: `npm test` (Vitest with jsdom)
- **Lint**: `npm run lint` (ESLint with strict rules)

## Architecture Highlights

- **State management**: Single `useBingoGame` hook with localStorage persistence
- **Component structure**: App → GameScreen → BingoBoard → BingoSquare
- **Logic separation**: Pure functions in `utils/bingoLogic.ts`
- **Styling**: Tailwind CSS v4 with custom theme colors
- **Testing**: Vitest with @testing-library, focused on domain logic

## Key Conventions

- Use TypeScript strict mode (no unused locals/parameters)
- Follow React hooks rules and fast refresh compatibility
- Pure functions for game logic, effects for side effects
- Tailwind utility classes with custom theme variables
- Component props interfaces in `types/index.ts`

## Common Pitfalls

- Add `typeof window` guards for localStorage in SSR contexts
- Ensure board center is always FREE_SPACE (index 12)
- Use Fisher-Yates shuffle for question randomization
- Set `VITE_REPO_NAME` for GitHub Pages subpath deployments
- Run tests in single-run mode (watch disabled by default)

## Development Workflow

1. Start with `npm run dev` for live development
2. Make changes with hot reload and type checking
3. Run `npm run lint` and `npm test` before commits
4. Build with `npm run build` for production

## Workspace Customizations

- Consult `.github/instructions/workspace.instructions.md` for repository-specific dependency, build, test, lint, and UI guidelines.
- Consult `.github/instructions/design.instructions.md` for workspace-specific design guidance.
- Consult `.github/instructions/cyberpunk-design.instructions.md` for the current cyberpunk neon UI design system.
- Follow the Tailwind v4 guidance in `.github/instructions/tailwind-4.instructions.md` for styling changes.
- Reusable agent roles are defined in `.github/agents/*.agent.md`.
- Use `AGENTS.md` for high-level project guidance, and the `.github` instruction files for exact workspace conventions.

## Related Documentation

- [Setup Guide](workshop/01-setup.md) — Environment setup and deployment
- [Design Guide](workshop/02-design.md) — UI/UX patterns and Tailwind usage
- [README](README.md) — Quick start and prerequisites
- [Architecture Details](workshop/00-overview.md) — Full project overview