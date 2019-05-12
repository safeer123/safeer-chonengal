import React from "react";
import { compose } from "recompose";
import Typography from "@material-ui/core/Typography";
import { withStyles, withTheme } from "@material-ui/core/styles";

import styles from "./styles";

const Header = ({ classes }) => (
  <div className={classes.headerRoot}>
    <img
      src="https://uploads.codesandbox.io/uploads/user/ad115901-c73d-4482-bdf8-9a6e3d2e853b/fubM-Photo%20from%20Safeer%20C.jpg"
      alt="Profile"
      className={classes.profilePhoto}
    />
    <div className={classes.profileDetails}>
      <Typography
        variant="h4"
        gutterBottom
        classes={{
          h4: `${classes.headerFontStyle}`
        }}
      >
        Safeer Chonengal
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        classes={{
          h5: `${classes.headerFontStyle}`
        }}
      >
        About me
      </Typography>
    </div>
  </div>
);

export default compose(
  withTheme(),
  withStyles(styles)
)(Header);
