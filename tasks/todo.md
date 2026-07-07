# Calendar App - Implementation Tasks

## Project Overview
Build a simple calendar app with month view, event management, and localStorage persistence.

## Tasks

### 1. Setup Project Structure ✅
- [x] Create component directory structure
- [x] Create utility files
- [x] Verify build works

**Acceptance Criteria:**
- Directory structure: `src/components/`, `src/utils/`
- Empty component files created
- `npm run build` succeeds

### 2. Implement Calendar Utilities ✅
- [x] Create `src/utils/calendarUtils.js` with date helper functions
- [x] `getDaysInMonth(year, month)` - returns number of days
- [x] `getFirstDayOfMonth(year, month)` - returns day of week (0-6)
- [x] `formatDateKey(year, month, day)` - returns "YYYY-MM-DD" string
- [x] `getMonthName(month)` - returns month name string
- [x] `getDayNames()` - returns array of day abbreviations

**Acceptance Criteria:**
- All utility functions are pure and testable
- Date key format is consistent "YYYY-MM-DD"
- Handles edge cases (leap years, different month lengths)

### 3. Implement localStorage Persistence ✅
- [x] Create `src/utils/storage.js`
- [x] `loadEvents()` - retrieves events from localStorage
- [x] `saveEvents(events)` - saves events to localStorage
- [x] Events stored as `{ [dateKey]: Event[] }` structure
- [x] Each event has: `id`, `title`, `time`, `description`

**Acceptance Criteria:**
- Events persist across page reloads
- Graceful handling of corrupted data
- Default to empty object if no events exist

### 4. Implement CalendarHeader Component ✅
- [x] Create `src/components/CalendarHeader.jsx`
- [x] Display current month and year
- [x] Previous/Next month navigation buttons
- [x] "Today" button to return to current month
- [x] Responsive layout

**Acceptance Criteria:**
- Shows month name and year (e.g., "July 2026")
- Left arrow goes to previous month
- Right arrow goes to next month
- "Today" button resets to current date's month
- Uses Lucide React icons for arrows

### 5. Implement DayCell Component ✅
- [x] Create `src/components/DayCell.jsx`
- [x] Display day number
- [x] Show event indicators (dots or preview)
- [x] Highlight current day
- [x] Click handler to select day
- [x] Visual distinction for days outside current month

**Acceptance Criteria:**
- Current day has distinct highlight (ring or background)
- Days with events show visual indicator
- Days outside month are dimmed
- Clicking a day triggers selection callback

### 6. Implement CalendarGrid Component ✅
- [x] Create `src/components/CalendarGrid.jsx`
- [x] Render 6×7 grid of DayCell components
- [x] Calculate and place days correctly
- [x] Handle month transitions (previous/next month days)

**Acceptance Criteria:**
- Grid always shows 6 rows (42 cells)
- First row starts with correct day of week
- Previous month's trailing days shown in gray
- Next month's leading days shown in gray
- Current month days are fully opaque

### 7. Implement EventModal Component ✅
- [x] Create `src/components/EventModal.jsx`
- [x] Add event form (title, time, description)
- [x] Edit existing event (pre-filled form)
- [x] Delete event button
- [x] Form validation
- [x] Close on backdrop click or escape key

**Acceptance Criteria:**
- Modal appears centered on screen with backdrop
- Title field is required (validation error if empty)
- Time field is optional (HH:MM format)
- Description field is optional (textarea)
- Save button creates/updates event
- Delete button shows confirmation
- Escape key closes modal
- Clicking outside modal closes it

### 8. Implement App State Management ✅
- [x] Update `src/App.jsx` with state management
- [x] State: currentMonth, currentYear, selectedDate, events, showModal, editingEvent
- [x] Wire up all components
- [x] Load events from localStorage on mount
- [x] Save events to localStorage on change

**Acceptance Criteria:**
- Calendar renders with current month on load
- Navigation updates the calendar grid
- Clicking a day opens modal with that date's events
- Adding/editing/deleting events updates both state and localStorage
- Page refresh preserves all events

### 9. Style with Tailwind CSS ✅
- [x] Responsive design (mobile-first)
- [x] Clean, modern calendar styling
- [x] Proper spacing and typography
- [x] Hover and focus states
- [x] Modal animations/transitions

**Acceptance Criteria:**
- Works on mobile (320px+)
- Works on tablet (768px+)
- Works on desktop (1024px+)
- Consistent color scheme
- Accessible focus indicators

### 10. Final Polish and Testing ✅
- [x] Test all user flows
- [x] Verify localStorage persistence
- [x] Check responsive behavior
- [x] Run `npm run build` for production

**Acceptance Criteria:**
- Can add events to any day
- Can edit existing events
- Can delete events
- Events persist on page reload
- Calendar navigation works correctly
- No console errors
- Production build succeeds

## Definition of Done
- [x] All tasks completed
- [x] All acceptance criteria met
- [x] App runs without errors
- [x] Responsive on all screen sizes
- [x] Data persists in localStorage
