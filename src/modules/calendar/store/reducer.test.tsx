import React from 'react';
import { render, screen } from '@testing-library/react';
import reducer, { ICalendarState } from './reducer';
import * as actionTypes from './actionTypes';

let defaultState: ICalendarState = { selectedYear: 2021, selectedMonth: 6, selectedDay: null, reminders: new Map() };

test('check reducer update day', () => {
  const state = reducer(
    defaultState,
    { type: actionTypes.CALENDAR_UPDATE_DAY, payload: 1 }
  );
  expect(state).toEqual({ ...defaultState, selectedDay: 1 });
});

test('check reducer update month', () => {  
  const state = reducer(
    defaultState,
    { type: actionTypes.CALENDAR_UPDATE_MONTH, payload: 1 }
  );
  expect(state).toEqual({ ...defaultState, selectedMonth: 1 });
});

test('check reducer update year', () => {  
  const state = reducer(
    defaultState,
    { type: actionTypes.CALENDAR_UPDATE_YEAR, payload: 2022 }
  );
  expect(state).toEqual({ ...defaultState, selectedYear:2022 });
});

defaultState.selectedDay = 1;
let reminder = {
  id: 0,
  title: 'test',
  date: new Date(),
  time: '10:10',
  color: '#000000',
}

test('check reducer add reminder', () => {
  const state = reducer(
    defaultState,
    { 
      type: actionTypes.CALENDAR_ADD_REMINDER, 
      payload: reminder
    }
  );
  expect(state.reminders.size).toEqual(1);
});

test('check reducer edit reminder date', () => {
  const newDate = new Date();
  newDate.setMonth(9);
  const state = reducer(
    defaultState,
    { 
      type: actionTypes.CALENDAR_EDIT_REMINDER, 
      payload: {
        reminder: {
          ...reminder,
          date: newDate,
        },
        oldReminder: reminder,
      }
    }
  );
  
  expect(state.reminders.size).toEqual(2);
  expect(state.reminders.get(reminder.date.toLocaleDateString('en-US'))?.length).toEqual(0);
  expect(state.reminders.get(newDate.toLocaleDateString('en-US'))?.length).toEqual(1);
});

test('check reducer delete reminder', () => {
  const newDate = new Date();
  newDate.setMonth(9);
  const state = reducer(
    defaultState,
    { 
      type: actionTypes.CALENDAR_DELETE_REMINDER, 
      payload: reminder
    }
  );
  
  expect(state.reminders.size).toEqual(2);
  expect(state.reminders.get(reminder.date.toLocaleDateString('en-US'))?.length).toEqual(0);
});



