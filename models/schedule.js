import { Model, attr, fk } from 'redux-orm';

class Schedule extends Model {
  static modelName = 'Schedule'

  static fields = {
    id: attr(),
    teacher: fk('Teacher', 'schedules'),
    course: fk('Course', 'schedules'),
    startDatetime: attr(),
    endDatetime: attr(),
  }
};

export default Schedule;
