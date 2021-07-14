import React from 'react';
import { Button } from 'react-bootstrap';
import useCalendarSelectors from '../hooks/useCalendarSelectors';
import { Reminder } from '../models/Remider';

interface ICalendarDayProps {
  day: number;
  onManageClick: (day: number) => void;
  onInsertClick: (day: number) => void;
}

const CalendarDay = (props: ICalendarDayProps) => {
  const { reminders, selectedYear, selectedMonth } = useCalendarSelectors();

  const onManageClick = () => props.onManageClick(props.day);
  const onInsertClick = () => props.onInsertClick(props.day);
  
  const getDateReminders = () =>
    reminders.get(new Date(selectedYear, selectedMonth, props.day).toLocaleDateString('en-US')) ?? [];

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
            < Button size="sm" variant="link" onClick={onManageClick}>
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
        <Button 
          className="calendar-month__day-button-add" 
          size="sm" 
          variant="secondary" 
          block 
          onClick={onInsertClick}
        >
          Add Reminder
        </Button>
      </div>
    </div >
  )
}

export default CalendarDay;
