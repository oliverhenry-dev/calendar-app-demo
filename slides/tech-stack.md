---
marp: true
paginate: true
transition: fade
---

<!-- slide 1 -->
# Tech Stack

- **React 19** — UI library with hooks (useState, useEffect)
- **Vite 8** — Fast dev server and bundler
- **Tailwind CSS 4** — Utility-first styling via `@tailwindcss/vite` plugin
- **React Router 8** — BrowserRouter for navigation
- **Lucide React** — Icon library (ChevronLeft, ChevronRight, Plus, X, etc.)
- **Oxlint** — Fast Rust-based linter with React rules
- **JavaScript** — No TypeScript, plain JS with JSX

---

<!-- slide 2 -->
# Agents

| Agent | Purpose |
|-------|---------|
| **code-improver** | Scans files for readability, performance, and best practice issues; suggests concrete improvements |
| **docs-helper** | Writes and maintains project documentation — READMEs, slide decks, code comments, JSDoc |

Both agents use Sonnet model with Read, Glob, Grep tools for codebase analysis.

---

<!-- slide 3 -->
# Skills

| Skill | Trigger | What It Does |
|-------|---------|--------------|
| **/code-review** | `review this`, PR URL, or file path | Security, performance, correctness, maintainability review |
| **/react-calendar-review** | `review calendar` or component path | Calendar-specific review: a11y, UX, Tailwind, date utils |
| **/frontend-design** | Design guidance requests | Distinctive visual design — palette, typography, layout |

---

<!-- slide 4 -->
# Methodology

1. **Plan first** — `tasks/todo.md` with acceptance criteria per step
2. **Build incrementally** — utilities → components → state → styling
3. **Verify continuously** — `npm run build` after each step
4. **Review with AI** — skills for code quality, agents for improvements
5. **Persist state** — localStorage for events, no backend needed
6. **Ship working software** — every commit builds and runs

---

<!-- slide 5 -->
# Trigger & Commands

```bash
# Development
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run lint         # Run oxlint
npm run preview      # Preview production build

# AI Skills (in Claude Code)
/code-review src/App.jsx              # Review specific file
/react-calendar-review all            # Full calendar audit
/frontend-design                      # Design guidance
```

---

<!-- slide 6 -->
# Architecture

```
src/
├── main.jsx              # Entry point, BrowserRouter wrapper
├── App.jsx               # State owner: month, events, modal
├── App.css               # Global styles
├── index.css             # Tailwind imports
├── components/
│   ├── CalendarHeader.jsx   # Month nav + Today button
│   ├── CalendarGrid.jsx     # 6×7 day grid
│   ├── DayCell.jsx          # Single day with event dots
│   └── EventModal.jsx       # Add/edit/delete events
└── utils/
    ├── calendarUtils.js     # Date math (getDaysInMonth, etc.)
    └── storage.js           # localStorage read/write
```
