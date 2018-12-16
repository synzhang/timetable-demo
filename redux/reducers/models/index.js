import { get } from 'lodash';
import teachers from './teachers';
import courses from './courses';
import schedules from './schedules';
import orm from '@/models/orm';

const emptyState = orm.getEmptyState();

const models = (state = emptyState, action) => {
  switch (get(action, 'meta.model')) {
    case 'teacher':
      return teachers(state, action);
    case 'course':
      return courses(state, action);
    case 'schedule':
      return schedules(state, action);
    default:
      return state;
  };
};

export default models;
