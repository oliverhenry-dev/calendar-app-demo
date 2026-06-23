/**
 * Get the number of days in a given month.
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

/**
 * Get the day-of-week (0=Sun, 6=Sat) for the 1st of the given month.
 */
export function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay()
}

/**
 * Build a stable key for a date: "YYYY-MM-DD"
 */
export function formatDateKey(year, month, day) {
  const m = String(month + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

/**
 * Check whether a given year/month/day is today.
 */
export function isToday(year, month, day) {
  const now = new Date()
  return (
    now.getFullYear() === year &&
    now.getMonth() === month &&
    now.getDate() === day
  )
}

/**
 * Month names for display.
 */
export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * Day-of-week headers (Sun–Sat).
 */
export const DAY_HEADERS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
