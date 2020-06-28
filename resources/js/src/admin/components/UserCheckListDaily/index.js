/*
    Method Name: User Check List Daily
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/

import React, { Component } from "react";
import Modals from "../../../common/modal.style";
import WithDirection from "../../../settings/withDirection";
import isoModal from "../../../components/feedback/modal";
import moment from "moment";
import { Radio, Input, Form, Button,  Row, Col} from "antd";
import DataWrapper from "../../../common/data.style";
import styleControl from "../../../common/styleControl";
import IntlMessages from "../../../components/utility/intlMessages";
import formItemLayout from "../../../helpers/formItem";
import helperFunc from "../../../helpers/helperFunc";

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class ModalFormAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      isAdding: true,
      limitAdd: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.modalType === "none") {
      this.setState({
        isAdding: true,
        changed: false
      });
      this.props.form.resetFields();
    }
  }

  //Disable or enable save button
  handleChange = () => {
    this.setState({
      changed: true
    });
  };
  render() {
    const {
      modalActive,
      modalType,
      row,
      handleCancel,
      handleSubmit
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    const saveButton = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (modalType === "changeStatus") {
            row.status = values.status;
            
          } else {
            row.name = values.name;
            row.content=values.content;
            row.status=modalType==="insert"?1:values.status;
          }
          handleSubmit(modalType, row);
        }
      });
    };
    return (
      <Modal
        title={
          modalType === "changeStatus" ? (
            <IntlMessages id="form.titleChangeStatus" />
          ) : modalType === "insert" ? ("Add New")
              : modalType === "edit" ? ("Update")
                  : (
                    "DETAIL"
                  )
        }
        className="FormModal"
        style={{ top: 50 }}
        width={modalType === "changeStatus" ? "25%" : "35%"}
        visible={modalActive}
        onCancel={handleCancel}
        cancelText={
          modalType === "view" ? (
            <IntlMessages id="button.close" />
          ) : (
              <IntlMessages id="button.cancel" />
            )
        }
        onOk={saveButton}
        okText="Save"
        
        footer={
          modalType === "changeStatus" || modalType===helperFunc.modeType.Insert||modalType==="update"||modalType==="edit"
            ? [
              <Button
                key="cancel"
                className="cancelType"
                onClick={handleCancel}
                style={styleControl(3, modalType)}
              >
                <IntlMessages id="button.close" />
              </Button>,
              <Button
                key="ok"
                className="okType"
                onClick={saveButton}
                style={{
                  backgroundColor: "#2d3446",
                  color: "#FFFFFF",
                  borderRadius: "6px",
                  display: (modalType === "view" || modalType === "viewBlockHistory") ? "none" : ""
                }}
                disabled={!this.state.changed}
              >
                <IntlMessages id="button.save" />
              </Button>
            ]
            : [
              <Button
                key="cancel"
                className="cancelType"
                onClick={handleCancel}
                style={styleControl(3, modalType)}
              >
                <IntlMessages id="button.close" />
              </Button>,

            ]
        }
      >
        <DataWrapper>
          <div className="clearfix">
            {modalType === helperFunc.modeType.Insert ? (
              <Form className="isoCardInfoForm FormData">
                <Row>
                    <Col className="ant-col-xl-24 ant-col-lg-24">
                      <FormItem
                        {...formItemLayout}
                        label="Name"
                        hasFeedback
                      >
                        {getFieldDecorator("name", {
                          rules: [
                            {
                              required: true,
                              message: "Name is required"
                            },
                            
                          ]
                        })(<Input onChange={this.handleChange} />)}
                      </FormItem>
                      
                      <FormItem
                        {...formItemLayout}
                        label="Content"
                        hasFeedback
                        style={{ marginBottom: 10 + "px" }}
                      >
                        {getFieldDecorator("content", {
                          initialValue: null,
                          rules: [
                            {
                              required: true,
                              message: "Content is required"
                            },
                            {
                              min: 8,
                              message: <IntlMessages id="form.validate.passworde8_30" />
                            }
                          ]
                        })(<Input onChange={this.handleChange} />)}
                      </FormItem>
                    </Col>
                </Row>
              </Form>
            ) : modalType === "edit"? (
              <Form className="isoCardInfoForm FormData">
                <Row>
                    <Col className="ant-col-xl-24 ant-col-lg-24">
                      <FormItem
                        {...formItemLayout}
                        label="Name"
                        hasFeedback
                      >
                        {getFieldDecorator("name", {
                          initialValue:row.name,
                          rules: [
                            {
                              required: true,
                              message: "Name is required"
                            },
                          ]
                        })(<Input onChange={this.handleChange} />)}
                      </FormItem>
                      
                      <FormItem
                        {...formItemLayout}
                        label="Content"
                        hasFeedback
                        style={{ marginBottom: 10 + "px" }}
                      >
                        {getFieldDecorator("content", {
                          initialValue: row.content,
                          rules: [
                            {
                              required: true,
                              message: "Content is required"
                            },
                            {
                              min: 8,
                              message: <IntlMessages id="form.validate.passworde8_30" />
                            }
                          ]
                        })(<Input onChange={this.handleChange} />)}
                      </FormItem>
                      <FormItem {...formItemLayout} label="Status">
                        {getFieldDecorator("status", { initialValue: row?row.status:"" })(
                          <RadioGroup onChange={this.handleChange}>
                            <Radio value={1}>
                              <IntlMessages id="form.active" />
                            </Radio>
                            <Radio value={2}>
                              <IntlMessages id="form.inactive" />
                            </Radio>
                          </RadioGroup>
                        )}
                      </FormItem>
                    </Col>
                </Row>
              </Form>
            ) : modalType === "changeStatus" ? (
              <Form className="FormData">
                <FormItem {...formItemLayout} label="Status">
                  {getFieldDecorator("status", { initialValue: row?row.status:"" })(
                    <RadioGroup onChange={this.handleChange}>
                      <Radio value={1}>
                        <IntlMessages id="form.active" />
                      </Radio>
                      <Radio value={2}>
                        <IntlMessages id="form.inactive" />
                      </Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                {/* <FormItem
                  {...formItemLayout}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    textAlign: "left"
                  }}
                  label="Reason"
                >
                  {getFieldDecorator("reason", {
                  })(<TextArea rows={3} onChange={this.handleChange} />)}
                </FormItem> */}
              </Form>
            ) : modalType === "view" ? (
              <div>
                <div className="clearfix"></div>
                {/* <div className="LeftSideContent"> */}
                  {/* <div className="detailField clearfix">
                    <label className="label">UID:</label>
                    <div className="contentDetail">{row.uid}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">DisplayName:</label>
                    <div className="contentDetail">{row.displayname}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Email:</label>
                    <div className="contentDetail">{row.email}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Confirmed Email?</label>
                    <div className="contentDetail">{row.confirmed ? "true" : "false"}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Balance</label>
                    <div className="contentDetail">{row.balance}</div>
                  </div>

                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Free of balance</label>
                    <div className="contentDetail">{row.free_of_balance}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Paid of balance</label>
                    <div className="contentDetail">{row.paid_of_balance}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">IP address</label>
                    <div className="contentDetail">{row.ip}</div>
                  </div> */}
                 

                {/* </div>
                <div className="RightSideContent"> */}

                  <div className="detailField clearfix">
                    <label className="label">Full name:</label>
                    <div className="contentDetail">{row &&row.userdetail ?row.userdetail.full_name:""}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Phone:</label>
                    <div className="contentDetail">{row?row.phone:""}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Gender</label>
                    <div className="contentDetail">{row&&row.userdetail ? (row.userdetail.gender === 1 ? "Male" : row.userdetail.gender === 2 ? "Female":"" ): ""}</div>
                  </div>

                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Address</label>
                    <div className="contentDetail">{row&&row.userdetail?row.userdetail.address:""}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label detailFieldFullBorder">Birth day</label>
                    <div className="contentDetail">{row &&row.userdetail ?row.userdetail.birthday:""}</div>
                  </div>
                   <div className="detailField clearfix">
                    <label className="label">Created at</label>
                    <div className="contentDetail">{row ? moment(row.created_at).format("MM/DD/YYYY"):""}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Updated at</label>
                    <div className="contentDetail">{row ?moment(row.updated_at).format("MM/DD/YYYY"):""}</div>
                  </div>
                  {/* <div className="detailField clearfix">
                    <label className="label">Identification Card</label>
                    <div className="contentDetail">{row.identification_number}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Identification day</label>
                    <div className="contentDetail">{row.identification_day}</div>
                  </div>
                  <div className="detailField clearfix">
                    <label className="label">Identification address</label>
                    <div className="contentDetail">{row.identification_address}</div>
                  </div> */}


                {/* </div> */}
              </div>

            ) : (
                        ""
                      )}
          </div>
        </DataWrapper>
      </Modal>
    );
  }
}

const WrappedModalFormAccount = Form.create()(ModalFormAccount);
export default WrappedModalFormAccount;
