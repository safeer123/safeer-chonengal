import React from "react";
import { compose } from "recompose";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { FeaturedPlayList, Link } from "@material-ui/icons";

import portfolio from "../dataSource/portfolio";
import styles from "./styles";

const Portfolio = ({ classes }) => {
  return (
    <div className={classes.workExperience}>
      <h4 className={classes.sectionTitle}>
        <FeaturedPlayList className={classes.sectionTitleIcon} />
        PORTFOLIO
      </h4>
      {portfolio.map((c) => (
        <div className={classes.item}>
          <Link className={classes.contentTextBullet} />
          <div className={classes.contentText}>
            {c.title} -{" "}
            <a
              className={classes.smallFont}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.link}
            </a>
            <div className={classes.smallFont}>
              {c.description && c.description} ({c.technology})
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default compose(withTheme(), withStyles(styles))(Portfolio);
