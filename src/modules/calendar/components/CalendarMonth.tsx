import React from 'react';
import '../../../assets/style/main.scss'
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';

const CalendarMonth = () => {
  return (
    <div className="calendar-month">
      <CalendarHeader />
      <CalendarDay />
    </div>
  )
}

export default CalendarMonth;
