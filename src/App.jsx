import { useState, useEffect, useCallback } from 'react'
import CalendarHeader from './components/CalendarHeader'
import CalendarGrid from './components/CalendarGrid'
import EventModal from './components/EventModal'
import { formatDateKey } from './utils/calendarUtils'
import { loadEvents, saveEvents } from './utils/storage'

function App() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [events, setEvents] = useState(() => loadEvents())

  const [modalOpen, setModalOpen] = useState(false)
  const [modalEvent, setModalEvent] = useState(null)
  const [modalDateKey, setModalDateKey] = useState('')

  // Persist events to localStorage on every change
  useEffect(() => {
    saveEvents(events)
  }, [events])

  const handlePrev = useCallback(() => {
    setMonth((m) => {
      if (m === 0) { setYear((y) => y - 1); return 11 }
      return m - 1
    })
  }, [])

  const handleNext = useCallback(() => {
    setMonth((m) => {
      if (m === 11) { setYear((y) => y + 1); return 0 }
      return m + 1
    })
  }, [])

  const handleToday = useCallback(() => {
    const now = new Date()
    setYear(now.getFullYear())
    setMonth(now.getMonth())
  }, [])

  const handleDayClick = useCallback((y, m, day) => {
    const key = formatDateKey(y, m, day)
    setModalDateKey(key)
    setModalEvent(null)
    setModalOpen(true)
  }, [])

  const handleEventClick = useCallback((evt, y, m, day) => {
    const key = formatDateKey(y, m, day)
    setModalDateKey(key)
    setModalEvent(evt)
    setModalOpen(true)
  }, [])

  const handleSave = useCallback((savedEvent) => {
    setEvents((prev) => {
      const dayEvents = prev[modalDateKey] || []
      const idx = dayEvents.findIndex((e) => e.id === savedEvent.id)
      let updated
      if (idx >= 0) {
        updated = [...dayEvents]
        updated[idx] = savedEvent
      } else {
        updated = [...dayEvents, savedEvent]
      }
      return { ...prev, [modalDateKey]: updated }
    })
  }, [modalDateKey])

  const handleDelete = useCallback((eventId) => {
    setEvents((prev) => {
      const dayEvents = (prev[modalDateKey] || []).filter((e) => e.id !== eventId)
      const next = { ...prev }
      if (dayEvents.length === 0) {
        delete next[modalDateKey]
      } else {
        next[modalDateKey] = dayEvents
      }
      return next
    })
  }, [modalDateKey])

  return (
    <div className="app">
      <CalendarHeader
        year={year}
        month={month}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
      />
      <main id="main-content" tabIndex={-1}>
        <CalendarGrid
          year={year}
          month={month}
          events={events}
          onDayClick={handleDayClick}
          onEventClick={handleEventClick}
        />
      </main>
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
        event={modalEvent}
        dateKey={modalDateKey}
      />
    </div>
  )
}

export default App
