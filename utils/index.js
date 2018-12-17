import {
  getMonth,
  startOfMonth as getStartOfMonth,
  endOfMonth as getEndOfMonth,
} from 'date-fns';

export const getMonthData = (date = new Date()) => {
  let today = date;
  let month = getMonth(today);
  let startOfMonth = getStartOfMonth(today);
  let endOfMonth = getEndOfMonth(today);

  return { month, startOfMonth, endOfMonth }
}
