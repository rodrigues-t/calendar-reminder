import { Reminder } from "../models/Remider";
import validator from 'validator';

export interface IFieldValidation {
  isValid: boolean,
  error: string,
}

export interface IReminderValidation {
  title: IFieldValidation,
  time: IFieldValidation,
  color: IFieldValidation,
  date: IFieldValidation,
}

const validateCalendarInsertForm = (reminder: Reminder): IReminderValidation => {
  let reminderValidation: IReminderValidation = {
    title: { isValid: true, error: '' },
    time: { isValid: true, error: '' },
    color: { isValid: true, error: '' },
    date: { isValid: true, error: '' },
  };

  if (!validator.isLength(reminder.title, { min: 1, max: 30 })) {
    reminderValidation.title = {
      isValid: false,
      error: 'Title must have between 1 and 30 chars.',
    };
  }
  if (!validator.isHexColor(reminder.color)) {
    reminderValidation.color = {
      isValid: false,
      error: 'Invalid color format.',
    };
  }
  if (!validator.isLength(reminder.time, { min: 5, max: 5 })) {
    reminderValidation.time = {
      isValid: false,
      error: 'Invalid time.',
    };
  }

  return reminderValidation;
}

const validateCalendarEditForm = (reminder: Reminder, date: string): IReminderValidation => {
  let reminderValidation: IReminderValidation = validateCalendarInsertForm(reminder);

  if (!validator.isDate(date)) {
    reminderValidation.date = {
      isValid: false,
      error: 'Invalid date.',
    };
  }

  return reminderValidation;
}

export {
  validateCalendarInsertForm,
  validateCalendarEditForm
};
