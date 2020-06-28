import React, { Component } from "react";
import { connect } from "react-redux";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import { Layout, Icon } from "antd";
import ProfileView from "../../components/profile/profileView";
import IntlMessages from "../../../components/utility/intlMessages";
import { otherAttributes } from "./otherAttributes";
import Button from "../../../components/uielements/button";
import ChangePasswordModal from "../../components/profile/ChangPasswordModal";
import actions from "../../redux/profile/actions";
import authActions from "../../../redux/auth/actions";
import NewEditProfile from "../../components/profile/NewEditProfile";
import { ProfileControll } from "../../../common/control.style";
import DataWrapper from "../../../common/data.style";
import styleControl from "../../../common/styleControl";

const { resetAvata } = authActions;
const {
  changePassword,
  getUser,
  viewProfileChange,
  submitEditProfile,
  cancelEditProfile
} = actions;
const { Content } = Layout;
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return JSON.stringify(obj) === JSON.stringify({});
}
class Profile extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      isShow: false,
      profile: {
        userId: this.props.userId,
        oldpass: null,
        newpass: null,
        confirmpass: null
      }
    };
    this.state = this.initState;
    this.handleCancel = this.handleCancel.bind(this);
    this.OpenModal = this.OpenModal.bind(this);
  }
  handleCancel() {
    this.setState(this.initState);
  }
  handleSubmit(profile) {
    const { changePassword } = this.props;
    changePassword(profile);
  }
  OpenModal() {
    this.setState({ isShow: true });
  }
  //Update Personal information chuẩn bị cho submit
  UpdateProfile(profile) {
    this.setState({
      profile: profile
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorChangePass === false) {
      this.setState(this.initState);
    }
    if (!isEmpty(nextProps.currentUser)) {
      resetAvata(this.props.currentUser.image);
    }
  }
  componentDidMount() {
    const { getUser } = this.props;
    const { idToken, userId } = this.props;
    getUser(userId, idToken);
  }
  render() {
    const { isShow, profile } = this.state;
    const {
      currentUser,
      editViewProfile,
      viewProfileChange,
      submitEditProfile,
      cancelEditProfile,
      idToken,
      userId,
      dataUsers
    } = this.props;
    const changeViewProfile = () => {
      viewProfileChange(!editViewProfile);
    };
    const handleCancelEditProfile = () => {
      cancelEditProfile(userId, idToken);
    };
    return (
      <DataWrapper>
        <LayoutContentWrapper style={{ padding: "0px" }}>
          <h1 className="PageHeader">Personal information</h1>
          <LayoutContent
            style={{ paddingBottom: "0px", backgroundColor: "#f1f3f6" }}
          >
            <Layout className="isoContactBoxWrapper" style={{ border: "none" }}>
              <Content className="isoContactBox">
                <ProfileControll>
                  {editViewProfile ? (
                    ""
                  ) : (
                    <Button
                      type="button"
                      style={styleControl(1, "")}
                      className="profileButton btnRefresh"
                      onClick={changeViewProfile}
                    >
                      <Icon type="edit" />
                      <span>Edit</span>
                    </Button>
                  )}
                  <Button
                    style={styleControl(1, "")}
                    className="profileButton btnAdd"
                    onClick={this.OpenModal}
                  >
                    <IntlMessages id="profile.ChangePassword" />
                  </Button>
                </ProfileControll>

                {editViewProfile ? (
                  <NewEditProfile
                    profileUpdate={currentUser}
                    dataUsers={dataUsers}
                    otherAttributes={otherAttributes}
                    cancelEdit={handleCancelEditProfile}
                    submitEditProfile={submitEditProfile}
                    idToken={idToken}
                    userId={userId}
                  />
                ) : (
                  <ProfileView
                    profile={currentUser}
                    otherAttributes={otherAttributes}
                  />
                )}
                <ChangePasswordModal
                  isShow={isShow}
                  userId={this.props.userId}
                  handleCancel={this.handleCancel}
                  profile={profile}
                  submitChange={this.handleSubmit.bind(this)}
                  updateProfile={this.UpdateProfile.bind(this)}
                  errorChangePass={this.props.errorChangePass}
                />
              </Content>
            </Layout>
          </LayoutContent>
        </LayoutContentWrapper>
      </DataWrapper>
    );
  }
}
function mapStateToProps(state) {
  const { idToken } = state.Auth;
  const {
    currentUser,
    editViewProfile,
    errorChangePass,
    dataUsers
  } = state.profileReducer;
  return {
    idToken,
    userId:
      state.Auth.userId != null
        ? state.Auth.userId
        : localStorage.getItem("user_id"),
    currentUser,
    errorChangePass,
    editViewProfile,
    dataUsers
  };
}
export default connect(mapStateToProps, {
  changePassword,
  getUser,
  viewProfileChange,
  submitEditProfile,
  cancelEditProfile,
  resetAvata
})(Profile);
