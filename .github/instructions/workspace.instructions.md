---
description: "Agent behavior guidelines for the Bingo Mixer workspace, covering dependency management, build process, testing, and UI design"
applyTo: "**"
---

# Bingo Mixer Workspace Instructions

## Setup and Dependency Management
- Always ensure Node.js 22+ is installed before running any npm commands.
- Use `npm install` to install dependencies from package.json.
- If using Dev Containers, ensure Docker is running and the container builds successfully with the postCreateCommand.

## Build Process
- Use `npm run build` to create a production build with TypeScript compilation and Vite bundling.
- The build outputs to the `dist/` directory by default.

## Development Server
- Run `npm run dev` to start the Vite development server on port 5173.
- Forward port 5173 in Dev Containers for browser access.

## Testing
- Run tests with `npm test` (uses Vitest).
- Tests are configured for jsdom environment and run in watch mode by default.
- Ensure tests pass before committing changes.

## Linting
- Use `npm run lint` to check code with ESLint.
- Fix any linting errors before finalizing code.

## UI Design
- Use Tailwind CSS v4 for styling.
- Follow the existing component structure in `src/components/`.
- Ensure responsive design and accessibility.

## General Guidelines
- Follow TypeScript best practices and the existing code style.
- Use hooks like `useBingoGame` for state management.
- When making changes, validate with build, lint, and test commands.