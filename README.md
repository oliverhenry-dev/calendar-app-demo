# Calendar App Demo

A React-based calendar application with event management, built as a vibe coding demo using Claude Code.

## Features

- **Month Navigation** — browse forward/back and jump to today
- **6×7 Calendar Grid** — standard month view with previous/next month filler days
- **Event Management** — click any day to add, edit, or delete events
- **Event Fields** — title (required), optional time picker, optional description
- **Persistence** — events saved to localStorage, survive page reloads
- **Responsive** — works on mobile, tablet, and desktop
- **Accessible** — keyboard navigation (Escape closes modal), focus-visible outlines, ARIA labels

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | Lucide React |
| Routing | React Router 8 (BrowserRouter) |
| Linting | Oxlint |

## Project Structure

```
src/
  main.jsx                  Entry point — renders App in BrowserRouter
  App.jsx                   Root component — owns all state (month, events, modal)
  App.css                   Custom transitions and scrollbar styling
  index.css                 Tailwind import
  components/
    CalendarHeader.jsx      Month/year title, prev/next/today buttons
    CalendarGrid.jsx        6×7 grid with day name headers
    DayCell.jsx             Single day cell — shows date number + event badges
    EventModal.jsx          Add/edit/delete form with validation
  utils/
    calendarUtils.js        Date math, formatting, ID generation
    storage.js              localStorage read/write with error handling
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | Run Oxlint checks |
| `npm run preview` | Preview production build |

## Architecture Notes

- **State** — `App.jsx` is the single state owner; month/year, events, selected date, and modal visibility all live in `useState` hooks. No external state library needed for this scope.
- **Events schema** — stored as `{ "YYYY-MM-DD": [{ id, title, time, description }] }`. IDs generated via `crypto.randomUUID()`.
- **Date utilities** — pure functions in `calendarUtils.js` handle all date math (days in month, first day of week, date key formatting) to keep components clean.
- **Modal UX** — Escape key closes the modal, backdrop click closes it, delete has a confirmation step to prevent accidents.
