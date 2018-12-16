import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_TEACHERS_REQUEST, 
  fetchTeachersSuccess,
  fetchTeachersFailure,
  CREATE_TEACHER_REQUEST, 
  createTeacherSuccess,
  createTeacherFailure,
} from '@/redux/actions/teachers';
import {
  fetchTeachers,
  createTeacher,
} from '@/services/api/teachers';

export function* watchFetchTeachersRequest() {
  yield takeEvery(FETCH_TEACHERS_REQUEST, fetchTeachersRequestWorker);
};

export function* fetchTeachersRequestWorker(action) {
  try {
    const teachers = yield call(fetchTeachers, action.payload);
    yield put(fetchTeachersSuccess({teachers}));
  } catch(error) {
    yield put(fetchTeachersFailure(error));
  };
};

export function* watchCreateTeacherRequest() {
  yield takeEvery(CREATE_TEACHER_REQUEST, createTeacherRequestWorker);
};

export function* createTeacherRequestWorker(action) {
  try {
    const teacher = yield call(createTeacher, action.payload.teacher);
    yield put(createTeacherSuccess(teacher));
  } catch(error) {
    yield put(createTeacherFailure(error));
  };
};
