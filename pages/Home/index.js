import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTeachersRequest } from '@/redux/actions/teachers';
import { fetchCoursesRequest } from '@/redux/actions/courses';
import { fetchSchedulesRequest } from '@/redux/actions/schedules';
import Home from './component';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTeachersRequest,
    fetchCoursesRequest,
    fetchSchedulesRequest,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
