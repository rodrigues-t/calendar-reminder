import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { sortReminderArray } from "../../helpers/ReminderHelper";
import useCalendarActions from "../../hooks/useCalendarActions";
import useCalendarCurrentDate from "../../hooks/useCalendarCurrentDate";
import useCalendarSelectors from "../../hooks/useCalendarSelectors";
import { Reminder } from "../../models/Remider";
import ReminderEditForm from "../forms/ReminderEditForm";
import ReminderItem from "./manage/ReminderItem";

interface IReminderManageModalProps {
  show: boolean;
  onClose: () => void;
}

const ReminderManageModal = (props: IReminderManageModalProps) => {
  const { reminders } = useCalendarSelectors();
  const { deleteReminder, editReminder } = useCalendarActions();
  const { currentFormatedDate } = useCalendarCurrentDate();
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
    
  const onDelete = (reminder: Reminder) => {
    deleteReminder(reminder);
    toast("Reminder deleted");
  };

  const onEdit = (reminder: Reminder) => {
    setEditingReminder(reminder);
  };

  const onUpdate = (oldReminder: Reminder, newReminder:Reminder) => {
    editReminder(oldReminder, newReminder);
    setEditingReminder(null);

    if(oldReminder.date.toDateString() === newReminder.date.toDateString()) {
      toast("Reminder updated");
    } else {
      toast(`Reminder updated and moved to ${newReminder.date.toLocaleDateString('en-US')}`);
    }
  };

  const onHide = () => {
    setEditingReminder(null);
    props.onClose();
  };

  const getReminders = useMemo(
    () => sortReminderArray([...(reminders.get(currentFormatedDate) ?? [])]),
    [reminders, currentFormatedDate]
  );

  return (
    <Modal show={props.show} onHide={onHide} animation={false}>
      <Modal.Header closeButton={!editingReminder}>
        <Modal.Title>          
          {
            editingReminder 
            ? 'Editing Reminder'
            : `Reminders for ${currentFormatedDate}`
          }
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="reminder-manage-modal">
        {
          editingReminder
          ? <ReminderEditForm reminder={editingReminder} onCancel={()=>setEditingReminder(null)} onUpdate={onUpdate} />
          : (
            getReminders.length > 0
            ? getReminders.map((reminder: Reminder) => 
                <ReminderItem key={`mri-${reminder.id}`} reminder={reminder} onDelete={onDelete} onEdit={onEdit} />)
            : <span>No reminders for today.</span>
          )
        }
      </Modal.Body>
    </Modal>
  );
}

export default ReminderManageModal;
