import { all } from 'redux-saga/effects';
import {
  watchFetchTeachersRequest,
  watchCreateTeacherRequest,
} from './teachers';
import {
  watchFetchCoursesRequest,
  watchCreateCourseRequest,
} from './courses';
import {
  watchFetchSchedulesRequest,
  watchCreateScheduleRequest,
} from './schedules';

export default function* rootSaga() {
  yield all([
    watchFetchTeachersRequest(),
    watchCreateTeacherRequest(),
    watchFetchCoursesRequest(),
    watchCreateCourseRequest(),
    watchFetchSchedulesRequest(),
    watchCreateScheduleRequest()
  ])
};
