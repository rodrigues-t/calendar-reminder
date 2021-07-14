import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Reminder } from '../../models/Remider';

interface IReminderInsertFormProps {
  onCancel: () => void;
  onInsert: (reminder: Reminder) => void;
}

const ReminderInsertForm = (props: IReminderInsertFormProps) => {
  const [reminder, setReminder] = useState<Reminder>({
    id: 0,
    title: '',
    date: new Date(),
    time: '',
    color: '#000000',
  });

  const resetForm = () => {
    setReminder({
      id: 0,
      title: '',
      date: new Date(),
      time: '',
      color: '#000000',
    });
  }

  const onInsertCallback = useCallback(
    e => {
      e.preventDefault();
      props.onInsert(reminder);
      resetForm();
    },
    [props.onInsert, reminder, resetForm],
  );

  const onInputChange = (e: any) => {
    const value = e.target.value;
    setReminder({ ...reminder, [e.target.name]: value });
  }

  return (
    <Form>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={reminder.title} name="title" type="text" onChange={onInputChange} placeholder="Enter reminder title" required />
      </Form.Group>
      <Form.Group controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control value={reminder.time} name="time" type="time" onChange={onInputChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicTime">
        <Form.Label>Color</Form.Label>
        <Form.Control value={reminder.color} name="color" type="color" onChange={onInputChange} required />
      </Form.Group>
      <Form.Group>
        <Button variant="secondary" className="mr-1" type="submit" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="button" onClick={onInsertCallback}>
          Save
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ReminderInsertForm;
