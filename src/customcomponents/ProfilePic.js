import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import profilepic from 'assets/img/cvpicgrey.jpg';
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

const ProfilePic = () => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profilepic} className={imageClasses} alt="Medha Juneja"/>
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>Medha Juneja</h1>
                    <h4>Computer Vision Engineer</h4>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-xing"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
      </div>
    )
}

export default ProfilePic;
