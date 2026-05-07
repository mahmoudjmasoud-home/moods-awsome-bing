# GitHub Copilot Instructions

Use this file as the canonical workspace instructions entry point for Copilot agents.

## Primary Guidance

- Start with `AGENTS.md` for project overview and agent-specific guidance.
- Consult `.github/instructions/workspace.instructions.md` for repository-specific dependency, build, test, lint, and UI rules.
- Consult `.github/instructions/tailwind-4.instructions.md` for Tailwind CSS v4 styling conventions.
- Review `.github/agents/*.agent.md` for reusable agent roles and task-specific behavior.

## Workflow

1. Run `npm install` if dependencies are missing.
2. Use `npm run dev` to start the app locally.
3. Validate changes with `npm run lint`, `npm test`, and `npm run build` before finishing.

## Notes

- This repo uses React 19, TypeScript, Vite, and Tailwind CSS v4.
- Keep instructions concise and rely on linked docs for implementation details.
