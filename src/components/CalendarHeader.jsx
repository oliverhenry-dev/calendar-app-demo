import { MONTH_NAMES } from '../utils/calendarUtils'

function CalendarHeader({ year, month, onPrev, onNext, onToday }) {
  return (
    <header className="calendar-header">
      <button className="nav-btn" onClick={onPrev} aria-label="Previous month">
        <span aria-hidden="true">‹</span>
      </button>
      <h2 className="month-title">
        {MONTH_NAMES[month]} {year}
      </h2>
      <button className="nav-btn" onClick={onNext} aria-label="Next month">
        <span aria-hidden="true">›</span>
      </button>
      <button className="today-btn" onClick={onToday} aria-label="Go to today">
        Today
      </button>
    </header>
  )
}

export default CalendarHeader
