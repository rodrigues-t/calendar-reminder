import { AnyAction } from 'redux'; import { Reminder } from '../models/Remider';
import * as actionTypes from './actionTypes';


export interface ICalendarState {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number | null;
  reminders: Map<string, Array<Reminder>>;
};

export const initialState: ICalendarState = {
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth(),
  selectedDay: null,
  reminders: new Map<string, Array<Reminder>>(),
};


export default function calendarReducer(state: ICalendarState = initialState, action: AnyAction): ICalendarState {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CALENDAR_ADD_REMINDER:
      const key = payload.date.toLocaleDateString('en-US');
      state.reminders.set(key, [...(state.reminders.get(key) ?? []), payload]);
      return {
        ...state,
        reminders: new Map<string, Array<Reminder>>(state.reminders.entries()),
      };
    case actionTypes.CALENDAR_DELETE_REMINDER:
      const deleteKey = payload.date.toLocaleDateString('en-US');
      state.reminders.set(
        deleteKey,
        [...((state.reminders.get(deleteKey) ?? []).filter(r => r.id !== payload.id))],
      );
      return {
        ...state,
        reminders: new Map<string, Array<Reminder>>(state.reminders.entries()),
      }
    case actionTypes.CALENDAR_EDIT_REMINDER:
      const oldKey = payload.oldReminder.date.toLocaleDateString('en-US');
      const editKey = payload.reminder.date.toLocaleDateString('en-US');
      if (oldKey === editKey) {
        state.reminders.set(
          editKey,
          [...((state.reminders.get(editKey) ?? []).filter(r => r.id !== payload.reminder.id)), payload.reminder],
        );
      } else {
        state.reminders.set(
          oldKey,
          [...((state.reminders.get(oldKey) ?? []).filter(r => r.id !== payload.reminder.id))],
        );
        state.reminders.set(editKey, [...(state.reminders.get(editKey) ?? []), payload.reminder]);
      }
      return {
        ...state,
        reminders: new Map<string, Array<Reminder>>(state.reminders.entries()),
      }
    case actionTypes.CALENDAR_UPDATE_DAY:
      return {
        ...state,
        selectedDay: payload,
      };
    case actionTypes.CALENDAR_UPDATE_MONTH:
      return {
        ...state,
        selectedMonth: payload,
      };
    case actionTypes.CALENDAR_UPDATE_YEAR:
      return {
        ...state,
        selectedYear: payload,
      };
    default:
      return state
  }
}
