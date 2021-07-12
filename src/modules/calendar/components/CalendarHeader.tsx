import React from 'react';

const CalendarHeader = () => {
  const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      {
        dayOfWeekNames.map((week: string) => <div className="calendar-month__header" key={week}>{week}</div>)
      }
    </>
  )
}

export default CalendarHeader;
