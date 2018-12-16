import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_SCHEDULES_REQUEST, 
  fetchSchedulesSuccess,
  fetchSchedulesFailure,
  CREATE_SCHEDULE_REQUEST, 
  createScheduleSuccess,
  createScheduleFailure,
} from '@/redux/actions/schedules';
import {
  fetchSchedules,
  createSchedule,
} from '@/services/api/schedules';

export function* watchFetchSchedulesRequest() {
  yield takeEvery(FETCH_SCHEDULES_REQUEST, fetchSchedulesRequestWorker);
};

export function* fetchSchedulesRequestWorker(action) {
  try {
    const schedules = yield call(fetchSchedules, action.payload);
    yield put(fetchSchedulesSuccess({schedules}));
  } catch(error) {
    yield put(fetchSchedulesFailure(error));
  };
};

export function* watchCreateScheduleRequest() {
  yield takeEvery(CREATE_SCHEDULE_REQUEST, createScheduleRequestWorker);
};

export function* createScheduleRequestWorker(action) {
  try {
    const schedule = yield call(createSchedule, action.payload.schedule);
    yield put(createScheduleSuccess(schedule));
  } catch(error) {
    yield put(createScheduleFailure(error));
  };
};
