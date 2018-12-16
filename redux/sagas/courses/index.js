import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_COURSES_REQUEST, 
  fetchCoursesSuccess,
  fetchCoursesFailure,
  CREATE_COURSE_REQUEST, 
  createCourseSuccess,
  createCourseFailure,
} from '@/redux/actions/courses';
import {
  fetchCourses,
  createCourse,
} from '@/services/api/courses';

export function* watchFetchCoursesRequest() {
  yield takeEvery(FETCH_COURSES_REQUEST, fetchCoursesRequestWorker);
};

export function* fetchCoursesRequestWorker(action) {
  try {
    const courses = yield call(fetchCourses, action.payload);
    yield put(fetchCoursesSuccess({courses}));
  } catch(error) {
    yield put(fetchCoursesFailure(error));
  };
};

export function* watchCreateCourseRequest() {
  yield takeEvery(CREATE_COURSE_REQUEST, createCourseRequestWorker);
};

export function* createCourseRequestWorker(action) {
  try {
    const course = yield call(createCourse, action.payload.course);
    yield put(createCourseSuccess(course));
  } catch(error) {
    yield put(createCourseFailure(error));
  };
};
