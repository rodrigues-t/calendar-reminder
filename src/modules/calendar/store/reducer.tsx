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
    case actionTypes.CALENDAR_UPDATE_DAY:
      return {
        ...state,
        selectedDay: payload,
      };
    default:
      return state
  }
}
