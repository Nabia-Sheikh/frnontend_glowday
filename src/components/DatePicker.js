import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import "react-datepicker/dist/react-datepicker-cssmodules.css"
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { setHours, setMinutes } from "date-fns"
import moment from "moment/moment"
import { useEffect } from "react"

function TimeInput({ onChange, value }) {
  const [time, setTime] = useState(value)

  return (
    <input
      type="time"
      value={time}
      onChange={(e) => {
        setTime(e.target.value)
        onChange(e)
      }}
    />
  )
}

const MyPicker = ({ setSelectedTime, setSelectedDate }) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  )

  const minDate = new Date()
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 14)

  useEffect(() => {
    let date = moment(startDate)

    setSelectedTime(
      date.format("hh:mm A") + " - " + date.add(1, "hours").format("hh:mm A")
    )
    setSelectedDate(date.format("dddd, MMMM Do"))
  }, [startDate])

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeTime
      showTimeSelect
      minDate={minDate}
      maxDate={maxDate}
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 18)}
      dateFormat="MMMM d, yyyy h:mm aa"
      popperPlacement="top-end"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [5, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
            tether: false,
            altAxis: true,
          },
        },
      ]}
    />
  )
}

export default MyPicker
