const STORAGE_KEY = 'calendar-events'

/**
 * Load all events from localStorage.
 * Returns an object keyed by "YYYY-MM-DD", each value an array of events.
 * Example: { "2026-06-23": [{ id, title, time, description }] }
 */
export function loadEvents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/**
 * Save the full events object to localStorage.
 */
export function saveEvents(events) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
}
