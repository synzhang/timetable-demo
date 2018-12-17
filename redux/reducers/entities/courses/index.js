import { handleActions } from 'redux-actions';
import orm from '@/models/orm';
import {
  fetchCoursesSuccess,
  createCourseSuccess,
  updateCourseSuccess,
  destroyCourseSuccess,
} from '@/redux/actions/courses';

const reducerCommon = (state, reducer) => {
  const sess = orm.session(state);
  const { Course } = sess;
  reducer(Course);
  return sess.state;
}

const courses = handleActions(
  new Map([
    [
      fetchCoursesSuccess,
      (state, action) =>
        reducerCommon(state, (Course) => {
          action.payload.courses.forEach(course => Course.create(course));
        })
    ],
    [
      createCourseSuccess,
      (state, action) =>
        reducerCommon(state, (Course) => {
          Course.create(action.payload);
        })
    ],
    [
      updateCourseSuccess,
      (state, action) =>
        reducerCommon(state, (Course) => {
          Course.withId(action.payload.id).update(action.payload);
        })
    ],
    [
      destroyCourseSuccess,
      (state, action) =>
        reducerCommon(state, (Course) => {
          Course.withId(action.payload.id).delete();
        })
    ],
  ]),
  {}
)

export default courses;
