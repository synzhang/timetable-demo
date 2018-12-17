import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { merge } from 'lodash';
import { createScheduleRequest } from '@/redux/actions/schedules';
import { makeGetMonthSchedulesData } from '@/redux/selectors/schedules';
import { getMonthData } from '@/utils';
import Timetable from './component';

const makeMapStateToProps = () => {
  const getMonthSchedulesData = makeGetMonthSchedulesData();
  let { month, startOfMonth, endOfMonth } = getMonthData();

  return (state, props) => {
    let newProps = merge({}, props, {startOfMonth, endOfMonth});

    return {
      month,
      monthSchedulesData: getMonthSchedulesData(state, newProps),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createScheduleRequest,
  }, dispatch);
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Timetable);
