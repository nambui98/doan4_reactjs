import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../front/containers/User/home';
import { siteConfig } from '../../settings';

export class AppClient extends Component {
  render() {
    
    const { url } = this.props.match;
    return (
      <Home/>
      );
  }
}

export default connect(
  state => ({
    auth: state.AuthClient,
  }),
  {  }
)(AppClient);
