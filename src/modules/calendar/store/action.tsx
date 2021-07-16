import { Reminder } from '../models/Remider';
import * as actionTypes from './actionTypes';

export const addReminder = (reminder: Reminder) => ({
  type: actionTypes.CALENDAR_ADD_REMINDER,
  payload: reminder,
});

export const deleteReminder = (reminder: Reminder) => ({
  type: actionTypes.CALENDAR_DELETE_REMINDER,
  payload: reminder,
});

export const editReminder = (oldReminder:Reminder, reminder: Reminder) => ({
  type: actionTypes.CALENDAR_EDIT_REMINDER,
  payload: { oldReminder, reminder },
});

export const updateDay = (day: number | null) => ({
  type: actionTypes.CALENDAR_UPDATE_DAY,
  payload: day,
});

export const updateMonth = (month: number) => ({
  type: actionTypes.CALENDAR_UPDATE_MONTH,
  payload: month,
});

export const updateYear = (year: number) => ({
  type: actionTypes.CALENDAR_UPDATE_YEAR,
  payload: year,
});
