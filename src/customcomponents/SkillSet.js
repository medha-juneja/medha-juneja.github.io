import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/skillsetPage.js";
import profilepic from 'assets/img/cvpicgrey.jpg';
import Button from "components/CustomButtons/Button.js";
import {Code, Language} from "@material-ui/icons";
import NavPills from "components/NavPills/NavPills.js";

const useStyles = makeStyles(styles);

const SkillSet = () => {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return(
      <div className={classNames(classes.main, classes.mainRaised)} >
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8} className={classes.navWrapper}>
                <div className={classes.cvheading_container}>
                  <i class="fas fa-cogs fa-2x"></i><h2 className={classes.cvheading}>My Skillset</h2>
                </div>
                      <NavPills alignCenter color="info"
                        tabs={[
                          {
                            tabButton: "Technical Skills",
                            tabIcon: Code,
                            tabContent: (
                              <div>
                                  <Button color="info" size ="lg" round>C++</Button>
                                  <Button color="info" size ="lg" round>Python</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Javascript</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>C#</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>R</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>SQL</Button>
                                  <br/>
                                  <Button color="info" size ="lg" round>DICOM</Button>
                                  <Button color="info" size ="lg" round>DCMTK</Button>
                                  <Button color="info" size ="lg" round>VTK</Button>
                                  <Button color="info" size ="lg" round>ITK</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Unreal Engine</Button>
                                  <br/>
                                  <Button color="info" size ="lg" round>OpenCV</Button>
                                  <Button color="info" size ="lg" round>Eigen</Button>
                                  <Button color="info" size ="lg" round>VCGLib</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size="lg" round>Boost</Button>
                                  <br/>
                                  <Button color="info" size ="lg" round>Git</Button>
                                  <Button color="info" size ="lg" round>SVN</Button>
                                  <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Docker</Button>
                                  <br/>
                                  <Button color="info" size ="lg" round>SCRUM</Button>
                                  <Button color="info" size ="lg" round>Kanban</Button>
                                  <Button color="info" size ="lg" round>JIRA</Button>
                                  <Button color="info" size ="lg" round>Trello</Button>
                                </div>
                            )
                          },

                          {
                            tabButton: "Language Skills",
                            tabIcon: Language,
                            tabContent: (
                              <div>
                                <Button color="info" size ="lg" round>English</Button>
                                <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>German (A2)</Button>
                              </div>
                            )

                          }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>

    )
}

export default SkillSet;
