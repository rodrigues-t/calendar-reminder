import React from 'react';
import { DAY_OF_WEEK_SHORT_NAME } from '../../../shared/services/Date';

const CalendarHeader = () => {
  return (
    <>
      {
        DAY_OF_WEEK_SHORT_NAME.map((week: string) => <div className="calendar-month__header" key={week}>{week}</div>)
      }
    </>
  )
}

export default CalendarHeader;
