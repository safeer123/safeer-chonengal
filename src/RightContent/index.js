import React from "react";
import { compose } from "recompose";
import Typography from "@material-ui/core/Typography";
import { withStyles, withTheme } from "@material-ui/core/styles";

import styles from "./styles";

const WorkExperience = [
  {
    title: "HaulPLAN",
    organization: "Optym India Pvt Ltd",
    startYear: 2017,
    endYear: "present",
    description: "Worked on HaulPLAN product of Optym"
  },
  {
    title: "VizDisplay",
    organization: "VizExperts India Pvt Ltd",
    startYear: 2014,
    endYear: 2017,
    description: "Worked on HaulPLAN product of Optym"
  }
];

const RightContent = ({ classes }) => {
  return (
    <div className={classes.rightRegion}>
      {WorkExperience.map(w => (
        <div className={classes.item}>
          <Typography
            variant="h6"
            gutterBottom
            classes={{
              h6: `${classes.expTitle}`
            }}
          >
            {w.title}
          </Typography>
          <p>{w.description}</p>
        </div>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(RightContent);
