import { isToday, MONTH_NAMES } from '../utils/calendarUtils'

function DayCell({ year, month, day, isCurrentMonth, events, onDayClick, onEventClick }) {
  const today = isToday(year, month, day)
  const eventList = events || []

  const handleDayKeyDown = (e) => {
    if (isCurrentMonth && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onDayClick(year, month, day)
    }
  }

  const handleEventKeyDown = (e, evt) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      onEventClick(evt, year, month, day)
    }
  }

  const dateLabel = `${MONTH_NAMES[month]} ${day}, ${year}`
  const cellLabel = today
    ? `Today, ${dateLabel}`
    : dateLabel

  return (
    <td
      className={`day-cell ${isCurrentMonth ? '' : 'day-cell--other'} ${today ? 'day-cell--today' : ''}`}
      onClick={() => isCurrentMonth && onDayClick(year, month, day)}
      onKeyDown={handleDayKeyDown}
      tabIndex={isCurrentMonth ? 0 : -1}
      role="gridcell"
      aria-label={cellLabel}
      aria-disabled={!isCurrentMonth}
    >
      <span className="day-number" aria-hidden="true">{day}</span>
      {eventList.length > 0 && (
        <ul className="day-events" aria-label={`${eventList.length} event${eventList.length !== 1 ? 's' : ''}`}>
          {eventList.slice(0, 3).map((evt) => (
            <li key={evt.id}>
              <div
                className="event-pill"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation()
                  onEventClick(evt, year, month, day)
                }}
                onKeyDown={(e) => handleEventKeyDown(e, evt)}
                aria-label={`${evt.time ? evt.time + ' ' : ''}${evt.title}`}
              >
                {evt.time && <span className="event-time">{evt.time}</span>}
                <span className="event-title">{evt.title}</span>
              </div>
            </li>
          ))}
          {eventList.length > 3 && (
            <li>
              <span className="event-more" aria-label={`${eventList.length - 3} more events`}>
                +{eventList.length - 3} more
              </span>
            </li>
          )}
        </ul>
      )}
    </td>
  )
}

export default DayCell
