import React from 'react';
import { JsxElement } from 'typescript';
import '../../../assets/style/main.scss'
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';

const CalendarMonth = () => {
  const month = 6;

  const getLastDateOfMonth = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    const today = new Date();
    
    return new Date(today.getFullYear(), month, 1).getDay();
  }

  const getCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = getFirstDayOfMonth(2021, month);
    console.log(firstDayOfMonth)
    for(let i = 0; i < getLastDateOfMonth() - 1; i++) {
      if( i < firstDayOfMonth) {
        days.push(<div />)
      } else {
        days.push(<CalendarDay />);
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
