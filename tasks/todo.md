# Calendar App — Tasks & Acceptance Criteria

## 1. Project Scaffolding
- [x] Create Vite + React project
- [x] Install dependencies
- [x] Verify `npm run dev` works

**AC:** App renders in browser at localhost with no errors.

---

## 2. Utility Modules
- [ ] `calendarUtils.js` — `getDaysInMonth`, `getFirstDayOfWeek`, `formatDateKey`, `isToday`
- [ ] `storage.js` — `loadEvents`, `saveEvents` (localStorage JSON)

**AC:** Functions return correct values for edge cases (Feb leap year, month boundaries, empty storage).

---

## 3. Calendar Grid (Read-Only Month View)
- [ ] `CalendarGrid.jsx` — renders 6×7 grid for current month
- [ ] `DayCell.jsx` — single day cell with event count indicator
- [ ] Highlight today's date
- [ ] Gray out overflow days from prev/next month

**AC:** Grid shows correct days for any month/year. Today is visually highlighted. Event dots appear on days with events.

---

## 4. Calendar Header (Navigation)
- [ ] `CalendarHeader.jsx` — prev/next month buttons
- [ ] "Today" button returns to current month
- [ ] Display month name and year (e.g. "June 2026")

**AC:** Clicking prev/next changes the displayed month. Today button snaps back to the current month.

---

## 5. Event Modal (Add / Edit / Delete)
- [ ] `EventModal.jsx` — opens on day click (add) or event click (edit)
- [ ] Fields: title (required), time (optional), description (optional)
- [ ] Delete button on existing events
- [ ] Validation: title non-empty, max 100 chars

**AC:** Can add a new event, edit an existing event, and delete an event. Empty title is rejected with an error message.

---

## 6. State Management
- [ ] `events` state in `App.jsx` synced to localStorage on every change
- [ ] Pass events + handlers down to grid and modal components

**AC:** Events persist across page reload (verified via localStorage).

---

## 7. Responsive CSS
- [ ] Mobile: single-column layout, full-width cells
- [ ] Desktop: 7-column grid
- [ ] Modal overlays correctly on all screen sizes
- [ ] Touch-friendly tap targets

**AC:** App is usable and visually correct at 375px (mobile) and 1440px (desktop) viewport widths.

---

## 8. Polish & Verification
- [ ] `npm run build` succeeds with no errors
- [ ] All features smoke-tested end-to-end
- [ ] No console errors in browser

**AC:** Production build succeeds. All CRUD operations on events work. Layout is responsive.
