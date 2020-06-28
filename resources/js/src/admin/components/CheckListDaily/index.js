/*
    Method Name: Check List Daily
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
import { Radio, Form, Button, Checkbox } from "antd";
import DataWrapper from "../../../common/data.style";
import styleControl from "../../../common/styleControl";
import IntlMessages from "../../../components/utility/intlMessages";
import formItemLayout from "../../../helpers/formItem";
import helperFunc from "../../../helpers/helperFunc";
import { urlConfig } from "../../../settings/index";

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
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
      indeterminate: true,
      checkAll: false
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
  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length &&
        checkedList.length < this.props.checkList.length,
      checkAll: checkedList.length === this.props.checkList.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.props.checkList : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };
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
      checkList,
      handleCancel,
      handleSubmit
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    let date = new Date();
    const saveButton = e => {
      e.preventDefault();
      this.setState({
        changed: false
      });
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (modalType === "changeStatus") {
            row.status = values.status;
          } else {
            //list check
            let listCheckList = [];
            listCheckList = checkList.map(element => {
              return {
                check_date: moment(date).format("YYYY/MM/DD"),
                status: values.listCheckList.find(item => item === element.id)
                  ? 1
                  : 2,
                checklist_id: element.id
              };
            });
            row.listCheckList = listCheckList;
            row.check_date = moment(date).format("YYYY/MM/DD");
            row.checklist_daily_id = "insert" ? 0 : row.id;

            handleSubmit(modalType, row);
          }
        }
      });
    };
    return (
      <Modal
        title={
          modalType === "changeStatus" ? (
            <IntlMessages id="form.titleChangeStatus" />
          ) : modalType === "insert" ? (
            "Add New"
          ) : modalType === "edit" ? (
            "Update"
          ) : (
            "DETAIL"
          )
        }
        className="FormModal"
        style={{ top: 50 }}
        width={
          window.innerWidth > 1100
            ? modalType === "ChangeStatus"
              ? 30 + "%"
              : 80 + "%"
            : "100%"
        }
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
          modalType === "changeStatus" ||
          modalType === helperFunc.modeType.Insert ||
          modalType === "update" ||
          modalType === "edit"
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
                    display:
                      modalType === "view" || modalType === "viewBlockHistory"
                        ? "none"
                        : ""
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
                </Button>
              ]
        }
      >
        <DataWrapper>
          <div className="clearfix">
            {modalType === helperFunc.modeType.Insert ? (
              <Form
                className="isoCardInfoForm FormData"
                style={{ maxWidth: "100%" }}
              >
                <FormItem style={{ marginBottom: 10 + "px", width: "100%" }}>
                  {getFieldDecorator("listCheckList", {
                    rules: [
                      {
                        required: true,
                        message: "Please tick at least one"
                      }
                    ]
                  })(
                    <CheckboxGroup
                      style={{ width: "100%" }}
                      onChange={this.handleChange}
                    >
                      <div className="LeftSideContent">
                        {checkList.length > 0
                          ? checkList.map((item, index) => {
                              if (index < checkList.length / 2) {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      height: "100px",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-around",
                                      alignItems: "center",
                                      borderBottom: "1px solid #b7b7b7"
                                    }}
                                  >
                                    <span>{index + 1}</span>
                                    <span style={{ width: "calc(100%/3)" }}>
                                      {item.name}
                                    </span>
                                    <img
                                      key={index}
                                      style={{ width: "40px", margin: "4px 0" }}
                                      alt={item.name}
                                      src={urlConfig.imageUrl + item.image}
                                    />
                                    <Checkbox
                                      style={{ float: "right" }}
                                      value={item.id}
                                    ></Checkbox>
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })
                          : ""}
                      </div>
                      <div className="RightSideContent">
                        {checkList.length > 0
                          ? checkList.map((item, index) => {
                              if (index >= checkList.length / 2) {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      height: "100px",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-around",
                                      alignItems: "center",
                                      borderBottom: "1px solid #b7b7b7"
                                    }}
                                  >
                                    <span>{index + 1}</span>
                                    <span style={{ width: "calc(100%/2)" }}>
                                      {item.name}
                                    </span>
                                    <img
                                      key={index}
                                      style={{ width: "40px", margin: "4px 0" }}
                                      alt={item.name}
                                      src={urlConfig.imageUrl + item.image}
                                    />
                                    <Checkbox
                                      style={{ float: "right" }}
                                      value={item.id}
                                    ></Checkbox>
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })
                          : ""}
                      </div>
                    </CheckboxGroup>
                  )}
                </FormItem>
                {/* <FormItem>
                  {getFieldDecorator("haveCheck", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm!"
                      }
                    ]
                  })(
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        lineHeight: "initial"
                      }}
                    >
                      <Checkbox style={{ paddingRight: "10px" }}></Checkbox>I
                      have checked according to the checklist stated above and
                      confirm that vehicle is safe to operate
                    </div>
                  )}
                </FormItem> */}
                <div className="detailField clearfix">
                  <label className="label" style={{ width: "15%" }}>
                    Date:
                  </label>
                  <div className="contentDetail">
                    {moment(date).format("YYYY-MM-DD")}
                  </div>
                </div>
              </Form>
            ) : modalType === "edit" ? (
              <Form className="isoCardInfoForm FormData">
                <FormItem style={{ marginBottom: 10 + "px", width: "100%" }}>
                  {getFieldDecorator("listCheckList", {
                    initialValue:
                      row && row.user_checklist_dailies
                        ? row.user_checklist_dailies.map(item => {
                            return item.status === 1 ? item.checklist_id : null;
                          })
                        : null,
                    rules: [
                      {
                        required: true,
                        message: "Please tick at least one"
                      }
                    ]
                  })(
                    <CheckboxGroup
                      style={{ width: "100%" }}
                      onChange={this.handleChange}
                    >
                      <div className="LeftSideContent">
                        {checkList.length > 0
                          ? checkList.map((item, index) => {
                              if (index < checkList.length / 2) {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      height: "100px",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-around",
                                      alignItems: "center",
                                      borderBottom: "1px solid #b7b7b7"
                                    }}
                                  >
                                    <span>{index + 1}</span>
                                    <span style={{ width: "calc(100%/2)" }}>
                                      {item.name}
                                    </span>
                                    <img
                                      key={index}
                                      style={{ width: "40px", margin: "4px 0" }}
                                      alt={item.name}
                                      src={urlConfig.imageUrl + item.image}
                                    />
                                    <Checkbox
                                      style={{ float: "right" }}
                                      value={item.id}
                                    ></Checkbox>
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })
                          : ""}
                      </div>
                      <div className="RightSideContent">
                        {checkList.length > 0
                          ? checkList.map((item, index) => {
                              if (index >= checkList.length / 2) {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      height: "100px",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-around",
                                      alignItems: "center",
                                      borderBottom: "1px solid #b7b7b7"
                                    }}
                                  >
                                    <span>{index + 1}</span>
                                    <span style={{ width: "calc(100%/2)" }}>
                                      {item.name}
                                    </span>
                                    <img
                                      key={index}
                                      style={{ width: "40px", margin: "4px 0" }}
                                      alt={item.name}
                                      src={urlConfig.imageUrl + item.image}
                                    />
                                    <Checkbox
                                      style={{ float: "right" }}
                                      value={item.id}
                                    ></Checkbox>
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })
                          : ""}
                      </div>
                    </CheckboxGroup>
                  )}
                </FormItem>
                {/* <FormItem>
                  {getFieldDecorator("haveCheck", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm!"
                      }
                    ]
                  })(
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        lineHeight: "initial"
                      }}
                    >
                      <Checkbox style={{ paddingRight: "10px" }}></Checkbox>I
                      have checked according to the checklist stated above and
                      confirm that vehicle is safe to operate
                    </div>
                  )}
                </FormItem> */}
                <div className="detailField clearfix ">
                  <label className="label" style={{ width: "15%" }}>
                    Date:
                  </label>
                  <div className="contentDetail">
                    {moment(date).format("YYYY-MM-DD")}
                  </div>
                </div>
              </Form>
            ) : modalType === "changeStatus" ? (
              <Form className="FormData">
                <FormItem {...formItemLayout} label="Status">
                  {getFieldDecorator("status", {
                    initialValue: row ? row.status : ""
                  })(
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
              </Form>
            ) : modalType === "view" ? (
              <div>
                <div className="clearfix"></div>
                {row &&
                row.user_checklist_dailies &&
                row.user_checklist_dailies.length > 0
                  ? row.user_checklist_dailies.map((item, index) => {
                      if (item.status === 1) {
                        return (
                          <div
                            key={index + row.user_checklist_dailies.length}
                            style={{
                              height: "50px",
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                              borderBottom: "1px solid #b7b7b7"
                            }}
                          >
                            <span style={{ width: "calc(100%/3)" }}>
                              {item.checklist.name}
                            </span>
                            <i
                              style={{ fontSize: "30px" }}
                              className="ion-android-checkbox"
                            ></i>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={index + row.user_checklist_dailies.length}
                            style={{
                              height: "50px",
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                              borderBottom: "1px solid #b7b7b7"
                            }}
                          >
                            <span style={{ width: "calc(100%/3)" }}>
                              {item.checklist.name}
                            </span>
                            <i
                              style={{ fontSize: "30px" }}
                              className="ion-android-checkbox-outline-blank"
                            ></i>
                          </div>
                        );
                      }
                    })
                  : ""}
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
