import React, { Component } from "react";
import { ContactCardWrapper } from "../../../components/contacts/contactCard.style";
import {
  Input,
  Button,
  Form, Select,
} from "antd";
import DataWrapper from "../../../common/data.style";
import moment from "moment";
import IntlMessages from '../../../components/utility/intlMessages';
import styleControl from "../../../common/styleControl";
const { Option } = Select;
const FormItem = Form.Item;

class Maintenance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      loading: false,
      changed: false,
      startDate: moment(new Date())
    };
    this.handleChangedField = this.handleChangedField.bind(this);
  }
  handleChangedField() {
    this.setState({
      changed: true
    });
  }
  disabledDate = date => {
    const { startDate } = this.state;
    if (!startDate || !date) {
      return false;
    }
    return date.valueOf() > startDate.valueOf();
  };
  render() {
    const {
      info,
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };

    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const newData = {
            is_maintenance: values.is_maintenance,
            ips_access_maintenance: values.ips_access_maintenance,
            maintenance_content: values.maintenance_content,
          };
          this.props.update(newData);
          this.props.form.resetFields();
        }
      });
    };

    return (

      <ContactCardWrapper className="isoContactCard">
        <div className="isoContactInfoWrapper">
          <Form onSubmit={handleSubmit}>

            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Maintenance
                </span>
              }
              style={{ marginBottom: 10 + "px" }}
            >
              {getFieldDecorator("is_maintenance", {
                initialValue: info ? info.is_maintenance : 1
              })(
                <Select onChange={this.handleChangedField}>
                  <Option value={1}>
                    Yes
                  </Option>
                  <Option value={2}>
                    No
                  </Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="IP Address" hasFeedback>
              {getFieldDecorator("ips_access_maintenance", {
                rules: [
                  {
                    required: true,
                    message: "IP Address is required"
                  }
                ],
                initialValue: info ? info.ips_access_maintenance : ""
              })(<Input onChange={this.handleChangedField} placeholder={"IP Address (maintenance access: separated by a mark; )"} type="text" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Maintenance content" hasFeedback>
              {getFieldDecorator("maintenance_content", {
                rules: [
                  {
                    required: true,
                    message: "Maintenance content is required"
                  }
                ],
                initialValue: info ? info.maintenance_content : ""
              })(<Input onChange={this.handleChangedField} placeholder={"Content"} type="text" />)}
            </FormItem>

            <FormItem>
              <div className="ant-col-xs-24 ant-col-sm-6" />
              <div className="ant-col-xs-24 ant-col-sm-14">
                <DataWrapper style={{ textAlign: "right" }}>
                  <Button
                    htmlType="submit"
                    style={styleControl(1, '')}
                    disabled={!this.state.changed}
                    onClick={this.handleSubmit}
                  >
                    <IntlMessages id="button.save" />
                  </Button>
                </DataWrapper>
              </div>
            </FormItem>
          </Form>
        </div>
      </ContactCardWrapper>
    );
  }
}
export default Form.create()(Maintenance);
