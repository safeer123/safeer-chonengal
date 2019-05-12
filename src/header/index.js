import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";

import styles from "./styles";

const Header = ({ classes }) => (
  <div className={classes.headerRoot}>
    <img
      src="../../images/profilePhoto.jpg"
      alt="Profile"
      className={classes.profilePhoto}
    />
  </div>
);

export default compose(
  withTheme(),
  withStyles(styles)
)(Header);
