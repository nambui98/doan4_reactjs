import React, { Component } from "react";
import { ContactCardWrapper } from "../../../components/contacts/contactCard.style";
import {
  Input,
  Button,
  Upload,
  Icon,
  Form, Select,
} from "antd";
import DataWrapper from "../../../common/data.style";
import helperFunc from "../../../helpers/helperFunc";
import moment from "moment";
import IntlMessages from '../../../components/utility/intlMessages';
import styleControl from "../../../common/styleControl";
import { urlConfig } from "../../../settings";
import { isNullOrUndefined } from "util";
const { Option } = Select;
const FormItem = Form.Item;

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      base64: null,
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
            footer1: values.footer1,
            footer2: values.footer2,
            footer3: values.footer3,
            link_popup: values.link_popup,
            enable_popup: values.enable_popup,
          };
          if (values.image_popup[0].originFileObj) {
            getBase64(values.image_popup[0].originFileObj, result2 => {
              let str = result2.replace(/^data:image\/[a-z]+;base64,/, "");
              newData.image_popup = str;
              this.props.update(newData);
              this.props.form.resetFields();
            });
          } else {
            this.props.update(newData);
            this.props.form.resetFields();
          }

        }
      });
    };
    let fileList = [];
    if (!isNullOrUndefined(info) && !isNullOrUndefined(info.image_popup)) {
      fileList.push({
        uid: "-1",
        name: "",
        status: "done",
        url: info.image,
        thumbUrl: urlConfig.imageUrl + info.image_popup
      });
    }
    const normFile = e => {
      if (Array.isArray(e)) {
        return e;
      }
      e.fileList = e.fileList.slice(-1);
      return e && e.fileList;
    };
    return (

      <ContactCardWrapper className="isoContactCard">
        <div className="isoContactInfoWrapper">
          <Form onSubmit={handleSubmit}>

            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Eanble popup
                </span>
              }
              style={{ marginBottom: 10 + "px" }}
            >
              {getFieldDecorator("enable_popup", {
                initialValue: info ? info.enable_popup : 1
              })(
                <Select onChange={this.handleChangedField}>
                  <Option value={1}>
                    {helperFunc.status.properties[helperFunc.status.Active]}
                  </Option>
                  <Option value={2}>
                    {
                      helperFunc.status.properties[
                      helperFunc.status.Inactive
                      ]
                    }
                  </Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Image popup"
              style={{ marginBottom: 10 + "px" }}
            >
              {getFieldDecorator("image_popup", {
                valuePropName: "fileList",
                getValueFromEvent: normFile,
                initialValue: fileList.length > 0 ? fileList : null,
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="form.validate.image" />
                  }
                ]
              })(
                <Upload
                  name="image"
                  customRequest={dummyRequest}
                  listType="picture"
                  accept="image/png, image/jpeg"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChangedField}
                >
                  <Button>
                    <Icon type="upload" /> <IntlMessages id="form.upload" />
                  </Button>
                </Upload>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Link popup" hasFeedback>
              {getFieldDecorator("link_popup", {
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="form.validate.this" />
                  }
                ],
                initialValue: info ? info.link_popup : ""
              })(<Input onChange={this.handleChangedField} type="text" />)}
            </FormItem>



            <FormItem style={{ display: "none" }} {...formItemLayout} label="Footer1" hasFeedback>
              {getFieldDecorator("footer1", {
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="form.validate.this" />
                  }
                ],
                initialValue: info ? info.footer1 : ""
              })(<Input onChange={this.handleChangedField} type="text" />)}
            </FormItem>
            <FormItem style={{ display: "none" }} {...formItemLayout} label="Footer2" hasFeedback>
              {getFieldDecorator("footer2", {
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="form.validate.this" />
                  }
                ],
                initialValue: info ? info.footer2 : ""
              })(<Input onChange={this.handleChangedField} type="text" />)}
            </FormItem>

            <FormItem style={{ display: "none" }} {...formItemLayout} label="Footer3" hasFeedback>
              {getFieldDecorator("footer3", {
                rules: [
                  {
                    required: true,
                    message: <IntlMessages id="form.validate.this" />
                  }
                ],
                initialValue: info ? info.footer3 : ""
              })(<Input onChange={this.handleChangedField} type="text" />)}
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
const WrappedFormConfig = Form.create()(Config);
export default WrappedFormConfig;
