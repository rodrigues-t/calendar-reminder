import React from 'react'
import CalendarMonth from '../modules/calendar/components/CalendarMonth'
import CalendarMonthHeader from '../modules/calendar/components/CalendarMonthHeader';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <CalendarMonthHeader />
      <CalendarMonth />
    </div>
  );
};

export default CalendarView;

