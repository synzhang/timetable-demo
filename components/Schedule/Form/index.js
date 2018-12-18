import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';

const FormItem = Form.Item;

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ScheduleForm extends React.Component {
  render() {
    let { fields, handleSubmit, handleCancel, handleDestroy } = this.props;

    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="danger" onClick={handleDestroy}>Destroy</Button>
        </FormItem>
      </Form>
    );
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
}

export default Form.create()(ScheduleForm);
