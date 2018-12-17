import React from 'react';
import { format } from 'date-fns';
import { Button, Calendar, Modal } from 'antd';
import { getMonthData } from '@/utils';
import Schedule from '@/components/Schedule';
import ScheduleForm from '@/components/Schedule/Form';

export default class Timetable extends React.Component {
  state = {
    newScheduleModalVisible: false,
  }
 
  render() {
    let { newScheduleModalVisible } = this.state;

    return (
      <React.Fragment>
        <Calendar
          onSelect={this.handleDateSelect}
          dateCellRender={this.dateCellRender} />
        <Modal
          title='New Schedule'
          visible={newScheduleModalVisible}
          footer={null}
          onCancel={this.handleNewScheduleModalCancel}
        >
          <ScheduleForm
            handleSubmit={this.handleCreateSchedule}
            handleCancel={this.handleNewScheduleModalCancel} />
        </Modal>
      </React.Fragment>
    )
  }

  handleDateSelect = () => {
    this.setState({ newScheduleModalVisible: true });
  }

  dateCellRender = (date) => {
    let { monthSchedulesData } = this.props;
    let schedules = monthSchedulesData[format(date, 'YYYY-MM-DD')];

    return (
      <React.Fragment>
        {schedules && schedules.map(schedule => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </React.Fragment>
    )
  }

  handleNewScheduleModalCancel = () => {
    this.setState({ newScheduleModalVisible: false });
  }

  handleCreateSchedule = (e) => {
    e.preventDefault();

    let { createScheduleRequest } = this.props;

    createScheduleRequest({});
  }
}
