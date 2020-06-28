/*
    Method Name: Incident Type
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
import { Radio, Input, Form, Button, Row, Col, InputNumber, Table } from "antd";
import DataWrapper from "../../../common/data.style";
import styleControl from "../../../common/styleControl";
import IntlMessages from "../../../components/utility/intlMessages";
import formItemLayout from "../../../helpers/formItem";
import helperFunc from "../../../helpers/helperFunc";
import { TableWrapper } from "../../../common/control.style";

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
      limitAdd: false
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
            row.color = values.color;
            row.order = values.order;
            row.status = modalType === "insert" ? 1 : values.status;
          }
          handleSubmit(modalType, row);
        }
      });
    };
    const dataSource = [];
    if (typeof row !== "undefined" && row !== null) {
      Object.keys(row).map((rows, index) => {
        return dataSource.push({
          ...row[rows],
          key: rows
        });
      });
    }
    const expandedRowRender = row => {
      const columns = [
        {
          title: "Name",
          dataIndex: "Name",
          key: "Name",
          sorter: (a, b) => {
            if (a.Name < b.Name) return -1;
            if (a.Name > b.Name) return 1;
            return 0;
          }
        },
        {
          title: "Status",
          dataIndex: "Status",
          key: "Status",
          width: "151px"
        }
      ];
      const data = [];
      for (let i = 0; i < row.user_checklist_dailies.length; ++i) {
        data.push({
          key: i,
          Name: row.user_checklist_dailies[i].checklist.name,
          Status:
            row.user_checklist_dailies[i].status === 1 ? (
              <i
                style={{ fontSize: "25px" }}
                className="ion-android-checkbox"
              ></i>
            ) : (
              <i
                style={{ fontSize: "25px" }}
                className="ion-android-checkbox-outline-blank"
              ></i>
            )
        });
      }
      return (
        <Table
          style={{ margin: "0px" }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      );
    };
    const columns = [
      {
        title: "User",
        dataIndex: "admin",
        key: "admin",
        render: (text, rows) => {
          return <b>{rows && rows.admin ? rows.admin.full_name : ""}</b>;
        }
      },
      {
        title: "Checklist",
        dataIndex: "checklist",
        key: "checklist",
        render: (text, row) => {
          if (row && row.user_checklist_dailies) {
            let countCheck = row.user_checklist_dailies.filter(item => {
              return item.status === 1;
            }).length;
            let countUnCheck = row.user_checklist_dailies.filter(item => {
              return item.status === 2;
            }).length;
            return countCheck + ` checked,` + countUnCheck + ` uncheck`;
          }
        }
      },
      {
        title: "Check date",
        dataIndex: "check_date",
        key: "check_date",
        width: 250,
        render: (text, rows) => {
          return <b>{rows && rows.check_date ? rows.check_date : ""}</b>;
        }
      }
    ];
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
              : 60 + "%"
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
              <Form className="isoCardInfoForm FormData">
                <Row>
                  <Col className="ant-col-xl-24 ant-col-lg-24">
                    <FormItem
                      {...formItemLayout}
                      label="Name"
                      hasFeedback
                      style={{ marginBottom: 10 + "px" }}
                    >
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "Name is required"
                          }
                        ]
                      })(<Input onChange={this.handleChange} />)}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Color"
                      hasFeedback
                      style={{ marginBottom: 10 + "px" }}
                    >
                      {getFieldDecorator("color", {
                        rules: [
                          {
                            required: true,
                            message: "Color is required"
                          }
                        ]
                      })(<Input onChange={this.handleChange} />)}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Order"
                      hasFeedback
                      style={{ marginBottom: 10 + "px" }}
                    >
                      {getFieldDecorator("order", {
                        initialValue: null,
                        rules: [
                          {
                            required: true,
                            message: "Order is required"
                          }
                        ]
                      })(<InputNumber min={1} onChange={this.handleChange} />)}
                    </FormItem>
                  </Col>
                </Row>
              </Form>
            ) : modalType === "edit" ? (
              <Form className="isoCardInfoForm FormData">
                <Row>
                  <Col className="ant-col-xl-24 ant-col-lg-24">
                    <FormItem {...formItemLayout} label="Name" hasFeedback>
                      {getFieldDecorator("name", {
                        initialValue: row.name,
                        rules: [
                          {
                            required: true,
                            message: "Name is required"
                          }
                        ]
                      })(<Input onChange={this.handleChange} />)}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Color"
                      hasFeedback
                      style={{ marginBottom: 10 + "px" }}
                    >
                      {getFieldDecorator("color", {
                        initialValue: row && row.color ? row.color : null,
                        rules: [
                          {
                            required: true,
                            message: "Color is required"
                          }
                        ]
                      })(<Input onChange={this.handleChange} />)}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Order"
                      hasFeedback
                      style={{ marginBottom: 10 + "px" }}
                    >
                      {getFieldDecorator("order", {
                        initialValue: row && row.order ? row.order : null,
                        rules: [
                          {
                            required: true,
                            message: "Order is required"
                          }
                        ]
                      })(<InputNumber min={1} onChange={this.handleChange} />)}
                    </FormItem>
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
                  </Col>
                </Row>
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

                <TableWrapper
                  dataSource={dataSource}
                  columns={columns}
                  bordered={true}
                  expandedRowRender={expandedRowRender}
                  expandIconAsCell={false}
                  expandIconColumnIndex={0}
                  // pagination={false}
                ></TableWrapper>
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
