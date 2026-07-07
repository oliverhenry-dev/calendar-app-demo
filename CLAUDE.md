# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Calendar app demo — a React-based calendar application with event management. Currently in early development with core components planned but not yet implemented.

## Development Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — Run oxlint checks
- `npm run preview` — Preview production build

## Tech Stack

- **Framework:** React 19 with Vite 8
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Routing:** React Router 8 (BrowserRouter)
- **Icons:** Lucide React
- **Linting:** Oxlint with React rules
- **Language:** JavaScript (no TypeScript)

## Architecture

Planned component-based React architecture (components not yet implemented):

- **Entry:** `src/main.jsx` — renders App wrapped in BrowserRouter
- **App:** `src/App.jsx` — central state owner; will manage current month/year, events, modal state
- **Components:** `src/components/` — CalendarHeader (nav), CalendarGrid (6×7 month view), DayCell (single day), EventModal (add/edit/delete)
- **Utilities:** `src/utils/calendarUtils.js` (date calculations), `src/utils/storage.js` (localStorage persistence)
- **Styling:** Tailwind via `src/index.css`, component styles in `src/App.css`

## Key Patterns (Planned)

- **State Management:** useState for local state, useEffect for localStorage sync
- **Event Storage:** Events stored in localStorage as `{ [dateKey]: Event[] }`
- **Date Keys:** Format "YYYY-MM-DD" using formatDateKey utility
- **Components:** Functional components with hooks, prop drilling for state

## Workflow

1. Write plan in tasks/todo.md before implementing
2. Complete todos incrementally, marking as done
3. Keep changes minimal and focused
4. Run `npm run build` to verify no errors
