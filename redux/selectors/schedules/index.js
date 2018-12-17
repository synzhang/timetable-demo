import { createSelector } from 'reselect';
import { format, isBefore, isAfter } from 'date-fns';
import orm from '@/models/orm';

const getAllSchedules = (state) => {
  const session = orm.session(state.entities);
  const { Schedule } = session;

  return Schedule.all();
}

const getStartOfMonth = (state, props) => props.startOfMonth
const getEndOfMonth = (state, props) => props.endOfMonth

export const makeGetMonthSchedulesData = () => {
  return createSelector(
    [getAllSchedules, getStartOfMonth, getEndOfMonth],
    (schedules, startOfMonth, endOfMonth) => {
      console.log('reselect')
      let data = {};

      schedules.orderBy('startDatetime').toModelArray().forEach(schedule => {
        if (isBefore(schedule.startDatetime, startOfMonth) || isAfter(schedule.endDatetime, endOfMonth)) return;
        let date = format(schedule.startDatetime, 'YYYY-MM-DD');
        data[date] = (data[date] || []).concat([schedule]);
      });

      return data;
    }
  )
};
