# React Calendar App Review Skill

## Purpose

Review, audit, and improve the React calendar app. This skill provides structured guidance for analyzing the codebase across correctness, accessibility, performance, and code quality dimensions.

## When to Use

- Before merging or shipping changes
- After adding a new component or feature
- When investigating a bug or regression
- As a periodic quality check

## Project Context

| Aspect | Detail |
|--------|--------|
| Framework | React 19.1 (functional components, hooks) |
| Bundler | Vite 7.0 |
| Language | Plain JavaScript (JSX), no TypeScript |
| Styling | Single `App.css` file, BEM-like class names |
| State | `useState` / `useEffect` / `useCallback` in `App.jsx` |
| Persistence | `localStorage` via `src/utils/storage.js` |
| Data shape | `{ "YYYY-MM-DD": [{ id, title, time?, description? }] }` |

### File Map

```
src/
  App.jsx                   Root component — all state and handlers
  App.css                   All styles (grid, modal, responsive)
  main.jsx                  Entry point
  components/
    CalendarHeader.jsx      Nav buttons + month/year title
    CalendarGrid.jsx        6×7 table of DayCells
    DayCell.jsx             Single day with event pills
    EventModal.jsx          Add/edit/delete dialog with focus trap
  utils/
    calendarUtils.js        Pure date helpers
    storage.js              localStorage read/write
```

## Review Checklist

### 1. Correctness

- [ ] Event CRUD: add, edit, delete all persist to localStorage
- [ ] Month navigation wraps correctly (Dec → Jan, Jan → Dec)
- [ ] Overflow days (prev/next month) display correct dates and events
- [ ] `formatDateKey` produces stable `YYYY-MM-DD` keys
- [ ] Modal form validates: title required, max 100 chars
- [ ] No stale closures — all `useCallback` deps are complete
- [ ] No missing `key` props on mapped elements

### 2. Accessibility

- [ ] Skip link present and functional (`index.html`)
- [ ] Calendar grid: `role="grid"`, `aria-label` with month/year
- [ ] Day cells: `role="gridcell"`, `aria-label` with full date, `aria-disabled` for overflow days
- [ ] Event pills: `role="button"`, `tabIndex={0}`, keyboard handlers
- [ ] Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- [ ] Focus trap: Tab cycles inside modal, Escape closes
- [ ] Focus restoration: returns to trigger element on modal close
- [ ] Form errors: `role="alert"`, `aria-invalid`, `aria-describedby`
- [ ] All interactive elements have `:focus-visible` styles

### 3. Performance

- [ ] No unnecessary re-renders (memoization where needed)
- [ ] Event handlers wrapped in `useCallback` with correct deps
- [ ] No expensive computations in render path
- [ ] localStorage reads happen once on mount (lazy init in `useState`)
- [ ] CSS: no layout thrashing, efficient selectors

### 4. Code Quality

- [ ] Consistent naming: camelCase for functions/variables, PascalCase for components
- [ ] No dead code or unused imports
- [ ] Components are single-purpose and reasonably sized
- [ ] Utils are pure functions with JSDoc comments
- [ ] No hardcoded magic numbers (extract constants)

### 5. Responsive Design

- [ ] Mobile (< 640px): compact cells, smaller fonts
- [ ] Tablet (641–1024px): medium cell height
- [ ] Desktop (> 1024px): full layout
- [ ] Modal max-width constrained, padding adjusts

## How to Run the Review

1. **Read all source files** — `src/App.jsx`, `src/components/*.jsx`, `src/utils/*.js`, `src/App.css`
2. **Check git diff** — focus on changed files if reviewing a specific update
3. **Build check** — run `npm run build` to catch compile errors
4. **Walk the checklist** — mark each item pass/fail with file:line references
5. **Report findings** — group by severity (bug → a11y → perf → style)
6. **Offer fixes** — provide Edit commands for each issue found

## Common Issues to Watch For

| Pattern | Risk | Fix |
|---------|------|-----|
| Missing `useCallback` dep | Stale closure bug | Add dep or use ref |
| `Date.now()` as key | Collisions on fast adds | Use UUID or counter |
| No `aria-modal` | Screen reader leaks behind overlay | Add `aria-modal="true"` |
| `localStorage` quota | Silent data loss | Wrap in try/catch |
| Hardcoded color values | Inconsistent theme | Extract to CSS variables |
| `onClick` on `<div>` without keyboard handler | Keyboard inaccessible | Add `role="button"`, `tabIndex`, `onKeyDown` |

## Output Format

```
## Review Summary

**Files reviewed:** N
**Issues found:** X (Y critical, Z moderate, W minor)

### Critical
- `src/components/DayCell.jsx:42` — description of issue
  → Fix: brief fix description

### Moderate
- ...

### Minor
- ...
```
