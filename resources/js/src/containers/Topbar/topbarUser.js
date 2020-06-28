import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Popover from '../../components/uielements/popover';
import IntlMessages from '../../components/utility/intlMessages';
import userpic from '../../image/user.png';
import authAction from '../../redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';
import { Icon } from "antd";

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        {/*<a className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
    </a>*/}
        <Link to="/admin/profile" className="isoDropdownLink">
          <Icon type="user" /> &nbsp;  {localStorage["user_name"]}
        </Link>
        <a href="/admin/logout" className="isoDropdownLink" onClick={this.props.logout} >
          <Icon type="logout" /> &nbsp; <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          {this.props.userImage ?
            <img alt="user" src={this.props.userImage} /> :
            <img alt="user" src={userpic} />
          }
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
function mapStateToProps(state) {
  return {
    userImage: state.Auth.userImage !== undefined ? state.Auth.userImage : localStorage.getItem('user_image'),
  };
}
export default connect(mapStateToProps, { logout })(TopbarUser);
