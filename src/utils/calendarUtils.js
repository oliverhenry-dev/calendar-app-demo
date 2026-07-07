/**
 * Get the number of days in a given month
 * @param {number} year - The year
 * @param {number} month - The month (0-11)
 * @returns {number} Number of days in the month
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get the day of week for the first day of a month
 * @param {number} year - The year
 * @param {number} month - The month (0-11)
 * @returns {number} Day of week (0 = Sunday, 6 = Saturday)
 */
export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Format a date as YYYY-MM-DD key
 * @param {number} year - The year
 * @param {number} month - The month (0-11)
 * @param {number} day - The day of month
 * @returns {string} Formatted date key
 */
export function formatDateKey(year, month, day) {
  const monthStr = String(month + 1).padStart(2, '0');
  const dayStr = String(day).padStart(2, '0');
  return `${year}-${monthStr}-${dayStr}`;
}

/**
 * Get month name from month index
 * @param {number} month - The month (0-11)
 * @returns {string} Full month name
 */
export function getMonthName(month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month];
}

/**
 * Get abbreviated day names
 * @returns {string[]} Array of day abbreviations
 */
export function getDayNames() {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}

/**
 * Parse a date key back to year, month, day
 * @param {string} dateKey - Date key in YYYY-MM-DD format
 * @returns {{ year: number, month: number, day: number }}
 */
export function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return { year, month: month - 1, day };
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
