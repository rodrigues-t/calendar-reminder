import React from 'react';

interface ICalendarDayProps {
  month: number;
  day: number;
}

const CalendarDay = () => {
  return (
    <div className="calendar-month__day" style={{ aspectRatio: "1" }}>
      1
    </div>
  )
}

export default CalendarDay;
