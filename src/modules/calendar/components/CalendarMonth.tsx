import React, { useCallback, useState } from 'react';
import '../../../assets/style/main.scss'
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';
import {
  getLastDateOfMonth as _getLastDateOfMonth,
  getFirstDayOfMonth as _getFirstDayOfMonth,
} from '../../../shared/services/Date';
import ReminderManageModal from './modals/ReminderManageModal';
import useCalendarActions from '../hooks/useCalendarActions';
import useCalendarSelectors from '../hooks/useCalendarSelectors';
import ReminderInsertModal from './modals/ReminderInsertModal';
import CalendarBlankDay from './CalendarBlankDay';

const CalendarMonth = () => {
  const { updateDay } = useCalendarActions();
  const { selectedMonth } = useCalendarSelectors();

  const [showManageModal, setShowManageModal] = useState(false);
  const [showInsertModal, setShowInsertModal] = useState(false);

  const onManageClickCallback = useCallback(
    (day: number): void => {
      updateDay(day);
      setShowManageModal(true)
    },
    [updateDay, setShowManageModal],
  );

  const onInsertClickCallback = useCallback(
    (day: number): void => {
      updateDay(day);
      setShowInsertModal(true)
    },
    [updateDay, setShowInsertModal],
  );

  const getLastDateOfMonth = (): number => _getLastDateOfMonth(new Date().getFullYear(), selectedMonth);
  const getFirstDayOfMonth = (): number => _getFirstDayOfMonth(new Date().getFullYear(), selectedMonth);
    
  const getCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = getFirstDayOfMonth();
    
    for(let i = 0; i < (getLastDateOfMonth() + firstDayOfMonth) ; i++) {
      if( i < firstDayOfMonth) {
        days.push(<CalendarBlankDay key={i} />)
      } else {
        days.push(<CalendarDay 
          day={i - firstDayOfMonth + 1} 
          key={i}
          onManageClick={onManageClickCallback} 
          onInsertClick={onInsertClickCallback} />);
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
      <ReminderManageModal show={showManageModal} onClose={() => setShowManageModal(false)} />
      <ReminderInsertModal show={showInsertModal} onClose={() => setShowInsertModal(false)}
      />
    </div>
  )
}

export default CalendarMonth;
