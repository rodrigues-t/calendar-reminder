import React from 'react';
import { Modal } from 'react-bootstrap';
import ReminderInsertForm from '../forms/ReminderInsertForm';
import { toast } from 'react-toastify';
import { Reminder } from '../../models/Remider';
import useCalendarSelectors from '../../hooks/useCalendarSelectors';
import useCalendarActions from '../../hooks/useCalendarActions';
import { getDestructedTime } from '../../../../shared/services/Date';
import useCalendarCurrentDate from '../../hooks/useCalendarCurrentDate';

interface IAddReminderModalProps {
  show: boolean;
  onClose: () => void;
}

const ReminderInsertModal = (props: IAddReminderModalProps) => {
  const { selectedDay, selectedMonth, selectedYear } = useCalendarSelectors();
  const { addReminder } = useCalendarActions();
  const { currentFormatedDate } = useCalendarCurrentDate();

  const onInsert = (reminder: Reminder) => {
    reminder.id = new Date().valueOf();
    const time = getDestructedTime(reminder.time);
    reminder.date = new Date(selectedYear, selectedMonth, selectedDay ?? 1, time.hour, time.min);
    addReminder(reminder);
    toast("Reminder added.");
  }
    
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          { `New reminder for the day  ${currentFormatedDate}` }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReminderInsertForm onCancel={props.onClose} onInsert={onInsert} />
      </Modal.Body>
    </Modal>
  )
}

export default ReminderInsertModal;
