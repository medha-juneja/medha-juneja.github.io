import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import {DateRange} from "@material-ui/icons";


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
                    <i class="fas fa-briefcase fa-2x"></i><h2 className={classes.cvheading}>Work Experience</h2>
                    </div>

                      <div style={{textAlign:"left", marginLeft:"70px"}}>
                        <h3 className={classes.cvshorttitle}>Image Processing Engineer - Medneo GmbH, Berlin</h3>
                        <div className={classes.cv_date}>
                        <DateRange style={{marginRight:"20px"}}/><span>Jun 2018 - </span><span className={classes.tag}>Current</span>
                        </div>
                      <p className={classes.description}>
                      Developed of short and long-term measures for image quality improvement of MR data:
                        <ul style={{lineHeight: 1.7}}>
                          <li>Developed GDPR compliant anonymized DICOM data retrieval service from PACS.</li>
                          <li>Sequence management at Siemens and Philips scanners by analyzing DICOMs and performing DICOM messaging services using DCMTK.</li>
                          <li>Analysis of radiologists feedback on medneo's image quality (according to each anatomy, scanning protocols and type of artifacts)
                           and visualization of results in Grafana dashboard.</li>
                          <li>Real-time image artifact detection at the scanner using Entropy-based methods, SVM and CNN classification.</li>
                          <li>Supervision of students Master thesis projects.</li>
                        </ul>
                      Designed a proof-of-concept of immersive telepresence solution for physicians and technicians at the diagnostic centers:
                      <ul style={{lineHeight: 1.7}}>
                        <li>Developed a browser-based app with 360° video player for Oculus Go that also allows voice communication between the users (WebVR, WebRTC, HLS, RTMP).</li>
                        <li>Management of product backlog, refining user requirements and prioritizing tasks based on business value.</li>
                      </ul>
                      </p>
                      </div>

                      <br/>

                      <div style={{textAlign:"left", marginLeft:"70px"}}>
                        <h3 className={classes.cvshorttitle}>Research Assistant - Deutsche Forschungszentrum für Künstliche Intelligenz (DFKI) GmbH, Saarbrücken</h3>
                        <div className={classes.cv_date}>
                        <DateRange style={{marginRight:"20px"}}/><span>Jul 2016 - May 2018</span>
                        </div>
                        <p className={classes.description}>
                        3D reconstruction of Bone-Implant System from segmented CT images in Unreal Engine for Surgery Planning for BMBF funded project:&nbsp;
                        <Link target="_blank" href="https://www.dfki.de/web/forschung/projekte-publikationen/projekte/projekt/iip-extrem/" color="inherit" rel="noopener" className={classes.cvlinks}>
                         <i class="fas fa-external-link-alt" style={{textDecoration:"none"}}/> Individualized Implants and Prosthetics for the Lower Extremities</Link>
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

                      <br/>

                      <div style={{textAlign:"left", marginLeft:"70px"}}>
                        <h3 className={classes.cvshorttitle}>Research Assistant -  Cluster of Excellence Multimodal Computing and Interaction (MMCI), Saarland University, Saarbrücken</h3>
                        <div className={classes.cv_date}>
                        <DateRange style={{marginRight:"20px"}}/><span>Oct 2015 - Feb 2016</span>
                        </div>
                        <p className={classes.description}>
                          <ul style={{lineHeight: 1.7}}>
                        <li>Designed models with varying Perlin noise in C++ for 3D printing to replicate given haptic results.</li>
                        <li>Collected and evaluated results for the stiffness measure of the 3D printed models.</li>
                          </ul>
                        </p>
                      </div>

                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Resume;
