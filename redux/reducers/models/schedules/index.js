import { handleActions } from 'redux-actions';
import orm from '@/models/orm';
import {
  fetchSchedulesSuccess,
  createScheduleSuccess,
  updateScheduleSuccess,
  destroyScheduleSuccess,
} from '@/redux/actions/schedules';

const reducerCommon = (state, reducer) => {
  const sess = orm.session(state);
  const { Schedule } = sess;
  reducer(Schedule);
  return sess.state;
}

const schedules = handleActions(
  new Map([
    [
      fetchSchedulesSuccess,
      (state, action) =>
        reducerCommon(state, (Schedule) => {
          action.payload.schedules.forEach(schedule => Schedule.create(schedule));
        })
    ],
    [
      createScheduleSuccess,
      (state, action) =>
        reducerCommon(state, (Schedule) => {
          Schedule.create(action.payload);
        })
    ],
    [
      updateScheduleSuccess,
      (state, action) =>
        reducerCommon(state, (Schedule) => {
          Schedule.withId(action.payload.id).update(action.payload);
        })
    ],
    [
      destroyScheduleSuccess,
      (state, action) =>
        reducerCommon(state, (Schedule) => {
          Schedule.withId(action.payload.id).delete();
        })
    ],
  ]),
  {}
)

export default schedules;
