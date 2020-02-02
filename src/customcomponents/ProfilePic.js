import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import profilepic from 'assets/img/cvpicgrey.jpg';
import Button from "components/CustomButtons/Button.js";
import {MailOutline} from "@material-ui/icons";

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
                    { /* <h4 className={classes.shorttitle}>Computer Vision Engineer</h4> */}
                    <div>
                    <Button color="transparent" link justIcon className={classes.profilebuttons}>
                    <MailOutline />
                    <span className={classes.margin5Left}>medhaj001@gmail.com</span>
                    </Button>

                    <Button color="transparent" link justIcon className={classes.profilebuttons}>
                    <i className={"fa fa-map-marker"} />
                    <span className={classes.margin5Left}>Berlin</span>
                    </Button>
                    </div>

                    <Button target="_blank" href="https://www.linkedin.com/in/medha-juneja/" justIcon link>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button target="_blank"  href="https://www.xing.com/profile/Medha_Juneja/" justIcon link>
                      <i className={"fab fa-xing"} />
                    </Button>
                    <Button target="_blank" href="https://github.com/medha-juneja" justIcon link>
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
