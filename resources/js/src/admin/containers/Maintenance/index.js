import React, { Component } from "react";
import { connect } from "react-redux";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import { Layout } from "antd";
import actions from "../../redux/Config/actions";
import ConfigInfo from "../../components/Maintenance/Index";
import DataWrapper from "../../../common/data.style";
const { Content } = Layout;

class Config extends Component {

  OpenModal() {
    this.setState({ isShow: true });
  }

  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {
    this.props.getInfo();
  }
  render() {
    const {
      info,
      update
    } = this.props;

    return (
      <DataWrapper>
        <LayoutContentWrapper style={{ padding: "0px" }}>
          <h1 className="PageHeader">Maintenance</h1>
          <LayoutContent style={{ paddingBottom: "0px" }}>

            <Layout
              className="isoContactBoxWrapper"
              style={{ border: "none" }}
            >
              <Content className="isoContactBox">
                {<ConfigInfo
                  info={info}
                  update={update}
                />}
              </Content>
            </Layout>
          </LayoutContent>
        </LayoutContentWrapper>
      </DataWrapper>
    );
  }
}
export default connect(
  state => ({
    ...state.ConfigReducer
  }),
  actions
)(Config);
