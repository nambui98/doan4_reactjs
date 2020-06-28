/*
    Method Name: UserAnnouncement
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
import { Form, Button } from "antd";
import DataWrapper from "../../../common/data.style";
import IntlMessages from "../../../components/utility/intlMessages";
import { urlConfig } from "../../../settings";
import { isNullOrUndefined } from "util";

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
class ModalFormAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      isLoadding: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.modalType === "none") {
      this.setState({
        changed: false
      });
      this.props.form.resetFields();
    }
  }

  //Disable or enable save button
  handleChange = e => {
    this.setState({
      changed: true
    });
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    const { modalActive, modalType, row, handleSubmit } = this.props;

    const saveButton = e => {
      e.preventDefault();
      let newRow = { ...row };
      newRow.announcement_type_id = 1;
      handleSubmit(newRow);
    };
    let images =
      !isNullOrUndefined(row) &&
      !isNullOrUndefined(row.announcement) &&
      row.announcement.images
        ? row.announcement.images
            .split("##########")
            .slice(0, row.announcement.images.split("##########").length - 1)
        : [];

    return (
      <Modal
        title="DETAIL"
        className="FormModal"
        style={{ top: 50 }}
        width={50 + "%"}
        visible={modalActive}
        onCancel={this.handleCancel}
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
          ((
            <Button
              key="cancel"
              className="cancelType"
              onClick={this.handleCancel}
            >
              <IntlMessages id="button.close" />
            </Button>
          ),
          (
            <div>
              {localStorage.getItem("type") === 1 ? (
                ""
              ) : (
                <div>
                  <div style={{ marginBottom: 10, fontWeight: "bold" }}>
                    I read and understand
                  </div>
                  <Button
                    key="ok"
                    className="okType"
                    onClick={saveButton}
                    style={{
                      backgroundColor: "#55D604",
                      color: "#FFFFFF",
                      borderRadius: "6px"
                    }}
                    disabled={row.announcement_type_id === 1}
                  >
                    Acknowledge
                  </Button>
                </div>
              )}
            </div>
          ))
        }
      >
        <DataWrapper>
          <div className="clearfix">
            <div>
              <div className="clearfix"></div>
              <div className="detailField clearfix">
                <label className="label">User</label>
                <div className="contentDetail">
                  {row && row.admin ? row.admin.full_name : ""}
                </div>
              </div>
              <div className="detailField clearfix">
                <label className="label">Title</label>
                <div className="contentDetail">
                  {row && row.announcement ? row.announcement.title : ""}
                </div>
              </div>

              <div className="detailField clearfix">
                <label className="label detailFieldFullBorder">Type</label>
                <div className="contentDetail">
                  {row && row.announcement_type
                    ? row.announcement_type.name
                    : ""}
                </div>
              </div>

              <div className="detailField clearfix">
                <label className="label detailFieldFullBorder">Date</label>
                <div className="contentDetail">
                  {row && row.announcement.announcement_date
                    ? moment(row.announcement.announcement_date).format(
                        "DD/MM/YYYY"
                      )
                    : ""}
                </div>
              </div>
              {/* <div className="detailField clearfix">
                <label className="label detailFieldFullBorder">Created at</label>
                <div className="contentDetail">
                  {row && row.announcement.created_at
                    ? moment(row.announcement.announcement_date).format(
                        "DD/MM/YYYY HH:mm:ss"
                      )
                    : ""}
                </div>
              </div> */}
            </div>
            <div>
              <label style={{ fontWeight: "bold", padding: "0 7px" }}>
                Description:
              </label>
            </div>
            <div style={{ fontWeight: "500", padding: "7px 7px" }}>
              {row && row.announcement ? row.announcement.description : ""}
            </div>

            {images.map((image, index) => [
              <img
                alt=""
                key={index}
                style={{ width: "100%", margin: "4px 0" }}
                src={urlConfig.imageUrl + image}
              />,
              <br key={index + images.length}></br>
            ])}
          </div>
        </DataWrapper>
      </Modal>
    );
  }
}

const WrappedModalFormAccount = Form.create()(ModalFormAccount);
export default WrappedModalFormAccount;
