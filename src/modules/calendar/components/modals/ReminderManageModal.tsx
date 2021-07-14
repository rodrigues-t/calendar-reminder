import { Modal } from "react-bootstrap";
import useCalendarCurrentDate from "../../hooks/useCalendarCurrentDate";
import useCalendarSelectors from "../../hooks/useCalendarSelectors";
import { Reminder } from "../../models/Remider";

interface IReminderManageModalProps {
  show: boolean;
  onClose: () => void;
}

const ReminderManageModal = (props: IReminderManageModalProps) => {
  const { selectedDay, selectedMonth, selectedYear, reminders } = useCalendarSelectors();
  const { currentFormatedDate } = useCalendarCurrentDate();

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

  const getReminderElement = (reminder: Reminder) =>
    <div className="reminder-manage-modal__item">
      <div className="bullet" style={{ backgroundColor: reminder.color, aspectRatio: "1" }}></div>
      <span className="reminder-manage-modal__item-time">{reminder.time}</span>
      <div className="reminder-manage-modal__item-title">{reminder.title}</div>
      <span>edit</span>
      <span>delete</span>
    </div>;

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {`Reminders for ${currentFormatedDate}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="reminder-manage-modal">
        {
          getReminders().map((reminder: Reminder) => getReminderElement(reminder))
        }
      </Modal.Body>
    </Modal>
  );
}

export default ReminderManageModal;
