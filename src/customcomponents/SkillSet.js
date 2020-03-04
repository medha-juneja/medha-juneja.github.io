import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/customStyle.js";
import Button from "components/CustomButtons/Button.js";
import {Code, Language} from "@material-ui/icons";
import NavPills from "components/NavPills/NavPills.js";

const useStyles = makeStyles(styles);

const SkillSet = () => {
  const classes = useStyles();
    return(
      <div id="skills" className={classNames(classes.main, classes.mainRaised)} >
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8} className={classes.navWrapper}>
              { /* Skill Set start */}

                { /* Skillset title */}
              <div className={classes.aligncontainer}>
                <div className={classes.heading_container}>
                  <i class="fas fa-cogs fa-2x"></i>
                  <h2 className={classes.heading}>My Skillset</h2>
                </div>
                </div>
                  { /* Navigation pills start */}
                <NavPills alignCenter color="info"
                  tabs={[
                    {
                      // TAB 1 - Tech skills start
                      tabButton: "Technical Skills",
                      tabIcon: Code,
                      tabContent: (
                        <div>
                            { /* Tech skills row 1 start */}
                            <Button color="info" size ="lg" round>C++</Button>
                            <Button color="info" size ="lg" round>Python</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Javascript</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>C#</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>R</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>SQL</Button>
                            { /* Tech skills row 1 end */}
                            <br/>
                            { /* Tech skills row 2 start */}
                            <Button color="info" size ="lg" round>DICOM</Button>
                            <Button color="info" size ="lg" round>DCMTK</Button>
                            <Button color="info" size ="lg" round>VTK</Button>
                            <Button color="info" size ="lg" round>ITK</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Unreal Engine</Button>
                            { /* Tech skills row 2 end */}
                            <br/>
                            { /* Tech skills row 3 start */}
                            <Button color="info" size ="lg" round>OpenCV</Button>
                            <Button color="info" size ="lg" round>Eigen</Button>
                            <Button color="info" size ="lg" round>VCGLib</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size="lg" round>Boost</Button>
                            { /* Tech skills row 3 end */}
                            <br/>
                            { /* Tech skills row 4 start */}
                            <Button color="info" size ="lg" round>Git</Button>
                            <Button color="info" size ="lg" round>SVN</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>Docker</Button>
                            { /* Tech skills row 4 end */}
                            <br/>
                            { /* Tech skills row 5 start */}
                            <Button color="info" size ="lg" round>SCRUM</Button>
                            <Button color="info" size ="lg" round>Kanban</Button>
                            <Button color="info" size ="lg" round>JIRA</Button>
                            <Button color="info" size ="lg" round>Trello</Button>
                            { /* Tech skills row 5 end */}
                          </div>
                      )
                    }, // TAB 1 - Tech Skills end

                    {
                      // TAB 2 - lang Skills start
                      tabButton: "Language Skills",
                      tabIcon: Language,
                      tabContent: (
                        <div>
                          { /* Lang skills row 1 start */}
                          <Button color="info" size ="lg" round>English</Button>
                          <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>German (A2)</Button>
                          { /* Lang skills row 1 end */}
                        </div>
                      )
                    } // TAB 2 - Lang Skills end
                ]}
              />
              { /*Navigation pills end */}
            { /* Skillset end */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>

    )
}

export default SkillSet;
