import { Model, attr } from 'redux-orm';

class Course extends Model {
  static modelName = 'Course'

  static fields = {
    id: attr(),
    name: attr(),
  }
};

export default Course;
