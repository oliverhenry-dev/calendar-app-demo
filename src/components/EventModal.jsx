import { useState, useEffect, useRef } from 'react'

function EventModal({ isOpen, onClose, onSave, onDelete, event, dateKey }) {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const dialogRef = useRef(null)
  const previousFocus = useRef(null)
  const titleInputRef = useRef(null)

  const isEditing = !!event

  // Reset form when event or isOpen changes
  useEffect(() => {
    if (event) {
      setTitle(event.title || '')
      setTime(event.time || '')
      setDescription(event.description || '')
    } else {
      setTitle('')
      setTime('')
      setDescription('')
    }
    setError('')
  }, [event, isOpen])

  // Focus management and focus trap
  useEffect(() => {
    if (!isOpen) return

    // Save the element that had focus before opening
    previousFocus.current = document.activeElement

    // Focus the title input on open
    const timer = setTimeout(() => {
      titleInputRef.current?.focus()
    }, 50)

    // Focus trap: keep Tab inside the dialog
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const dialog = dialogRef.current
      if (!dialog) return

      const focusable = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      // Restore focus to the element that opened the modal
      previousFocus.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()

    if (!trimmed) {
      setError('Title is required')
      return
    }
    if (trimmed.length > 100) {
      setError('Title must be 100 characters or less')
      return
    }

    onSave({
      id: event?.id || Date.now().toString(),
      title: trimmed,
      time: time.trim() || undefined,
      description: description.trim() || undefined,
    })
    onClose()
  }

  const handleDelete = () => {
    if (event) {
      onDelete(event.id)
      onClose()
    }
  }

  const titleId = 'event-title'
  const descId = 'event-desc'
  const errorId = 'event-title-error'

  return (
    <div className="modal-overlay" aria-hidden="true">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading"
        aria-describedby="modal-date"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="modal-title" id="modal-heading">
          {isEditing ? 'Edit Event' : 'Add Event'}
        </h3>
        <p className="modal-date" id="modal-date">{dateKey}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={titleId}>Title *</label>
            <input
              id={titleId}
              ref={titleInputRef}
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError('') }}
              placeholder="Event title"
              maxLength={100}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
            />
            {error && (
              <span className="form-error" id={errorId} role="alert">
                {error}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="event-time">Time</label>
            <input
              id="event-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={descId}>Description</label>
            <textarea
              id={descId}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description"
              rows={3}
            />
          </div>

          <div className="modal-actions">
            {isEditing && (
              <button type="button" className="btn btn--danger" onClick={handleDelete} aria-label="Delete event">
                Delete
              </button>
            )}
            <div className="modal-actions__right">
              <button type="button" className="btn btn--secondary" onClick={onClose} aria-label="Cancel and close dialog">
                Cancel
              </button>
              <button type="submit" className="btn btn--primary">
                {isEditing ? 'Save' : 'Add'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventModal
