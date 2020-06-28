import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/Dashboard/actions";

import clone from "clone";
import { Row, Col, Icon, Button, Spin, Card } from "antd";
import { TitleWrapper, ComponentTitle } from "../../../common/control.style";
import LayoutWrapper from "./../../../components/utility/layoutWrapper.js";
import basicStyle from "./../../../settings/basicStyle";
import IsoWidgetsWrapper from "./../../containers/Widgets/widgets-wrapper";
import StickerWidget from "./../../containers/Widgets/sticker/sticker-widget";
import { dataList } from "./../../../containers/Tables/antTables";
import DatatabePageWrapper from "../../../common/data.style";
import { withWindowSizeListener } from "react-window-size-listener";
import moment from "moment";
import socketActions from "../../redux/Socket/actions";
import { connectSocket, listenSocket } from "./../../../helpers/message";
import flags from "../../../helpers/flags";
import IntlMessages from "../../../components/utility/intlMessages";
const tableDataList = clone(dataList);
tableDataList.size = 5;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 7,
      startDate: moment(new Date())
        .subtract(7, "days")
        .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    this.socketIO = null;
  }
  componentDidMount() {
    const page = {
      type: this.state.type,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.loadData(page);
    this.socketIO = connectSocket(this.props.socketIO);
    listenSocket(this.socketIO, flags.DASHBOARD, (flag, data) => {
      this.props.loadData(page);
    });
    if (this.props.socketIO === null) {
      this.props.setSocket(this.socketIO);
    }
  }
  handelSeachToday = () => {
    const page = {
      type: 1,
      startDate: moment(new Date()).format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    this.setState(page);
    this.props.loadData(page);
  };
  handelSeachLast7Days = () => {
    const page = {
      type: 7,
      startDate: moment(new Date())
        .subtract(7, "days")
        .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    this.setState(page);
    this.props.loadData(page);
  };
  handelSeachLast30Days = () => {
    const page = {
      startDate: moment(new Date())
        .subtract(1, "month")
        .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59"),
      type: 8
    };
    this.setState(page);
    this.props.loadData(page);
  };
  handelSeachLast6months = () => {
    const page = {
      type: 9,
      startDate: moment(new Date())
        .subtract(6, "months")
        .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    this.setState(page);
    this.props.loadData(page);
  };
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const { data } = this.props;
    const wisgetPageStyle = {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      overflow: "hidden",
      marginTop: 10
    };
    return (
      <DatatabePageWrapper>
        <LayoutWrapper style={{ padding: 0 }}>
          <h1 className="PageHeader">
            <Icon className="DisplayStyleButton" type="global" />
            &nbsp; Dashboard
          </h1>
          <div style={wisgetPageStyle}>
            <TitleWrapper className="titleWrapper allInner">
              <ComponentTitle>
                <Button
                  className="btWizard"
                  onClick={this.handelSeachToday}
                  style={{ paddingLeft: 15, marginRight: 15 }}
                >
                  Today
                </Button>
                <Button
                  className="btWizard"
                  onClick={this.handelSeachLast7Days}
                  style={{ paddingLeft: 15, marginRight: 15 }}
                >
                  Last 7 days
                </Button>
                <Button
                  className="btWizard"
                  onClick={this.handelSeachLast30Days}
                  style={{ paddingLeft: 15, marginRight: 15 }}
                >
                  Last 1 month
                </Button>
                <Button
                  className="btWizard"
                  onClick={this.handelSeachLast6months}
                  style={{ paddingLeft: 15, marginRight: 15 }}
                >
                  Last 6 months
                </Button>
              </ComponentTitle>
            </TitleWrapper>
            <TitleWrapper className="titleWrapper allInner">
              <ComponentTitle>
                {this.props.isLoading ? <Spin size="large" /> : ""}
                <strong>
                  {this.state.type === 1
                    ? "Today"
                    : this.state.type === 7
                    ? " Last 7 days "
                    : this.state.type === 8
                    ? " Last 1 month "
                    : this.state.type === 9
                    ? " Last 6 months"
                    : ""}
                </strong>
              </ComponentTitle>
            </TitleWrapper>
            <Row style={rowStyle} gutter={0} justify="start">
              <div
                style={{
                  paddingLeft: "10px",
                  paddingTop: 10,
                  fontWeight: "bold"
                }}
              >
                {" "}
                <IntlMessages id="sidebar.annoucement" />
              </div>
            </Row>
            {data && data.annoucement_types ? (
              <Row style={rowStyle} gutter={0} justify="start">
                {data.annoucement_types.map((row, index) => {
                  return (
                    <Col
                      lg={6}
                      md={12}
                      sm={12}
                      xs={24}
                      key={"annoucement_types" + index}
                      style={
                        ({ ...colStyle },
                        { marginTop: "10px", marginBottom: "10px" })
                      }
                    >
                      <IsoWidgetsWrapper>
                        {/* Sticker Widget */}
                        <StickerWidget
                          style={{ border: "2px solid #d9ba85" }}
                          number={
                            data.user_announcements.filter(
                              c => c.announcement_type_id === row.id
                            ).length
                          }
                          text={row.name}
                          icon="ion-filing"
                          fontColor="#ffffff"
                          bgColor={row.color}
                          height="120px"
                        />
                      </IsoWidgetsWrapper>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              ""
            )}
            <Row style={rowStyle} gutter={0} justify="start">
              <div
                style={{
                  paddingLeft: "10px",
                  paddingTop: 10,
                  fontWeight: "bold"
                }}
              >
                Incidents
              </div>
            </Row>
            {data && data.incident_types ? (
              <Row style={rowStyle} gutter={0} justify="start">
                {data.incident_types.map((row, index) => {
                  return (
                    <Col
                      lg={6}
                      md={12}
                      sm={12}
                      xs={24}
                      key={"incident_types" + index}
                      style={
                        ({ ...colStyle },
                        { marginTop: "10px", marginBottom: "10px" })
                      }
                    >
                      <IsoWidgetsWrapper>
                        {/* Sticker Widget */}
                        <StickerWidget
                          style={{ border: "2px solid #d9ba85" }}
                          number={
                            data.incidents.filter(
                              c => c.incident_type_id === row.id
                            ).length
                          }
                          text={row.name}
                          icon="ion-filing"
                          fontColor="#ffffff"
                          bgColor={row.color}
                          height="120px"
                        />
                      </IsoWidgetsWrapper>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              ""
            )}

            <Row style={rowStyle} gutter={0} justify="start">
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={24}
                style={({ ...colStyle }, { marginTop: "15px" })}
                scroll={{ x: 1500, y: 300 }}
              >
                <IsoWidgetsWrapper>
                  <h3>Recent Message</h3>
                  <div style={{ overflowY: "scroll", height: "400px" }}>
                    {data && data.user_announcements
                      ? data.user_announcements.map((row, index) => {
                          return (
                            <Card key={index} style={{ margin: "5px 0" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between"
                                }}
                              >
                                <div>
                                  <h4>{row.announcement.title}</h4>
                                  <p>
                                    {moment(
                                      row.announcement.announced_date
                                    ).format("DD MMMM YYYY HH:mm:ss")}
                                  </p>
                                </div>

                                <h4
                                  style={{
                                    float: "right",
                                    color:
                                      row.announcement_type.id === 1
                                        ? "#34c134"
                                        : "Red"
                                  }}
                                >
                                  {row.announcement_type.name}
                                </h4>
                              </div>
                            </Card>
                          );
                        })
                      : ""}
                  </div>
                </IsoWidgetsWrapper>
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={24}
                style={{ marginTop: "15px" }}
              >
                <IsoWidgetsWrapper>
                  <h3>Recent Incidents</h3>
                  <div style={{ overflowY: "scroll", height: "400px" }}>
                    {data && data.incidents
                      ? data.incidents.map((row, index) => {
                          return (
                            <Card key={index} style={{ margin: "5px 0" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between"
                                }}
                              >
                                <div>
                                  <h4>{row.incident_type.name}</h4>
                                  <p>
                                    {moment(row.reported_on).format(
                                      "DD MMMM YYYY HH:mm:ss"
                                    )}
                                  </p>
                                </div>
                              </div>
                            </Card>
                          );
                        })
                      : ""}
                  </div>
                </IsoWidgetsWrapper>
              </Col>
            </Row>
          </div>
        </LayoutWrapper>
      </DatatabePageWrapper>
    );
  }
}
export default connect(
  state => ({
    ...state.DashboardReducer,
    ...state.SocketReducer
  }),
  { ...actions, ...socketActions }
)(withWindowSizeListener(Index));
