export const getLastDateOfMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year: number, month: number): number => new Date(year, month, 1).getDay();

export const getDestructedTime = (time: string): { hour: number, min: number } => ({
    hour: Number(time.split(':')[0]),
    min: Number(time.split(':')[1]),
}) 

export const DAY_OF_WEEK_SHORT_NAME = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
