import { useDispatch } from "react-redux";
import {
  updateDay as calendarUpdateDay,
  addReminder as calendarAddReminder,
  deleteReminder as calendarDeleteReminder,
} from "../store/action";
import { Reminder } from "../models/Remider";

const useCalendarActions = () => {
  const dispatch = useDispatch();
  const updateDay = (day: number | null) => dispatch(calendarUpdateDay(day));
  const addReminder = (reminder: Reminder) => dispatch(calendarAddReminder(reminder));
  const deleteReminder = (reminder: Reminder) => dispatch(calendarDeleteReminder(reminder));

  return {
    updateDay,
    addReminder,
    deleteReminder,
  };
}

export default useCalendarActions;
