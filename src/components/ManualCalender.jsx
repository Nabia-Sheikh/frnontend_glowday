import React, { useState } from "react"

function ManualCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [unavailableDates, setUnavailableDates] = useState([])
  const [activeSlot, setActiveSlot] = useState(null)

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const currentWeek = getCurrentWeek(currentDate)
  const currentDay = currentDate.getDate()
  const activeDate = selectedDate ? selectedDate.getDate() : null
  const activeMonth = selectedDate ? selectedDate.getMonth() : null
  const activeYear = selectedDate ? selectedDate.getFullYear() : null

  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  }
  const formatter = new Intl.DateTimeFormat("en-US", options)
  const pickedDate = formatter.format(selectedDate)

  function getCurrentWeek(date) {
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6 : 1)
    return new Date(date.setDate(diff))
  }

  function handleDateClick(date) {
    setSelectedDate(date)
  }

  function handleSlotClick(slot) {
    setActiveSlot(slot)
  }

  function handlePrevClick() {
    const prevWeek = new Date(currentWeek)
    prevWeek.setDate(prevWeek.getDate() - 7)
    setCurrentDate(prevWeek)
  }

  function handleNextClick() {
    const nextWeek = new Date(currentWeek)
    nextWeek.setDate(nextWeek.getDate() + 7)
    setCurrentDate(nextWeek)
  }

  return (
    <div className="datepicker datepicker--open">
      <header>
        <span className="datepicker__pickeddate">
          {`${currentDay}th ${currentMonth} ${currentYear} ${activeSlot}`}
        </span>
        <nav className="datepicker__controls">
          <button
            disabled={
              currentDate.getTime() < currentWeek.getTime() ? true : false
            }
            type="button"
            className={`clickable ${
              currentDate.getTime() < currentWeek.getTime() ? "disabled" : ""
            }`}
            onClick={handlePrevClick}
          >
            <img
              src="/static/img/icons/charcoal-medium/chevron-left.svg"
              alt="Week Before"
            />
          </button>
          <button type="button" className="clickable" onClick={handleNextClick}>
            <img
              src="/static/img/icons/charcoal-medium/chevron-right.svg"
              alt="Week After"
            />
          </button>
        </nav>
      </header>
      <div className="datepicker__dates">
        {days.map((day, i) => {
          const date = new Date(currentWeek)
          date.setDate(date.getDate() + i)
          const today = new Date()
          const unavailable = date.getTime() < today.getTime()
          const className = `datepicker__date${
            date.getMonth() !== currentMonth
              ? " datepicker__date__unavailable"
              : date.getDate() === activeDate &&
                date.getMonth() === activeMonth &&
                date.getFullYear() === activeYear
              ? " datepicker__date--active"
              : ""
          }`

          return (
            <span className="datepicker__day" key={i}>
              <span>{day}</span>
              <button
                type="button"
                className={className}
                onClick={() => setSelectedDate(date)}
                disabled={unavailable}
              >
                {date.getDate()}
              </button>
            </span>
          )
        })}
      </div>
      <div className="datepicker__slots">
        {/* Render the slots here, using similar logic as above for handling active state */}
        <button
          type="button"
          className={`datepicker__slot${
            activeSlot === "14:00" ? " datepicker__slot--active" : ""
          }`}
          data-value="14:00"
          onClick={() => handleSlotClick("14:00")}
        >
          14:00
        </button>
        <button
          type="button"
          className={`datepicker__slot${
            activeSlot === "16:30" ? " datepicker__slot--active" : ""
          }`}
          data-value="16:30"
          onClick={() => handleSlotClick("16:30")}
        >
          16:30
        </button>
        <button
          type="button"
          className={`datepicker__slot${
            activeSlot === "16:45" ? " datepicker__slot--active" : ""
          }`}
          data-value="16:45"
          onClick={() => handleSlotClick("16:45")}
        >
          16:45
        </button>
        <button
          type="button"
          className={`datepicker__slot${
            activeSlot === "17:00" ? " datepicker__slot--active" : ""
          }`}
          data-value="17:00"
          onClick={() => handleSlotClick("17:00")}
        >
          17:00
        </button>
      </div>
    </div>
  )
}

export default ManualCalendar
