import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReminderFormModal from './modals/ReminderInsertModal';

interface ICalendarDayProps {
  //month: number;
  day: number;
}

const CalendarDay = (props: ICalendarDayProps) => {
  const [showReminderInsertModal, setShowReminderInsertModal] = useState(false);

  const addReminderClickCallback = useCallback(
    () => {
      setShowReminderInsertModal(true);
    },
    [setShowReminderInsertModal],
  );

  const handleCloseReminderCallback = useCallback(
    () => setShowReminderInsertModal(false),
    [setShowReminderInsertModal]
  );

  return (
    <div className="calendar-month__day" style={{ aspectRatio: "1" }}>
      <div>
        { props.day }
      </div>
      <div>

      </div>
      <div>
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
