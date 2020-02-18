import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import styles from 'assets/jss/material-kit-react/customviews/customStyle.js';
import profilepic from 'assets/img/cvpicgrey.jpg';
import Button from 'components/CustomButtons/Button.js';


const useStyles = makeStyles(styles);

const ProfilePic = () => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return(
      <div id="profilepic" className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>

                  { /* Profile Picture */}
                  <div style={{paddingTop:"120px"}}>
                    <img  src={profilepic} className={imageClasses} alt="Medha Juneja"/>
                  </div>


                  <div className={classes.name}>
                      { /* Name */}
                      <h1 className={classes.title}>Medha Juneja</h1>

                      <div className={classes.profileDetails_container}>
                        { /* EmailID */}
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span style={{marginLeft:"5px"}}>medhaj001@gmail.com</span>
                        { /* Location */}
                        <i class="fa fa-map-marker" style={{marginLeft:"15px"}} />
                        <span  style={{marginLeft:"5px"}}>Berlin</span>

                      </div>
                      { /* linkedin profile link */}
                      <Button target="_blank" href="https://www.linkedin.com/in/medha-juneja/" justIcon link className={classes.profileDetails_links}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      { /* xing profile link */}
                      <Button target="_blank"  href="https://www.xing.com/profile/Medha_Juneja/" justIcon link className={classes.profileDetails_links}>
                        <i className={"fab fa-xing"} />
                      </Button>
                      { /* github repo link */}
                      <Button target="_blank" href="https://github.com/medha-juneja" justIcon link className={classes.profileDetails_links}>
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
