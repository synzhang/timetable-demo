import { createAction } from 'redux-actions';

export const FETCH_TEACHERS_REQUEST = 'FETCH_TEACHERS_REQUEST';
export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_TEACHERS_FAILURE = 'FETCH_TEACHERS_FAILURE';

export const fetchTeachersRequest = createAction(
  FETCH_TEACHERS_REQUEST,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);

export const fetchTeachersSuccess = createAction(
  FETCH_TEACHERS_SUCCESS,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);

export const fetchTeachersFailure = createAction(
  FETCH_TEACHERS_FAILURE,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);


export const CREATE_TEACHER_REQUEST = 'CREATE_TEACHER_REQUEST';
export const CREATE_TEACHER_SUCCESS = 'CREATE_TEACHER_SUCCESS';
export const CREATE_TEACHER_FAILURE = 'CREATE_TEACHER_FAILURE';

export const createTeacherRequest = createAction(
  CREATE_TEACHER_REQUEST,
  payload => payload,
  () => ({
    model: 'schedule',
  })
);

export const createTeacherSuccess = createAction(
  CREATE_TEACHER_SUCCESS,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);

export const createTeacherFailure = createAction(
  CREATE_TEACHER_FAILURE,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);


export const UPDATE_TEACHER_REQUEST = 'UPDATE_TEACHER_REQUEST';
export const UPDATE_TEACHER_SUCCESS = 'UPDATE_TEACHER_SUCCESS';
export const UPDATE_TEACHER_FAILURE = 'UPDATE_TEACHER_FAILURE';

export const updateTeacherSuccess = createAction(
  UPDATE_TEACHER_SUCCESS,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);


export const DESTROY_TEACHER_REQUEST = 'DESTROY_TEACHER_REQUEST';
export const DESTROY_TEACHER_SUCCESS = 'DESTROY_TEACHER_SUCCESS';
export const DESTROY_TEACHER_FAILURE = 'DESTROY_TEACHER_FAILURE';

export const destroyTeacherSuccess = createAction(
  DESTROY_TEACHER_SUCCESS,
  payload => payload,
  () => ({
    model: 'teacher',
  })
);
