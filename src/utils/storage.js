const STORAGE_KEY = 'calendar-events';

/**
 * Load events from localStorage
 * @returns {Object} Events object keyed by date
 */
export function loadEvents() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Failed to load events:', error);
    return {};
  }
}

/**
 * Save events to localStorage
 * @param {Object} events - Events object keyed by date
 */
export function saveEvents(events) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.error('Failed to save events:', error);
  }
}
