import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface IReminderInsertFormProps {
  onCancel: () => void;
  onInsert: () => void;
}

const ReminderInsertForm = (props: IReminderInsertFormProps) => {

  const onInsertCallback = useCallback(
    e => {
      e.preventDefault();
      props.onInsert()
    },
    [props.onInsert],
  );

  return (
    <Form>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter reminder title" required />
      </Form.Group>
      <Form.Group controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" required />
      </Form.Group>
      <Button variant="secondary" type="button" onClick={props.onCancel}>
        Cancel
      </Button>
      <Button variant="primary" type="button" onClick={onInsertCallback}>
        Save
      </Button>
    </Form>
  )
}

export default ReminderInsertForm;
