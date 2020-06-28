import React from 'react';
import logo from '../../public/images/logo-inside.png'
import logo_mini from '../../public/images/logo_mini.png'
import { Link } from 'react-router-dom';
export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/">
              <img src={logo_mini} alt="logo" style={{height: 70+"px"}} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/" >
            <img src={logo} style={{height: 70+"px"}} alt="logo"/>
          </Link>
        </h3>
      )}
    </div>
  );
};
