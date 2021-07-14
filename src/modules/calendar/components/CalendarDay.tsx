import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import useCalendarActions from '../hooks/useCalendarActions';
import useCalendarSelectors from '../hooks/useCalendarSelectors';
import { Reminder } from '../models/Remider';
import ReminderFormModal from './modals/ReminderInsertModal';

interface ICalendarDayProps {
  day: number;
}

const CalendarDay = (props: ICalendarDayProps) => {
  const [showReminderInsertModal, setShowReminderInsertModal] = useState(false);
  const { updateDay } = useCalendarActions();
  const { reminders, selectedYear, selectedMonth } = useCalendarSelectors();

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

  const getDateReminders = () => {
    return reminders.get(new Date(selectedYear, selectedMonth, props.day).toLocaleDateString('en-US')) ?? [];
  }

  const getReminderElement = (reminder: Reminder) =>
    <div>
      <div className="bullet" style={{ backgroundColor: reminder.color, aspectRatio: "1" }}></div>
      <span>{reminder.time}</span>
      <span>{reminder.title}</span>
    </div>;

  return (
    <div className="calendar-month__day" style={{ aspectRatio: "1" }}>
      <div className="calendar-month__day-header">
        {props.day}
      </div>
      <div className="calendar-month__day-body">
        {
          getDateReminders().slice(0,3).map((reminder: Reminder) => getReminderElement(reminder))
        }
        {
          getDateReminders().length > 0
          && < section >
            < Button size="sm" variant="link">
              {
                getDateReminders().length > 3
                ? `${getDateReminders().length - 3}+ manage all`
                : 'manage reminder(s)'
              }
            </Button>
          </section>
        }
      </div >
      <div className="calendar-month__day-footer">
        <Button className="calendar-month__day-button-add" size="sm" variant="secondary" block onClick={addReminderClickCallback}>
          Add Reminder
        </Button>
      </div>
      <ReminderFormModal
        show={showReminderInsertModal}
        handleClose={handleCloseReminderCallback}
      />
    </div >
  )
}

export default CalendarDay;
