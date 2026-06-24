---
name: project-stack
description: Calendar app demo - React 19.1 + Vite 7.0, plain JSX, localStorage, no backend, no TypeScript, no tests
metadata:
  type: project
---

Stack: React 19.1.0 + Vite 7.0.0, plain JSX (no TypeScript), no additional runtime deps.
Data: localStorage only, key `calendar-events`, no backend/API.
Components: App.jsx, CalendarHeader.jsx, CalendarGrid.jsx, DayCell.jsx, EventModal.jsx.
Utils: calendarUtils.js (date helpers), storage.js (localStorage read/write).
No tests, no ESLint config, no env variables. Single CSS file (App.css).
Accessibility: skip link, ARIA roles/labels, focus trap, focus restoration, keyboard nav.

**Why:** User is building a demo project, keeping things minimal and simple per CLAUDE.md.
**How to apply:** Keep documentation and suggestions beginner-friendly; no overengineering.
