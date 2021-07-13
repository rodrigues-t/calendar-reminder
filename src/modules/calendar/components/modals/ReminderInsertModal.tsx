import React from 'react';
import { Modal } from 'react-bootstrap';
import ReminderInsertForm from '../forms/ReminderInsertForm';

interface IAddReminderModalProps {
  show: boolean;
  handleClose: () => void;
}

const ReminderFormModal = (props: IAddReminderModalProps) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new reminder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReminderInsertForm onCancel={props.handleClose} onInsert={() => {}} />
      </Modal.Body>
    </Modal>
  )
}

export default ReminderFormModal;
