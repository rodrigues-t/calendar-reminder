import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Reminder } from "../../../models/Remider";

interface IReminderItem {
  reminder: Reminder;
  onEdit: () => void;
  onDelete: (reminder: Reminder) => void;
}

const ReminderItem = (props: IReminderItem) => {
  const [deleteReminder, setDeleteReminder] = useState(false);
  return (
    <>
      <div className="reminder-manage-modal__item">
        <div className="bullet" style={{ backgroundColor: props.reminder.color, aspectRatio: "1" }}></div>
        <span className="reminder-manage-modal__item-time">{props.reminder.time}</span>
        <div className="reminder-manage-modal__item-title">{props.reminder.title}</div>
        <Button variant="secondary" size="sm" disabled={deleteReminder}>
          <FontAwesomeIcon icon="pen" size="xs" />
        </Button>
        <Button variant="danger" size="sm" disabled={deleteReminder} onClick={() => setDeleteReminder(true)}>
          <FontAwesomeIcon icon="trash" size="xs" />
        </Button>
      </div>
      {
        deleteReminder &&
        <div style={{ borderColor: props.reminder.color }} className="reminder-manage-modal__item-delete">
          Confirm delete?
          <section>
            <Button variant="secondary" size="sm" onClick={() => setDeleteReminder(false)}>
              no
            </Button>
            <Button variant="danger" size="sm" onClick={() => props.onDelete(props.reminder)}>
              yes
            </Button>
          </section>
        </div>
      }
    </>
  );
};

export default ReminderItem;
