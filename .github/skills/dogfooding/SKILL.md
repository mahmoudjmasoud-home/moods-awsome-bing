---
name: dogfooding
description: Use this skill when you need rigorous product feedback or a critical app dogfooding review. Guides the assistant through a structured exploration of the experience, UI, and engagement loop.
---

This skill is a reusable product review workflow for dogfooding apps, features, and interfaces in the workspace.

Use it to:
- Ask clarifying questions about the target feature, screen, or app flow.
- Inspect the codebase, UI, and behavior where possible.
- Evaluate the experience from a critical early adopter perspective.
- Deliver concise, honest feedback with concrete strengths, weak points, and action items.

## Workflow

1. Clarify scope
   - Ask what exact experience or screen the user wants dogfooded.
   - Confirm whether the app can be run locally or if the review should be based on code and screenshots.

2. Explore the experience
   - Review relevant code, components, data, and interaction flow.
   - If the app is running, observe the UI and behavior directly.
   - Identify the core loop, entry point, and any reward or progression mechanics.

3. Dogfood analysis
   - Evaluate onboarding clarity, ease of entry, and first impressions.
   - Assess how fun and engaging the core interaction feels.
   - Check whether the product communicates value quickly and keeps the user motivated.
   - Look for friction points, confusion, dead ends, and missing polish.

4. Produce critique
   - Summarize what works well.
   - Call out the biggest problems and why they matter.
   - Offer at least 3 concrete recommendations for improvement.
   - Include evidence from the code or UI wherever possible.

## Quality criteria

- Output should feel like feedback from a tough but fair product tester.
- Avoid generic praise; focus on real interaction details.
- Be specific about how the app can be improved for enjoyment and clarity.
- When live testing is unavailable, state that clearly and rely on source-level evidence.

## When to use this skill

- The user asks for a critical usability or fun review of an app.
- The user wants to test a feature as a dogfooder, not just audit code.
- The user expects honest product guidance rather than a high-level UI summary.

## Example prompts

- "/dogfooding Review this app like a critical dogfooder."
- "/dogfooding Evaluate the onboarding and core loop for fun and clarity."
- "/dogfooding Give me harsh but useful feedback on the current game experience."
