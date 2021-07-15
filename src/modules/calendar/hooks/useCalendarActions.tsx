import { useDispatch } from "react-redux";
import {
  updateDay as calendarUpdateDay,
  addReminder as calendarAddReminder,
  deleteReminder as calendarDeleteReminder,
  editReminder as calendarEditReminder,
} from "../store/action";
import { Reminder } from "../models/Remider";

const useCalendarActions = () => {
  const dispatch = useDispatch();
  const updateDay = (day: number | null) => dispatch(calendarUpdateDay(day));
  const addReminder = (reminder: Reminder) => dispatch(calendarAddReminder(reminder));
  const deleteReminder = (reminder: Reminder) => dispatch(calendarDeleteReminder(reminder));
  const editReminder = (oldReminder: Reminder, reminder: Reminder) => dispatch(calendarEditReminder(oldReminder, reminder));

  return {
    updateDay,
    addReminder,
    deleteReminder,
    editReminder,
  };
}

export default useCalendarActions;
