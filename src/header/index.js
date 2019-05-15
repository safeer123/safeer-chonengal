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
        component="h2"
        variant="display1"
        gutterBottom
        classes={{
          display1: `${classes.headerFontStyle} ${classes.nametitle}`
        }}
      >
        Safeer Chonengal
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.jobtitle}`
        }}
      >
        Web Application developer
        <br /> Graphics Engineer
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        classes={{
          body1: `${classes.headerFontStyle}`
        }}
      >
        Self motivated to work in web techology stacks
      </Typography>

      <div>
        <div className={classes.skillBadge}>ReactJS</div>
        <div className={classes.skillBadge}>WebGL</div>
        <div className={classes.skillBadge}>Material UI</div>
      </div>
    </div>

    <div className={classes.contactDetails}>
      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.jobtitle}`
        }}
      >
        +91 8105267620
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.jobtitle}`
        }}
      >
        safeer2c@gmail.com
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        classes={{
          h6: `${classes.headerFontStyle} ${classes.jobtitle}`
        }}
      >
        <a href="https://www.linkedin.com/in/safeerchonengal">LinkedIn</a>
      </Typography>
    </div>
  </div>
);

export default compose(
  withTheme(),
  withStyles(styles)
)(Header);
