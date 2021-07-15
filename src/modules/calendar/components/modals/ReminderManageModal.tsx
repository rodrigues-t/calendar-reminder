import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import useCalendarActions from "../../hooks/useCalendarActions";
import useCalendarCurrentDate from "../../hooks/useCalendarCurrentDate";
import useCalendarSelectors from "../../hooks/useCalendarSelectors";
import { Reminder } from "../../models/Remider";
import ReminderItem from "./manage/ReminderItem";

interface IReminderManageModalProps {
  show: boolean;
  onClose: () => void;
}

const ReminderManageModal = (props: IReminderManageModalProps) => {
  const { reminders } = useCalendarSelectors();
  const { deleteReminder } = useCalendarActions();
  const { currentFormatedDate } = useCalendarCurrentDate();
  
  const onDelete = (reminder: Reminder) => {
    deleteReminder(reminder);
    toast("Reminder deleted");
  }

  const getReminders = (): Array<Reminder> => {
    return (reminders.get(currentFormatedDate) ?? [])
      .sort((a: Reminder, b: Reminder) => {
        if (a.time > b.time) {
          return 1;
        }
        if (b.time > a.time) {
          return -1;
        }
        return 0;
      });
  }
  
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {`Reminders for ${currentFormatedDate}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="reminder-manage-modal">
        {
          getReminders().map((reminder: Reminder) => <ReminderItem key={`mri-${reminder.id}`} reminder={reminder} onDelete={onDelete} onEdit={()=>{}} />)
        }
      </Modal.Body>
    </Modal>
  );
}

export default ReminderManageModal;
