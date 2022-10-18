import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DWLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <DWLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
      {/* <h1>Footer</h1> */}
    </Fragment>
  );
};

export default Navigation;
