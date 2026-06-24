---
marp: true
paginate: true
transition: fade
# PechaKucha: 6 slides, 20s auto-advance. Do not change the count.
auto-advance: 20
---

<!-- slide 1 -->
# Who's my person?

I'm **oliverhenry-dev** — a developer learning React by building real projects. I wanted a hands-on way to understand component architecture, state management, and the Claude Code workflow — all in one compact app.

<!-- 20s -->

---

<!-- slide 2 -->
# Their problem

I needed a **portfolio-quality calendar app** with no backend — something I could build incrementally, commit cleanly, and use to explore Claude Code's MCP, skills, and agents. The challenge: keep it simple, keep it accessible, and learn the patterns that matter.

---

<!-- slide 3 -->
# What I built

A **client-side React calendar** (Vite 7 + React 19):
- Month navigation with prev / next / today
- Click any day to add, edit, or delete events
- Events persist in **localStorage** — no server needed
- Focus-trapped modal with keyboard and screen-reader support
- Responsive CSS for mobile, tablet, and desktop

---

<!-- slide 4 -->
# How I built it

- **MCP:** Context7 — queried React & Vite docs in-context while building components
- **Skill:** `react-calendar-review` — a structured checklist (correctness, a11y, perf, quality, responsive) tailored to this app's file map and data shape
- **Agent:** `code-improver` scans source and produces categorized improvement suggestions; `docs-helper` generated the README from scratch
- **Commands:** `/dev`, `/build`, `/review`, `/fix`, `/ally-check`, `/component`, `/test`

---

<!-- slide 5 -->
# Why it matters

This project proves the **Claude Code end-to-end workflow**:
- MCP brings docs to you (no context-switching)
- Skills encode domain knowledge for repeatable reviews
- Agents automate tedious work (code review, docs)
- Slash commands make it all one keystroke away

The result: a working app, a clean git history, and a pattern I can reuse on every future project.

---

<!-- slide 6 -->
# Done checklist

- [x] repo public — [github.com/oliverhenry-dev/calendar-app-demo](https://github.com/oliverhenry-dev/calendar-app-demo)
- [x] MCP + skill + agent used — Context7, react-calendar-review, code-improver, docs-helper
- [x] report.md in team repo
