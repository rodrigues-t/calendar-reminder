import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IReminderValidation, validateCalendarEditForm } from '../../helpers/Validator';
import { Reminder } from '../../models/Remider';

interface IReminderEditFormProps {
  onCancel: () => void;
  onUpdate: (oldReminder: Reminder, newReminder: Reminder) => void;
  reminder: Reminder;
}

const ReminderEditForm = (props: IReminderEditFormProps) => {
  const [reminderValidation, setReminderValidation] = useState<IReminderValidation | null>(null);
  const [reminder, setReminder] = useState<Reminder>({ ...props.reminder });

  const getDateInputFormat = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const [date, setDate] = useState<string>(getDateInputFormat(props.reminder.date));

  const isFormValid = () => reminderValidation
    ? Object.values(reminderValidation).reduce((acc, value) => acc && value.isValid, true)
    : false;

  const onUpdate = (e: any) => {
    e.preventDefault();
    const validation = validateCalendarEditForm(reminder, date);
    if (Object.values(validation).reduce((acc, value) => acc && value.isValid, true)) {
      props.onUpdate(props.reminder, reminder);
      setReminderValidation(null);
    } else {
      setReminderValidation(validation);
    }
  }

  const onInputChange = (e: any) => {
    const value = e.target.value;

    if (e.target.name === 'date') {
      const date = new Date(`${value}T${reminder.time}`)
      setDate(getDateInputFormat(date));
      setReminder({ ...reminder, date });
    } else {
      setReminder({ ...reminder, [e.target.name]: value });
    }
  }

  return (
    <Form validated={isFormValid()}>
      <Form.Group controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          value={date}
          name="date"
          type="date"
          onChange={onInputChange}
          required
          isInvalid={(reminderValidation ? !reminderValidation.date.isValid : false)}
        />
        {
          (reminderValidation ? !reminderValidation.date.isValid : false) &&
          <Form.Control.Feedback type="invalid">
            {reminderValidation?.date.error}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={reminder.title}
          name="title"
          type="text"
          onChange={onInputChange}
          placeholder="Enter reminder title"
          required
          isInvalid={(reminderValidation ? !reminderValidation.title.isValid : false)}
        />
        {
          (reminderValidation ? !reminderValidation.title.isValid : false) &&
          <Form.Control.Feedback type="invalid">
            {reminderValidation?.title.error}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          value={reminder.time}
          name="time" type="time"
          onChange={onInputChange}
          required
          isInvalid={(reminderValidation ? !reminderValidation.time.isValid : false)}
        />
        {
          (reminderValidation ? !reminderValidation.time.isValid : false) &&
          <Form.Control.Feedback type="invalid">
            {reminderValidation?.time.error}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group controlId="formBasicTime">
        <Form.Label>Color</Form.Label>
        <Form.Control value={reminder.color} name="color" type="color" onChange={onInputChange} required />
      </Form.Group>
      <Form.Group>
        <Button variant="secondary" className="mr-1" type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="button" onClick={onUpdate}>
          Save
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ReminderEditForm;
