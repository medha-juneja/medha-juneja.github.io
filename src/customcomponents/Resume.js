import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from 'components/Grid/GridItem.js';
import styles from 'assets/jss/material-kit-react/customviews/customStyle.js';
import {DateRange} from '@material-ui/icons';
import VideoExpansionPanel from 'customcomponents/VideoExpansionPanel.js';


const useStyles = makeStyles(styles);

const Resume = () => {
  const classes = useStyles();
    return(
      <div id="workex" className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8}>
                { /* Resume start */}
                <div className={classes.textCenter}>
                    { /* Work Experience heading */}
                    <div className={classes.alignHeading_container}>
                      <div className={classes.alignRow_container}>
                        <i class="fas fa-briefcase fa-2x" style={{color:"#00acc1"}}></i>
                        <h2 className={classes.heading}>Work Experience</h2>
                      </div>
                    </div>

                    { /* Medneo position start*/}

                    <div style={{textAlign:"left"}}>
                      { /* Image processing position title*/}
                      <h3 className={classes.subheading}>Image Processing Engineer - Medneo GmbH, Berlin</h3>
                      { /* Calender and Date */}
                      <div className={classes.daterange}>
                        <DateRange style={{marginRight:"20px"}}/>
                        <span>Jun 2018 - </span><span className={classes.tag}>Current</span>
                      </div>

                      { /* Medneo position description */}
                      <p className={classes.description}>
                        { /* qloop desciption */}
                        Developed of short and long-term measures for image quality improvement of MR data:
                          <ul style={{lineHeight: 1.7}}>
                            <li>Developed GDPR compliant anonymized DICOM data retrieval service from PACS.</li>
                            <li>Sequence management at Siemens and Philips scanners by analyzing DICOMs and performing DICOM messaging services using DCMTK.</li>
                            <li>Analysis of radiologists feedback on medneo's image quality (according to each anatomy, scanning protocols and type of artifacts)
                             and visualization of results in Grafana dashboard.</li>
                            <li>Real-time image artifact detection at the scanner using Entropy-based methods, SVM and CNN classification.</li>
                            <li>Supervision of students Master thesis projects.</li>
                          </ul>

                        { /* VR desciption */}
                        Designed a proof-of-concept of immersive telepresence solution for physicians and technicians at the diagnostic centers:
                        <ul style={{lineHeight: 1.7}}>
                          <li>Developed a browser-based app with 360° video player for Oculus Go that also allows voice communication between the users (WebVR, WebRTC, HLS, RTMP).</li>
                          <li>Management of product backlog, refining user requirements and prioritizing tasks based on business value.</li>
                        </ul>
                      </p>

                      </div>
                      { /* Medneo position end*/}

                      <br/>

                      { /* DFKI position start*/}
                      <div style={{textAlign:"left"}}>

                        { /* Research Assistant position title */}
                        <h3 className={classes.subheading}>
                          Research Assistant - Deutsche Forschungszentrum für Künstliche Intelligenz (DFKI) GmbH, Saarbrücken
                        </h3>

                        { /* Calendar icon and date */}
                        <div className={classes.daterange}>
                          <DateRange style={{marginRight:"20px"}}/><span>Jul 2016 - May 2018</span>
                        </div>

                        { /* DFKI position desciption*/}
                        <p className={classes.description}>

                          3D reconstruction of Bone-Implant System from segmented CT images in Unreal Engine
                          for Surgery Planning for BMBF funded project:&nbsp;

                          { /* Link to IIP=EXTREM project website*/}
                          <Link target="_blank" href="https://www.dfki.de/web/forschung/projekte-publikationen/projekte/projekt/iip-extrem/"
                          color="inherit" rel="noopener" className={classes.themelinks}>
                            <i class="fas fa-external-link-alt" />
                            &nbsp;Individualized Implants and Prosthetics for the Lower Extremities
                          </Link>
                 
                          { /* Video of IIP-EXTREM project*/}
                          <VideoExpansionPanel></VideoExpansionPanel>




                          <ul style={{lineHeight: 1.7}}>
                            <li>Applied different surface extraction techniques such as Marching Cubes, Dual Contouring and several Mesh Smoothing algorithms.</li>
                            <li>Integrated and worked with several libraries such as Boost, OpenSubdiv and VCGLib (MeshLab) in Unreal Engine.</li>
                            <li>Integrated algorithm for extraction of connected components from isosurfaces. The algorithm can extract different mesh components
                            - Implants, Tibia bone, Fibula bone and fracture.</li>
                            <li>Created high quality visualization of meshes in Unreal Engine by creating lighting and shading models.</li>
                            <li>Implemented several mesh evaluation metrics such as curvature evaluation, radii ratio, Hausdorff's distance and visualised in Unreal Engine.</li>
                            <li>HiWi Supervisor for GUI design</li>
                          </ul>
                        </p>
                      </div>
                      { /* DFKI position end*/}

                      <br/>

                      { /* MMCI position start*/}
                      <div style={{textAlign:"left"}}>

                        { /* MMCI position title*/}
                        <h3 className={classes.subheading}>Research Assistant -  Cluster of Excellence Multimodal Computing and Interaction (MMCI), Saarland University, Saarbrücken</h3>

                        { /* Calendar icon and date*/}
                        <div className={classes.daterange}>
                          <DateRange style={{marginRight:"20px"}}/><span>Oct 2015 - Feb 2016</span>
                        </div>

                        { /* MMCI position desciption */}
                        <p className={classes.description}>
                          <ul style={{lineHeight: 1.7}}>
                            <li>Designed models with varying Perlin noise in C++ for 3D printing to replicate given haptic results.</li>
                            <li>Collected and evaluated results for the stiffness measure of the 3D printed models.</li>
                          </ul>
                        </p>
                        { /* MMCI position end*/}
                      </div>


                </div>
                { /* Resume end*/}
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Resume;
