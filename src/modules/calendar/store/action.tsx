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

export const editReminder = (reminder: Reminder) => ({
  type: actionTypes.CALENDAR_EDIT_REMINDER,
  payload: reminder,
});

export const updateDay = (day: number | null) => ({
  type: actionTypes.CALENDAR_UPDATE_DAY,
  payload: day,
});
