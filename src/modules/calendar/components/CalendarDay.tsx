import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import useCalendarActions from '../hooks/useCalendarActions';
import ReminderFormModal from './modals/ReminderInsertModal';

interface ICalendarDayProps {
  day: number;
}

const CalendarDay = (props: ICalendarDayProps) => {
  const [showReminderInsertModal, setShowReminderInsertModal] = useState(false);
  const { updateDay } = useCalendarActions();

  const addReminderClickCallback = useCallback(
    () => {
      updateDay(props.day);
      setShowReminderInsertModal(true);
    },
    [setShowReminderInsertModal, updateDay, props.day],
  );

  const handleCloseReminderCallback = useCallback(
    () => {
      setShowReminderInsertModal(false);
      updateDay(null);
    },
    [setShowReminderInsertModal, updateDay],
  );

  return (
    <div className="calendar-month__day" style={{ aspectRatio: "1" }}>
      <div className="calendar-month__day-header">
        { props.day }
      </div>
      <div className="calendar-month__day-body">

      </div>
      <div className="calendar-month__day-footer">
        <Button size="sm" variant="secondary" block onClick={addReminderClickCallback}>Add Reminder</Button>
      </div>
      <ReminderFormModal
        show={showReminderInsertModal} 
        handleClose={handleCloseReminderCallback}
      />
    </div>
  )
}

export default CalendarDay;
