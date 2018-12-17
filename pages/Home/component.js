import React from 'react';
import Timetable from '@/components/Timetable';

class Home extends React.Component {
  render() {
    return (
      <Timetable />
    );
  }

  componentDidMount() {
    let {
      fetchTeachersRequest,
      fetchCoursesRequest,
      fetchSchedulesRequest,
    } = this.props;

    fetchTeachersRequest();
    fetchCoursesRequest();
    fetchSchedulesRequest();
  }
};

export default Home;
