import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Code, Lens } from "@material-ui/icons";

import programmingExperience from "../dataSource/programmingExperience";
import styles from "./styles";

const ProgrammingExperience = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <Code className={classes.sectionTitleIcon} />
        PROGRAMMING EXPERIENCE
      </h4>
      {programmingExperience.map((p) => (
        <div key={p.id} className={classes.item}>
          <h5 className={classes.itemTitle}>
            {p.projectTitle.toUpperCase()} ({p.subTitle} - {p.year})
          </h5>
          {p.details.map((d) => (
            <div key={d} className={classes.content}>
              <Lens className={classes.contentTextBullet} />
              <div className={classes.contentText}>{d}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default compose(withTheme(), withStyles(styles))(ProgrammingExperience);
