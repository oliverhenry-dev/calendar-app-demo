const DayCell = ({ day, isCurrentMonth, isToday, isSelected, events, onClick }) => {
  const hasEvents = events && events.length > 0;

  return (
    <button
      onClick={onClick}
      className={`
        relative min-h-[80px] sm:min-h-[100px] p-2 text-left border border-gray-200 transition-all
        ${isToday ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500 ring-offset-1' : 'bg-white'}
        ${isSelected && !isToday ? 'bg-gray-100 border-gray-400' : ''}
        ${!isCurrentMonth ? 'opacity-40' : ''}
        hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
      `}
    >
      <span
        className={`
          inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full
          ${isToday ? 'bg-blue-600 text-white' : ''}
          ${isSelected && !isToday ? 'bg-gray-200 text-gray-900' : ''}
          ${!isToday && !isSelected ? 'text-gray-700' : ''}
        `}
      >
        {day}
      </span>

      {hasEvents && (
        <div className="mt-1 space-y-1">
          {events.slice(0, 2).map((event, index) => (
            <div
              key={event.id || index}
              className="text-xs px-1 py-0.5 bg-blue-100 text-blue-800 rounded truncate"
            >
              {event.time && <span className="font-medium">{event.time} </span>}
              {event.title}
            </div>
          ))}
          {events.length > 2 && (
            <div className="text-xs text-gray-500 pl-1">
              +{events.length - 2} more
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default DayCell;
