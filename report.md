<!-- ch-3 personal-project report. Copy this file to ch-3/<your-github-username>/report.md -->
<!-- Before you pass: your project repo needs at least 3 GitHub stars (ask teammates
     to open your repo and click ⭐). This proves it is a real, shared project. -->
# ch-3 Personal Project — Report

github_username: oliverhenry-dev
personal_repo_url: https://github.com/oliverhenry-dev/calendar-app-demo
project_summary: A client-side calendar app built with React and Vite that lets users browse months, create/edit/delete events, and persist data in localStorage — no backend required.
slides_url: <!-- TODO: add slides path, e.g. slides/pitch.md -->

## Methodology

I used a project-based approach, scaffolding the Vite + React project first, then building features incrementally: utility modules → read-only grid → navigation → event modal → responsive CSS. Claude Code assisted throughout — I used it to generate components, review accessibility, write the README, and set up project tooling (skills, agents, MCP). Each feature was committed as I built it, keeping the git history clean and traceable.

## Evidence — Claude Code usage

### MCP
- path: .mcp.json
- what: Configured the **Context7** MCP server (`https://mcp.context7.com/mcp`) to query up-to-date documentation for React and Vite while building components and troubleshooting build issues.

### Skill
- path: .claude/skills/react-calendar-review/SKILL.md
- what: A project-specific review skill with a structured checklist covering correctness, accessibility, performance, code quality, and responsive design — tailored to this calendar app's file map, data shape, and conventions.

### Agent
- path: .claude/agents/code-improver.md
- what: Scans source files and produces categorized improvement suggestions (readability, performance, best-practice) with before/after code blocks and beginner-friendly explanations.

- path: .claude/agents/docs-helper.md
- what: A documentation specialist agent that scans the codebase and generates a complete, beginner-friendly README.md — used to produce the project's README with setup instructions, features, and usage examples.

### Commands (slash skills)
- path: .claude/commands/ally-check.md
  what: Reviews the app for accessibility best practices — color contrast, semantic HTML, ARIA labels, focus states, and keyboard navigation.

- path: .claude/commands/dev.md
  what: Starts the Vite development server.

- path: .claude/commands/build.md
  what: Runs a production build and reports errors or warnings.

- path: .claude/commands/review.md
  what: Reviews current git diffs for bugs, accessibility issues, and code quality problems.

- path: .claude/commands/fix.md
  what: Scans the codebase for issues (missing imports, React anti-patterns, a11y gaps) and applies fixes.

- path: .claude/commands/component.md
  what: Scaffolds a new React component following existing project conventions.

- path: .claude/commands/test.md
  what: Runs existing tests or offers to set up vitest if no test framework is configured.
