import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";

import WorkHistory from "./workHistory";
import ProgrammingExperience from "./programmingExperience";
// import HonorsAndAwards from "./honorsAndAwards";
import styles from "./styles";

const LeftContent = ({ classes }) => {
  return (
    <div className={classes.leftRegion}>
      <WorkHistory />
      {/* <hr />
      <ProgrammingExperience /> */}
    </div>
  );
};

export default compose(withTheme(), withStyles(styles))(LeftContent);
