import { Model, attr, fk } from 'redux-orm';

class Teacher extends Model {
  static modelName = 'Teacher'

  static fields = {
    id: attr(),
    name: attr(),
    course: fk('Course', 'teachers'),
  }
};

export default Teacher;
