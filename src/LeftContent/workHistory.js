import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Work, Lens } from "@material-ui/icons";

import workExperience from "../dataSource/workExperience";
import styles from "./styles";

const WorkHistory = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <Work className={classes.sectionTitleIcon} />
        {workExperience.title.toUpperCase()}
      </h4>
      {workExperience.roles.map((w) => (
        <div key={w.company} className={classes.item}>
          <h5 className={classes.itemTitle}>
            {w.company.toUpperCase()} ({w.location} - {w.timeline})
          </h5>
          {w.notes.map((n) => (
            <div key={n} className={classes.content}>
              <Lens className={classes.contentTextBullet} />
              <div className={classes.contentText}>{n}</div>
            </div>
          ))}
          <div className={classes.skillsWrapper}>
            {w.skills &&
              w.skills.map((s, i) => (
                <div
                  key={s}
                  className={classes.skillsItem}
                  style={{
                    borderRight: i === w.skills.length - 1 ? "none" : ""
                  }}
                >
                  {s}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default compose(withTheme(), withStyles(styles))(WorkHistory);
