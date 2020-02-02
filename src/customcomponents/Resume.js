import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import profilepic from 'assets/img/cvpicgrey.jpg';
import Button from "components/CustomButtons/Button.js";
import {WorkOutline} from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Resume = () => {
  const classes = useStyles();
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.resume}>
                    <h1 className={classes.title}>CV</h1>
                    { /* <h4 className={classes.shorttitle}>Computer Vision Engineer</h4> */}
                    <div className={classes.iconandtext}>
                      <WorkOutline/><h2 className={classes.shorttitle}>Work Experience</h2>
                    </div>
                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
      </div>
    )
}

export default Resume;
