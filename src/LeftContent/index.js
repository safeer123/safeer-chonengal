import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";

import WorkHistory from "./workHistory";
import styles from "./styles";

const LeftContent = ({ classes }) => {
  return (
    <div className={classes.leftRegion}>
      <WorkHistory />
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(LeftContent);
