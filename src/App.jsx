import { useState, useEffect } from 'react';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import { loadEvents, saveEvents } from './utils/storage';
import './App.css';

const App = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  // Load events from localStorage on mount
  useEffect(() => {
    const loadedEvents = loadEvents();
    setEvents(loadedEvents);
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleToday = () => {
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
  };

  const handleDayClick = (dateKey) => {
    setSelectedDate(dateKey);
    setEventToEdit(null);
    setShowModal(true);
  };

  const handleSaveEvent = (dateKey, eventData) => {
    setEvents((prev) => {
      const dayEvents = prev[dateKey] || [];
      const existingIndex = dayEvents.findIndex((e) => e.id === eventData.id);

      let updatedDayEvents;
      if (existingIndex >= 0) {
        // Update existing event
        updatedDayEvents = [...dayEvents];
        updatedDayEvents[existingIndex] = eventData;
      } else {
        // Add new event
        updatedDayEvents = [...dayEvents, eventData];
      }

      return {
        ...prev,
        [dateKey]: updatedDayEvents,
      };
    });
  };

  const handleDeleteEvent = (dateKey, eventId) => {
    setEvents((prev) => {
      const dayEvents = prev[dateKey] || [];
      const updatedDayEvents = dayEvents.filter((e) => e.id !== eventId);

      if (updatedDayEvents.length === 0) {
        const { [dateKey]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [dateKey]: updatedDayEvents,
      };
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate(null);
    setEventToEdit(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
        />

        <CalendarGrid
          currentMonth={currentMonth}
          currentYear={currentYear}
          selectedDate={selectedDate}
          events={events}
          onDayClick={handleDayClick}
        />

        <EventModal
          isOpen={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          selectedDate={selectedDate}
          eventToEdit={eventToEdit}
        />
      </div>
    </div>
  );
};

export default App;
