import { Reminder } from "../models/Remider";

const sortReminderArray = (reminders: Array<Reminder>) => reminders
  .sort((a: Reminder, b: Reminder) => {
    if (a.time > b.time) {
      return 1;
    }
    if (b.time > a.time) {
      return -1;
    }
    return 0;
  });

  export {
    sortReminderArray,
  }
