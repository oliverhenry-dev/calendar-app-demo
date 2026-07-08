---
name: react-calendar-review
description: Review the React calendar app for correctness, accessibility, UX polish, and Tailwind best practices. Trigger with "review calendar", "check calendar components", or when auditing calendar state, event handling, or modal behavior.
argument-hint: "[component path or 'all']"
---

# /react-calendar-review

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](../../CONNECTORS.md).

Review the calendar app's React components, utilities, and styling for correctness, accessibility, and UX quality.

## Usage

```
/react-calendar-review [component path or "all"]
```

Review the specified component or the entire app: @$1

If no specific path is provided, review all components.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                   CALENDAR REVIEW                               │
├─────────────────────────────────────────────────────────────────┤
│  STANDALONE (always works)                                       │
│  ✓ Component correctness (state, props, side effects)           │
│  ✓ Accessibility (keyboard nav, ARIA, focus management)         │
│  ✓ UX polish (modal behavior, edge cases, feedback)             │
│  ✓ Tailwind usage (utility classes, responsive design)          │
│  ✓ Date utility correctness (leap years, month boundaries)      │
│  ✓ localStorage error handling                                  │
│  ✓ Actionable fixes with code examples                          │
├─────────────────────────────────────────────────────────────────┤
│  SUPERCHARGED (when you connect your tools)                      │
│  + Browser MCP: test modal interaction live                     │
│  + Lighthouse: run accessibility audit                          │
│  + Project tracker: link fixes to tickets                       │
└─────────────────────────────────────────────────────────────────┘
```

## Review Dimensions

### Component Correctness
- State management (unnecessary re-renders, stale closures)
- useEffect dependencies and cleanup
- Prop drilling vs context tradeoffs
- Event handler correctness (handleSaveEvent, handleDeleteEvent)
- Conditional rendering logic (modal open/close)

### Accessibility
- Keyboard navigation (Escape to close, Tab through modal)
- ARIA labels on interactive elements
- Focus management (auto-focus title input, focus trap in modal)
- Screen reader announcements for dynamic content
- Color contrast and focus-visible styling

### UX Polish
- Modal behavior (backdrop click, escape key, form reset)
- Delete confirmation flow
- Event display (truncation, "+N more" overflow)
- Today highlighting and selected state
- Responsive breakpoints (mobile → desktop)

### Date Utilities
- Leap year handling in getDaysInMonth
- Month boundary overflow (Dec → Jan navigation)
- Date key format consistency (YYYY-MM-DD)
- Timezone considerations

### Tailwind & Styling
- Responsive design patterns (sm:, md:, lg:)
- Consistent spacing and color tokens
- Transition and animation quality
- Scrollbar styling cross-browser

## Output

```markdown
## Calendar Review: [component or "full app"]

### Summary
[1-2 sentence overview of findings]

### Issues Found
| # | File | Line | Issue | Severity | Category |
|---|------|------|-------|----------|----------|
| 1 | [file] | [line] | [description] | 🔴/🟡/🟢 | [dimension] |

### Suggested Fixes
| # | File | Current | Proposed | Why |
|---|------|---------|----------|-----|
| 1 | [file] | [current code] | [fixed code] | [reason] |

### What Looks Good
- [Positive observations]

### Verdict
[Ship it / Fix these first / Needs rework]
```

## Tips

1. **Focus area** — Pass a component path to narrow scope: `/react-calendar-review src/components/EventModal.jsx`
2. **Full audit** — Run with no arguments for comprehensive review
3. **Accessibility focus** — Mention "accessibility" to prioritize a11y issues
