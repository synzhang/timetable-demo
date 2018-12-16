import { handleActions } from 'redux-actions';
import orm from '@/models/orm';
import {
  fetchTeachersSuccess,
  createTeacherSuccess,
  updateTeacherSuccess,
  destroyTeacherSuccess,
} from '@/redux/actions/teachers';

const reducerCommon = (state, reducer) => {
  const sess = orm.session(state);
  const { Teacher } = sess;
  reducer(Teacher);
  return sess.state;
}

const teachers = handleActions(
  new Map([
    [
      fetchTeachersSuccess,
      (state, action) =>
        reducerCommon(state, (Teacher) => {
          action.payload.teachers.forEach(teacher => Teacher.create(teacher));
        })
    ],
    [
      createTeacherSuccess,
      (state, action) =>
        reducerCommon(state, (Teacher) => {
          Teacher.create(action.payload);
        })
    ],
    [
      updateTeacherSuccess,
      (state, action) =>
        reducerCommon(state, (Teacher) => {
          Teacher.withId(action.payload.id).update(action.payload);
        })
    ],
    [
      destroyTeacherSuccess,
      (state, action) =>
        reducerCommon(state, (Teacher) => {
          Teacher.withId(action.payload.id).delete();
        })
    ],
  ]),
  {}
)

export default teachers;
