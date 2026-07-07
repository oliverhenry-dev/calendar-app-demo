import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { getMonthName } from '../utils/calendarUtils';

const CalendarHeader = ({ currentMonth, currentYear, onPrevMonth, onNextMonth, onToday }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {getMonthName(currentMonth)} {currentYear}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToday}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Today
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={onPrevMonth}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onNextMonth}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
