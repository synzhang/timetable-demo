import React from 'react';
import { Modal } from 'antd';
import ScheduleForm from './Form';
import './component.scss';

export default class Schedule extends React.PureComponent {
  state = {
    modalVisible: false,
  }

  render() {
    let { modalVisible } = this.state;
    let { schedule } = this.props;

    return (
      <React.Fragment>
        <div className="schedule"
          onClick={this.handleClick}>
          {schedule.course.name}
        </div>
        <Modal
          title='Edit Schedule'
          visible={modalVisible}
          footer={null}
          onCancel={this.handleEditScheduleModalCancel}
        >
          <ScheduleForm
            fields={schedule}
            handleSubmit={this.handleUpdateSchedule}
            handleCancel={this.handleEditScheduleModalCancel} />
        </Modal>
      </React.Fragment>
    );
  }

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ modalVisible: true });
  }

  handleEditScheduleModalCancel = () => {
    this.setState({ modalVisible: false });
  }

  handleUpdateSchedule = (data) => {
    let { updateScheduleRequest } = this.props;

    updateScheduleRequest(data);
  }
}
