import React, { Component } from "react";
import { connect } from "react-redux";
import clone from "clone";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import options from "./options";
import Scrollbars from "../../components/utility/customScrollBar.js";
import Menu from "../../components/uielements/menu";
import IntlMessages from "../../components/utility/intlMessages";
import SidebarWrapper from "./sidebar.style";
import appActions from "../../redux/app/actions";
import accountActions from "../../admin/redux/Account/actions";
import Logo from "../../components/utility/logo";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = appActions;

const {
  LogoutAll
} = accountActions;

const stripTrailingSlash = str => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === "MobileView") {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  nextProps = () => {
    const roleStore = clone(this.props.roleStore);
    let role = clone(roleStore) ? clone(roleStore) : clone(JSON.parse(localStorage.getItem("role_detail")));
    let roleArr = [];
    if (role != null && role.length > 0) {
      role.forEach(function (value, e) {
        roleArr.push(value.address);
      });
    }
    return roleArr;
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ["sub2"]
    };
    return map[key] || [];
  };
  getMenuItem = ({ singleOption, submenuStyle, submenuColor }) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);
    let roleArr = this.nextProps();
    let role = this.props.roleStore ? this.props.roleStore : JSON.parse(localStorage.getItem("role_detail"));
    if (children) {
      let childrenArr = [];
      let check = [];
      children.forEach(function (value, e) {
        childrenArr.push(value.key);
      })
      check = childrenArr.filter(value => -1 !== roleArr.indexOf(value));
      if (check.length > 0) {
        return (
          <SubMenu
            key={key}
            title={
              <span className="isoMenuHolder" style={submenuColor}>
                <i className={leftIcon} style={{ marginRight: "20px" }} />
                <span className="nav-text">
                  <IntlMessages id={label} />
                </span>
              </span>
            }
          >
            {children.map(child => {
              const linkTo = child.withoutDashboard
                ? `/${child.key}`
                : `${url}/${child.key}`;
              let chk = role.findIndex(x => x.address === child.key)
              if (chk > -1) {
                return (
                  <Menu.Item style={submenuStyle} key={child.key}>
                    <Link style={submenuColor} to={linkTo}>
                      <IntlMessages id={child.label} />
                    </Link>
                  </Menu.Item>
                );
              } else return ("")
            })}
          </SubMenu>
        );
      }
    }
    if (role != null) {
      let chk = role.findIndex(x => x.address === key)
      if (chk > -1) {
        return (
          <Menu.Item key={key}>
            <Link to={`${url}/${key}`}>
              <span className="isoMenuHolder" style={submenuColor}>
                <i className={leftIcon} style={{ marginRight: "20px" }} />
                <span className="nav-text">
                  <IntlMessages id={label} />
                </span>
              </span>
            </Link>
          </Menu.Item>
        );
      }
    }
  };

  handleSubmit = () => {
    this.props.LogoutAll();
  };

  render() {
    const { app, toggleOpenDrawer, customizedTheme, height } = this.props;
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;

    const mode = collapsed === true ? "vertical" : "inline";
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    const submenuStyle = {
      backgroundColor: "rgba(0,0,0,0.3)",
      color: customizedTheme.textColor
    };
    const submenuColor = {
      color: customizedTheme.textColor
    };
    const localUrl =
      [
        {
          id: "sidebar.contentManagement",
          group: "g1",
          content:
            [
              {
                url: "admin/news-types",
                id: "sidebar.newsType"
              }, {
                url: "admin/guide-types",
                id: "sidebar.guideType"
              }, {
                url: "admin/config",
                id: "sidebar.homePopup"
              }, {
                url: "admin/maintenance",
                id: "sidebar.maintenance"
              },
              {
                url: 'admin/imageType',
                id: 'sidebar.imageType',
              },
              {
                url: 'admin/incidentType',
                id: 'sidebar.incidentType',
              },
              {
                url: 'admin/incidentSeverity',
                id: 'sidebar.incident_severity',
              },
              {
                url: 'admin/incidentDamages',
                id: 'sidebar.incidentDamages',
              },
              {
                url: 'admin/jobSite',
                id: 'sidebar.jobSite',
              },
              {
                url: 'admin/jobType',
                id: 'sidebar.jobType',
              },
              {
                url: 'admin/announcementType',
                id: 'sidebar.annoucementType',
              },
              {
                url: 'admin/checklist',
                id: 'sidebar.checklist',
              },
            ]
        },
        {
          id: "sidebar.system",
          group: "g4",
          content: [
            {
              url: "admin/roles",
              id: "sidebar.roles"
            }
          ]
        }
      ]
    let roleArr = this.nextProps();
    let role = this.props.roleStore ? this.props.roleStore : JSON.parse(localStorage.getItem("role_detail"));
    const urlArr = [];
    localUrl.forEach(function (value, index) {
      value.content.forEach(function (value1, index1) {
        urlArr.push(value1.url);
      });
    });
    let checkLocal = [];
    checkLocal = urlArr.filter(value => -1 !== roleArr.indexOf(value));
    let checkIndex = -1;
    if (role != null) {
      checkIndex = role.findIndex(x => x.address === "dashboard");
    }
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width={240}
          className="tspSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars style={{ height: height - 70 }}>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              className="isoDashboardMenu"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
            >
              {
                checkIndex > -1 ?
                  (
                    <Menu.Item key="dashboard">
                      <Link to="dashboard">
                        <span className="isoMenuHolder" style={submenuColor}>
                          <i className='ion-android-home' style={{ marginRight: "20px" }} />
                          <span className="nav-text">
                            <IntlMessages id="sidebar.dashboard" />
                          </span>
                        </span>
                      </Link>
                    </Menu.Item>
                  ) : ""
              }
              {options.map(singleOption =>
                this.getMenuItem({ submenuStyle, submenuColor, singleOption })
              )}

              {
                checkLocal.length > 0 ?
                  (
                    <SubMenu
                      key="sub1"
                      title={
                        <span className="isoMenuHolder" style={submenuColor}>
                          <i className="ion-android-menu" style={{ marginRight: "20px" }} />
                          <span className="nav-text">
                            <IntlMessages id="sidebar.configManager" />
                          </span>
                        </span>
                      }
                    >
                      {
                        localUrl.map((value2) => {
                          let check3 = [];
                          let localUrl2 = [];
                          value2.content.forEach(function (val, i) {
                            localUrl2.push(val.url);
                          });
                          check3 = localUrl2.filter(value => -1 !== roleArr.indexOf(value));
                          if (check3.length > 0) {
                            return (
                              <MenuItemGroup
                                key={value2.group}
                                title={<IntlMessages id={value2.id} />}
                              >
                                {
                                  value2.content.map((value3, index3) => {
                                    let check2 = roleArr.indexOf(value3.url);
                                    if (check2 > -1) {
                                      return (
                                        <Menu.Item style={submenuStyle} key={index3 + 1}>
                                          <Link to={`/${value3.url}`}>
                                            <IntlMessages id={value3.id} />
                                          </Link>
                                        </Menu.Item>
                                      );
                                    } else return ("")
                                  })
                                }
                              </MenuItemGroup>
                            )
                          } else return ("")
                        })
                      }
                    </SubMenu>
                  ) : ""
              }

            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}


export default connect(
  state => ({
    app: state.App,
    location: state.router.location,
    customizedTheme: state.ThemeSwitcher.sidebarTheme,
    height: state.App.height,
    ...state.Accounts,
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed, LogoutAll }
)(Sidebar);
