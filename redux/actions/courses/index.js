import { createAction } from 'redux-actions';

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const fetchCoursesRequest = createAction(
  FETCH_COURSES_REQUEST,
  payload => payload,
  () => ({
    model: 'course',
  })
);

export const fetchCoursesSuccess = createAction(
  FETCH_COURSES_SUCCESS,
  payload => payload,
  () => ({
    model: 'course',
  })
);

export const fetchCoursesFailure = createAction(
  FETCH_COURSES_FAILURE,
  payload => payload,
  () => ({
    model: 'course',
  })
);


export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';

export const createCourseRequest = createAction(
  CREATE_COURSE_REQUEST,
  payload => payload,
  () => ({
    model: 'course',
  })
);

export const createCourseSuccess = createAction(
  CREATE_COURSE_SUCCESS,
  payload => payload,
  () => ({
    model: 'course',
  })
);

export const createCourseFailure = createAction(
  CREATE_COURSE_FAILURE,
  payload => payload,
  () => ({
    model: 'course',
  })
);


export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';

export const updateCourseSuccess = createAction(
  UPDATE_COURSE_SUCCESS,
  payload => payload,
  () => ({
    model: 'course',
  })
);


export const DESTROY_COURSE_REQUEST = 'DESTROY_COURSE_REQUEST';
export const DESTROY_COURSE_SUCCESS = 'DESTROY_COURSE_SUCCESS';
export const DESTROY_COURSE_FAILURE = 'DESTROY_COURSE_FAILURE';

export const destroyCourseSuccess = createAction(
  DESTROY_COURSE_SUCCESS,
  payload => payload,
  () => ({
    model: 'course',
  })
);
