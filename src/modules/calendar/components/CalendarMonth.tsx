import React from 'react';
import '../../../assets/style/main.scss'
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';
import {
  getLastDateOfMonth as _getLastDateOfMonth,
  getFirstDayOfMonth as _getFirstDayOfMonth,
} from '../../../shared/services/Date';

const CalendarMonth = () => {
  const month = 6;

  const getLastDateOfMonth = () => _getLastDateOfMonth(new Date().getFullYear(), month);
  const getFirstDayOfMonth = () => _getFirstDayOfMonth(new Date().getFullYear(), month);

  const getCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = getFirstDayOfMonth();
    
    for(let i = 0; i < (getLastDateOfMonth() + firstDayOfMonth) ; i++) {
      if( i < firstDayOfMonth) {
        days.push(<div key={i} />)
      } else {
        days.push(<CalendarDay day={i - firstDayOfMonth + 1} key={i} />);
      }
    }
    return days;
  }
  
  return (
    <div className="calendar-month">
      <CalendarHeader />
      {
        getCalendarDays()
      }      
    </div>
  )
}

export default CalendarMonth;
