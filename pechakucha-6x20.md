---
marp: true
paginate: true
transition: fade
# PechaKucha: 6 slides, 20s auto-advance. Do not change the count.
auto-advance: 20
---

<!-- slide 1 -->
# Who's my person?

- **Oliver Henry** — software developer exploring vibe coding
- Needed a quick calendar app prototype for event planning
- Wanted to see how far Claude Code could take a project from zero to working app
<!-- 20s -->

---

<!-- slide 2 -->
# Their problem

- Building a calendar UI from scratch is tedious — grid math, date formatting, modal state management
- Existing calendar libraries are heavy and opinionated
- Wanted a **lightweight, self-contained app** that does exactly one thing: manage events on a month view
- Time was the constraint — needed it fast, not perfect
<!-- 20s -->

---

<!-- slide 3 -->
# What I built

- **Calendar App Demo** — React 19 + Vite 8 + Tailwind CSS 4
- Month navigation with prev/next and "Today" jump
- 6×7 calendar grid showing current month + filler days
- Click any day → add/edit/delete events (title, time, description)
- Events persist in localStorage — no backend needed
- Responsive design, accessible keyboard nav, delete confirmation
<!-- 20s -->

---

<!-- slide 4 -->
# How I built it

- **MCP:** Context7 for up-to-date React/Tailwind docs, Claude Code Docs for agent patterns
- **Skill:** `/initiation` bootstrapped the Vite project, guided architecture decisions
- **Agent:** Claude Code as the primary coding agent — scanned requirements, scaffolded components, wired state, wrote all utility functions
- Entire app built in a single session with iterative refinement
<!-- 20s -->

---

<!-- slide 5 -->
# Why it matters

- **Vibe coding works** — from natural language prompt to working app with full CRUD, persistence, and polish
- **No boilerplate hell** — Claude Code generated clean, readable code with proper JSDoc and Tailwind utility classes
- **Democratizes prototyping** — anyone can build a functional app without deep framework knowledge
- The future is: describe what you want, review the result, iterate
<!-- 20s -->

---

<!-- slide 6 -->
# Done checklist

- [x] repo public
- [x] MCP + skill + agent used
- [ ] report.md in team repo
