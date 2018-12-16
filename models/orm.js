import { ORM } from 'redux-orm';
import Teacher from './teacher';
import Course from './course';
import Schedule from './schedule';

const orm = new ORM();
orm.register(Teacher, Course, Schedule);

export default orm;
