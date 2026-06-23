import { getDaysInMonth, getFirstDayOfWeek, formatDateKey, DAY_HEADERS, MONTH_NAMES } from '../utils/calendarUtils'
import DayCell from './DayCell'

function CalendarGrid({ year, month, events, onDayClick, onEventClick }) {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)

  // Previous month overflow
  const prevMonth = month === 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

  // Build 42 cells (6 rows × 7 cols)
  const cells = []

  for (let i = 0; i < firstDay; i++) {
    const day = daysInPrevMonth - firstDay + 1 + i
    const key = formatDateKey(prevYear, prevMonth, day)
    cells.push(
      <DayCell
        key={`prev-${i}`}
        year={prevYear}
        month={prevMonth}
        day={day}
        isCurrentMonth={false}
        events={events[key]}
        onDayClick={onDayClick}
        onEventClick={onEventClick}
      />
    )
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const key = formatDateKey(year, month, day)
    cells.push(
      <DayCell
        key={`cur-${day}`}
        year={year}
        month={month}
        day={day}
        isCurrentMonth={true}
        events={events[key]}
        onDayClick={onDayClick}
        onEventClick={onEventClick}
      />
    )
  }

  const remaining = 42 - cells.length
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year

  for (let day = 1; day <= remaining; day++) {
    const key = formatDateKey(nextYear, nextMonth, day)
    cells.push(
      <DayCell
        key={`next-${day}`}
        year={nextYear}
        month={nextMonth}
        day={day}
        isCurrentMonth={false}
        events={events[key]}
        onDayClick={onDayClick}
        onEventClick={onEventClick}
      />
    )
  }

  // Split cells into rows of 7
  const rows = []
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7))
  }

  return (
    <table className="calendar-grid" role="grid" aria-label={`Calendar for ${MONTH_NAMES[month]} ${year}`}>
      <thead className="calendar-grid__header">
        <tr>
          {DAY_HEADERS.map((d) => (
            <th key={d} className="day-header" scope="col">{d}</th>
          ))}
        </tr>
      </thead>
      <tbody className="calendar-grid__body">
        {rows.map((rowCells, i) => (
          <tr key={i}>{rowCells}</tr>
        ))}
      </tbody>
    </table>
  )
}

export default CalendarGrid
