import DayCell from './DayCell';
import { getDaysInMonth, getFirstDayOfMonth, formatDateKey, getDayNames } from '../utils/calendarUtils';

const CalendarGrid = ({ currentMonth, currentYear, selectedDate, events, onDayClick }) => {
  const dayNames = getDayNames();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Get days from previous month
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  // Get current date for highlighting today
  const today = new Date();
  const todayKey = formatDateKey(today.getFullYear(), today.getMonth(), today.getDate());

  // Generate calendar days
  const calendarDays = [];

  // Previous month's trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    calendarDays.push({
      day,
      month: prevMonth,
      year: prevYear,
      isCurrentMonth: false,
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      month: currentMonth,
      year: currentYear,
      isCurrentMonth: true,
    });
  }

  // Next month's leading days
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const remainingDays = 42 - calendarDays.length;
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      month: nextMonth,
      year: nextYear,
      isCurrentMonth: false,
    });
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Day name headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {dayNames.map((name) => (
          <div
            key={name}
            className="py-3 text-center text-sm font-semibold text-gray-600 uppercase"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((dayInfo, index) => {
          const dateKey = formatDateKey(dayInfo.year, dayInfo.month, dayInfo.day);
          const dayEvents = events[dateKey] || [];
          const isToday = dateKey === todayKey;
          const isSelected = selectedDate === dateKey;

          return (
            <DayCell
              key={`${dateKey}-${index}`}
              day={dayInfo.day}
              isCurrentMonth={dayInfo.isCurrentMonth}
              isToday={isToday}
              isSelected={isSelected}
              events={dayEvents}
              onClick={() => onDayClick(dateKey)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
