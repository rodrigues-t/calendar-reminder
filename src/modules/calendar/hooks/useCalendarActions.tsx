import { useDispatch } from "react-redux";
import {
  updateDay as calendarUpdateDay,
  updateMonth as calendarUpdateMonth,
  updateYear as calendarUpdateYear,
  addReminder as calendarAddReminder,
  deleteReminder as calendarDeleteReminder,
  editReminder as calendarEditReminder,
} from "../store/action";
import { Reminder } from "../models/Remider";

const useCalendarActions = () => {
  const dispatch = useDispatch();
  const updateDay = (day: number | null) => dispatch(calendarUpdateDay(day));
  const updateMonth = (month: number) => dispatch(calendarUpdateMonth(month));
  const updateYear = (year: number) => dispatch(calendarUpdateYear(year));
  const addReminder = (reminder: Reminder) => dispatch(calendarAddReminder(reminder));
  const deleteReminder = (reminder: Reminder) => dispatch(calendarDeleteReminder(reminder));
  const editReminder = (oldReminder: Reminder, reminder: Reminder) => dispatch(calendarEditReminder(oldReminder, reminder));

  return {
    updateDay,
    updateMonth,
    updateYear,
    addReminder,
    deleteReminder,
    editReminder,
  };
}

export default useCalendarActions;
