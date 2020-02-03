import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import Button from "components/CustomButtons/Button.js";
import {WorkOutline, LocalLibrary, Code, Language} from "@material-ui/icons";
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
                        <h3>Jun 2018 - Present</h3>
                        <h3 style={{marginLeft:"80px"}}>Image Processing Engineer - Medneo GmbH, Berlin</h3>
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
                        <h3 style={{marginLeft:"65px"}}>Research Assistant - DFKI, Saarbrücken</h3>
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

                      <div className={classes.cvshorttitle_container}>
                        <h3>Oct 2015 - Feb 2016</h3>
                        <h3 style={{marginLeft:"67px"}}>Research Assistant - Saarland University, Saarbrücken</h3>
                      </div>
                      <div className={classes.cvdescription_container}>
                        <span className={classes.description}>
                        Designed models in C++ for 3D printing
                        </span>
                      </div>



                      <div className={classes.cvheading_container} style={{paddingTop:"30px"}}>
                        <LocalLibrary/><h2 className={classes.cvheading}>Education</h2>
                      </div>
                        <div className={classes.cvshorttitle_container}>
                          <h3>Oct 2014 - Mar 2018</h3>
                          <h3 style={{marginLeft:"65px"}}>M.Sc.in Visual Computing, Saarland University, Germany</h3>
                        </div>
                        <div className={classes.cvdescription_container}>
                          <span className={classes.description}>
                          Focus On: Image Processing & Computer Vision, Advanced Image Analysis,
                          Image Acquisition Methods, Computer Graphics, Partial Differential Equations, Calculus of Variations
                          <br/>
                          <i>Master Thesis: 3D Reconstruction and Visualization of Data from Clinical CT Images for Surgery Planning</i>
                          </span>
                        </div>

                        <div className={classes.cvshorttitle_container}>
                          <h3>Jul 2010 - Jul 2014</h3>
                          <h3 style={{marginLeft:"75px"}}>Bachelor of Technology in Computer Science, ITM University, India</h3>
                        </div>
                        <div className={classes.cvdescription_container}>
                          <span className={classes.description}>
                          <i>Bachelor Thesis: Segmentation of Occluded Vehicles in Traffic Surveillance Videos</i>
                          </span>
                        </div>

                        <div className={classes.cvshorttitle_container}>
                          <h3>1999 - 2010</h3>
                          <h3 style={{marginLeft:"137px"}}>High School Diploma, Modern Vidya Niketan, Faridabad, India</h3>
                        </div>
                        <div className={classes.cvdescription_container}>
                          <span className={classes.description}>
                          Advanced classes: Mathematics, Physics, Chemistry
                          </span>
                        </div>


                        <div className={classes.cvheading_container} style={{paddingTop:"30px"}}>
                          <Code/><h2 className={classes.cvheading}>Technical Skills</h2>
                        </div>
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


                          <div className={classes.cvheading_container} style={{paddingTop:"30px"}}>
                            <Language/><h2 className={classes.cvheading}>Language Skills</h2>
                          </div>
                            <Button color="info" size ="lg" round>English</Button>
                            <Button style={{backgroundColor:"#5ac4d1"}} size ="lg" round>German (A2)</Button>

                          <div className={classes.cvheading_container} style={{paddingTop:"30px"}}>
                            <i class="fa fa-certificate" aria-hidden="true"/><h2 className={classes.cvheading}>Patents</h2>
                          </div>
                            <div className={classes.cvdescription_container}>
                              <span style={{color: "#999", fontSize:"17px", textAlign:"left"}}>
                              <ul>
                                <li><b>An immersive telepresence system for the radiological workflow</b>, DE, Submitted in April 2019.</li>
                                <li><b>Technique for performing a quality assessment for a medical image</b>, DE, Submitted in January 2019.</li>
                                <li><b>Technique for configuring a medical imaging device,</b>, DE, Submitted in January 2019.</li>
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
