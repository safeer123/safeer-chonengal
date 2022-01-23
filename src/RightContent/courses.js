import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { LibraryBooks, Lens } from "@material-ui/icons";

import relevantCources from "../dataSource/relevantCources";
import styles from "./styles";

const Courses = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <LibraryBooks className={classes.sectionTitleIcon} />
        RELEVANT COURSES
      </h4>
      {relevantCources.map((c) => (
        <div key={c.id} className={classes.item}>
          <Lens className={classes.contentTextBullet} />
          <div className={classes.contentText}>{c.title}</div>
        </div>
      ))}
    </div>
  );
};

export default compose(withTheme(), withStyles(styles))(Courses);
