# Trigger & Commands Reference

## Custom Skills

### /code-review
- **Trigger:** "review this before I merge", "is this code safe?", PR URL, or file path
- **Command:** `/code-review <PR URL or file path>`
- **Example:** `/code-review src/App.jsx`

### /react-calendar-review
- **Trigger:** "review calendar", "check calendar components", or when auditing calendar state
- **Command:** `/react-calendar-review [component path or "all"]`
- **Example:** `/react-calendar-review all`

### /frontend-design
- **Trigger:** Design guidance requests — palette, typography, layout decisions
- **Command:** Ask a design question in Claude Code
- **Example:** "Help me choose a color palette for the calendar"

## Custom Agents

### code-improver
- **Trigger:** Assign via Agent tool with codebase to review
- **Model:** Sonnet
- **Tools:** Read, Glob, Grep
- **Use case:** Scan files for readability, performance, and best practice issues

### docs-helper
- **Trigger:** Assign via Agent tool with documentation task
- **Model:** Sonnet
- **Tools:** Read, Glob, Grep, Write
- **Use case:** Write or update project documentation, slides, code comments

## Dev Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | Run oxlint checks |
| `npm run preview` | Preview production build |
