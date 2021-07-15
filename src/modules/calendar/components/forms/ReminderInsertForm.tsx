import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IReminderValidation, validateCalendarForm } from '../../helpers/Validator';
import { Reminder } from '../../models/Remider';

interface IReminderInsertFormProps {
  onCancel: () => void;
  onInsert: (reminder: Reminder) => void;
}

const ReminderInsertForm = (props: IReminderInsertFormProps) => {
  const [reminderValidation, setReminderValidation] = useState<IReminderValidation | null>(null);
  const [reminder, setReminder] = useState<Reminder>({
    id: 0,
    title: '',
    date: new Date(),
    time: '',
    color: '#000000',
  });

  const isFormValid = () => reminderValidation 
    ? Object.values(reminderValidation).reduce((acc, value) => acc && value.isValid, true)
    : false;

  const resetForm = () => {
    setReminder({
      id: 0,
      title: '',
      date: new Date(),
      time: '',
      color: '#000000',
    });
  }

  const onInsert = (e: any) => {
    e.preventDefault();
    const validation = validateCalendarForm(reminder);
    if(Object.values(validation).reduce((acc, value) => acc && value.isValid, true)) {
      props.onInsert(reminder);
      resetForm();
      setReminderValidation(null);
    } else {
      setReminderValidation(validation);
    }
  }

  const onInputChange = (e: any) => {
    const value = e.target.value;
    setReminder({ ...reminder, [e.target.name]: value });
  }

  return (
    <Form validated={isFormValid()}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          value={reminder.title} 
          name="title" 
          type="text" 
          onChange={onInputChange} 
          placeholder="Enter reminder title" 
          required
          isInvalid={ (reminderValidation ? !reminderValidation.title.isValid : false)}
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
          isInvalid={ (reminderValidation ? !reminderValidation.time.isValid : false)}
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
        <Button variant="secondary" className="mr-1" type="submit" onClick={props.onCancel}>
          Close
        </Button>
        <Button variant="primary" type="button" onClick={onInsert}>
          Save
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ReminderInsertForm;
