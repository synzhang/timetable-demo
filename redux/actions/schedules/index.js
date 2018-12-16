import { createAction } from 'redux-actions';

export const FETCH_SCHEDULES_REQUEST = 'FETCH_SCHEDULES_REQUEST';
export const FETCH_SCHEDULES_SUCCESS = 'FETCH_SCHEDULES_SUCCESS';
export const FETCH_SCHEDULES_FAILURE = 'FETCH_SCHEDULES_FAILURE';

export const fetchSchedulesRequest = createAction(
  FETCH_SCHEDULES_REQUEST,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const fetchSchedulesSuccess = createAction(
  FETCH_SCHEDULES_SUCCESS,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const fetchSchedulesFailure = createAction(
  FETCH_SCHEDULES_FAILURE,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);


export const CREATE_SCHEDULE_REQUEST = 'CREATE_SCHEDULE_REQUEST';
export const CREATE_SCHEDULE_SUCCESS = 'CREATE_SCHEDULE_SUCCESS';
export const CREATE_SCHEDULE_FAILURE = 'CREATE_SCHEDULE_FAILURE';

export const createScheduleRequest = createAction(
  CREATE_SCHEDULE_REQUEST,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const createScheduleSuccess = createAction(
  CREATE_SCHEDULE_SUCCESS,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const createScheduleFailure = createAction(
  CREATE_SCHEDULE_FAILURE,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);


export const UPDATE_SCHEDULE_REQUEST = 'UPDATE_SCHEDULE_REQUEST';
export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS';
export const UPDATE_SCHEDULE_FAILURE = 'UPDATE_SCHEDULE_FAILURE';

export const updateScheduleRequest = createAction(
  UPDATE_SCHEDULE_REQUEST,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const updateScheduleSuccess = createAction(
  UPDATE_SCHEDULE_SUCCESS,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);


export const DESTROY_SCHEDULE_REQUEST = 'DESTROY_SCHEDULE_REQUEST';
export const DESTROY_SCHEDULE_SUCCESS = 'DESTROY_SCHEDULE_SUCCESS';
export const DESTROY_SCHEDULE_FAILURE = 'DESTROY_SCHEDULE_FAILURE';

export const destroyScheduleRequest = createAction(
  DESTROY_SCHEDULE_REQUEST,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const destroyScheduleSuccess = createAction(
  DESTROY_SCHEDULE_SUCCESS,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);
