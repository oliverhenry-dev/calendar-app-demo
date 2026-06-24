# Calendar App

A simple, self-contained calendar application built with React and Vite. Browse months, create events, and manage your schedule entirely in your browser -- no server, no account, no backend required. All data is saved locally in your browser's storage.

## Features

- **Monthly calendar grid** -- a standard 6-row by 7-column layout showing the full month, with grayed-out overflow days from the previous and next months.
- **Month navigation** -- move forward and backward through months with arrow buttons, or jump back to the current month with the "Today" button.
- **Today highlight** -- the current date is marked with a blue circle so you can spot it at a glance.
- **Event management (CRUD)** -- click any day to create an event. Click an existing event to edit or delete it. Each event has a required title (up to 100 characters), an optional time, and an optional description.
- **Event pills** -- up to three events display directly on each day cell. If there are more, a "+N more" label keeps things compact.
- **Local storage persistence** -- events are saved to your browser's `localStorage` under the key `calendar-events`. They survive page refreshes and browser restarts.
- **Responsive design** -- the layout adapts across three breakpoints: mobile (under 640px), tablet (641px to 1024px), and desktop (above 1024px).
- **Full accessibility** -- includes a skip link, ARIA roles and labels on all interactive elements, keyboard navigation with `Enter`/`Space`/`Escape`, focus trapping inside dialogs, and focus restoration when modals close.

## Technologies Used

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev/) | 19.1.0 | UI library for building components |
| [Vite](https://vite.dev/) | 7.0.0 | Build tool and development server |
| JSX | -- | Component markup (plain JavaScript, no TypeScript) |
| `localStorage` | -- | Client-side data persistence (no database) |

There are no additional runtime dependencies. The app uses plain React with a single CSS file for all styling.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** version 18 or later. You can check your version by running `node --version` in your terminal. If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/).
- **npm** (the Node Package Manager). It comes bundled with Node.js. Check with `npm --version`.

## Setup Instructions

Follow these steps to get the app running on your local machine.

1. **Clone the repository** (or download the source code):

   ```bash
   git clone <repo-url>
   cd calendar-app-demo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This downloads React, Vite, and their supporting libraries into the `node_modules/` folder.

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   Vite will print a local URL to your terminal (usually `http://localhost:5173`). Open that URL in your web browser.

4. **You're ready to go.** The app runs entirely in your browser. No environment variables or configuration files are needed.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with hot reload (changes appear instantly in the browser) |
| `npm run build` | Create an optimized production build in the `dist/` folder |
| `npm run preview` | Serve the production build locally to test it before deploying |

## Usage Examples

### Browse months

Use the left and right arrow buttons in the header to move between months. Click the **Today** button to jump back to the current month.

### Add an event

1. Click on any day cell in the calendar.
2. A modal dialog appears with a form.
3. Type a **title** (required), optionally pick a **time** and add a **description**.
4. Click **Add** to save the event.

### Edit an event

1. Click on an existing event pill (the blue bar on any day).
2. The modal opens with the event's details pre-filled.
3. Make your changes and click **Save**.

### Delete an event

1. Open an event for editing (click on it).
2. Click the **Delete** button in the bottom-left corner of the modal.

### Keyboard navigation

- Press `Tab` to move focus between day cells.
- Press `Enter` or `Space` to open a day or event.
- Press `Escape` to close a modal.
- While a modal is open, `Tab` and `Shift+Tab` cycle only through the modal's controls (focus trap).

## Project Structure

```
calendar-app-demo/
  index.html                  Entry HTML file (includes a skip-link for accessibility)
  package.json                Project metadata, dependencies, and scripts
  vite.config.js              Vite configuration (React plugin)
  .gitignore                  Ignores node_modules/
  src/
    main.jsx                  React entry point (renders <App /> into the DOM)
    App.jsx                   Root component -- holds all state and event handlers
    App.css                   All styles (grid, buttons, modal, responsive breakpoints)
    components/
      CalendarHeader.jsx      Month/year display with prev/next/today navigation buttons
      CalendarGrid.jsx        6x7 table of day cells, handles overflow into adjacent months
      DayCell.jsx             Single day cell with event pills and "+N more" overflow label
      EventModal.jsx          Add/edit/delete event dialog with form validation and focus trap
    utils/
      calendarUtils.js        Pure date helper functions (days-in-month, date keys, day headers)
      storage.js              localStorage read/write helpers
  tasks/
    todo.md                   Project planning and task tracking
  dist/                       Production build output (generated by `npm run build`)
```

## Accessibility

This app is built with accessibility in mind:

- **Skip link** -- a "Skip to calendar" link appears when you press `Tab` on page load, letting keyboard users jump past the header.
- **ARIA roles and labels** -- the calendar grid uses `role="grid"` with an `aria-label`, day cells use `role="gridcell"` with descriptive labels (e.g. "Today, June 23, 2026"), and event pills use `role="button"`.
- **Focus management** -- when a modal opens, focus moves to the title input. When it closes, focus returns to the element that triggered it.
- **Focus trap** -- while a modal is open, `Tab` and `Shift+Tab` cycle only through the modal's controls, preventing focus from escaping behind the overlay.
- **Keyboard support** -- all interactive elements (day cells, event pills, buttons) respond to `Enter` and `Space`. Modals can be dismissed with `Escape`.
- **Visible focus indicators** -- all focusable elements show a clear blue outline on `:focus-visible`.
- **Form validation feedback** -- the title field uses `aria-required`, `aria-invalid`, and `aria-describedby` to communicate errors to screen readers via a `role="alert"` message.
