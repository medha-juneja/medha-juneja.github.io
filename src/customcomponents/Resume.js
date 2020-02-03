import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import Button from "components/CustomButtons/Button.js";
import {WorkOutline} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles(styles);

const Resume = () => {
  const classes = useStyles();
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8}>
                <div className={classes.resume}>
                    <h1 className={classes.title}>CV</h1>
                    { /* <h4 className={classes.shorttitle}>Computer Vision Engineer</h4> */}
                    <div className={classes.cvheading_container}>
                      <WorkOutline/><h2 className={classes.cvheading}>Work Experience</h2>
                      </div>

                      <div className={classes.cvshorttitle_container}>
                        <h3>June 2018 - Present</h3>
                        <h3 style={{marginLeft:"70px"}}>Image Processing Engineer - Medneo GmbH, Berlin</h3>
                      </div>
                      <div className={classes.cvdescription_container}>
                      <span className={classes.description}>
                      Development of short and long-term measures for Image Quality improvement of MR data:
                        <ul>
                          <li>Development of anonymized data retrieval service from PACS (Pynetdicom)</li>
                          <li>Sequence management at the scanner (DICOM, DCMTK)</li>
                          <li>Analysis and visualization of radiologists feedback on medneo's image quality (Python, MYSQL, Grafana)</li>
                          <li>Real-time image artifact detection at the scanner using Entropy-based methods, SVM and CNN classification (Python)</li>
                          <li>Supervision of students Master thesis projects</li>
                        </ul>
                      Designed a proof-of-concept of immersive telepresence solution for physicians and technicians at the diagnostic centers.
                      <ul>
                        <li>Development of browser-based app with 360° video player that also allows voice communication (WebVR, WebRTC, HLS, RTMP)</li>
                        <li>Management of product backlog, refining user requirements and prioritizing based on business value (JIRA)</li>
                      </ul>
                      </span>
                      </div>

                      <div className={classes.cvshorttitle_container}>
                        <h3>Jul 2016 - May 2018</h3>
                        <h3 style={{marginLeft:"70px"}}>Research Assistant - DFKI, Saarbrücken</h3>
                      </div>
                      <div className={classes.cvdescription_container}>
                        <span className={classes.description}>
                        3D Mesh extraction from segmented CT Images for Surgery Planning GUI for BMBF funded project:&nbsp;
                        <Link target="_blank" href="https://www.dfki.de/web/forschung/projekte-publikationen/projekte/projekt/iip-extrem/" color="inherit" rel="noopener" className={classes.cvlinks}>
                         <i className={"fa fa-link"} style={{textDecoration:"none"}}/> Individualized Implants and Prosthetics for the Lower Extremities</Link>
                        <ul>
                          <li>High Quality Isosurface Extraction of Bone-Implant system and visualization in Unreal Engine (C++)</li>
                          <li>HiWi Supervisor for GUI design</li>
                        </ul>
                        </span>
                      </div>





                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Resume;
