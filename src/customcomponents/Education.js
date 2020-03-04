import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/customStyle.js";
import {DateRange} from "@material-ui/icons";


const useStyles = makeStyles(styles);

const Education = () => {
  const classes = useStyles();
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8}>
                { /* Education start */}
                <div className={classes.textCenter}>
                      { /* Education title start */}
                      <div className={classes.alignHeading_container}>
                        <div className={classes.alignRow_container}>
                          <i class="fas fa-graduation-cap fa-2x" style={{color:"#00acc1"}}></i>
                          <h2 className={classes.heading}>Education</h2>
                        </div>
                      </div>
                      { /* Education title end */}

                        { /* M.Sc degree start */}
                        <div style={{textAlign:"left"}}>

                          { /* M.Sc. title */}
                          <h3 className={classes.subheading}>M.Sc.in Visual Computing</h3>
                          { /* University */}
                          <h4 className={classes.heading3}>Saarland University, Germany</h4>
                          { /* Calendar and Date */}
                          <div className={classes.daterange}>
                            <DateRange style={{marginRight:"20px"}}/><span>Oct 2014 - Mar 2018</span>
                          </div>
                          { /* M.Sc. description start */}
                          <p className={classes.description}>
                            { /* Msc thesis */}
                            <h4 className={classes.heading4}>Master Thesis:</h4>
                            Iso-Surface Extraction of Clinical CT Images for Surgery Planning
                            { /* Msc courses */}
                            <h4 className={classes.heading4}>Courses:</h4>
                            Computer Graphics ( Check out the Ray Tracer project here), Image Processing and Computer Vision,
                            Image Acquisition Methods, Advanced Image Analysis, Image Compression, Perception in Computer Graphics,
                            Seminar: Groundbreaking Ideas in Computer Vision, Seminar: Perception, Display and Fabrication,
                            Partial Differential Equations and Boundary Value Problems and Calculus of Variations.
                         </p>
                         { /* M.Sc. description end*/}
                        </div>
                      { /* M.Sc. degree end*/}

                        <br/>

                      { /* B.Tech degree start */}
                        <div style={{textAlign:"left"}}>
                          { /* B.Tech degree title */}
                          <h3 className={classes.subheading}>Bachelor of Technology in Computer Science and Engineering</h3>
                          { /* University */}
                          <h4 className={classes.heading3}>ITM University, India</h4>
                          {
                           /* Calendar and Date */}
                          <div className={classes.daterange}>
                            <DateRange style={{marginRight:"20px"}}/><span>Jul 2010 - Jul 2014</span>
                          </div>

                          { /* B.Tech degree description start*/}
                          <p className={classes.description}>
                            { /* B.Tech thesis*/}
                            <h4 className={classes.heading4}>Bachelor Thesis:</h4>
                            Segmentation of Occluded Vehicles in Traffic Surveillance Videos
                            { /* B.Tech courses */}
                            <h4 className={classes.heading4}>Courses:</h4>
                            Object Oriented Programming, Database Management System, Computer Graphics,
                              Shell Programming, Software Engineering and Programming Language Concepts,
                              Digital Image Analysis and Statistical Methods.
                          </p>
                          { /* B.Tech degree description end*/}
                        </div>
                      { /* B.Tech degree end */}

                        <br/>

                      { /* High school degree start*/}
                      <div style={{textAlign:"left"}}>
                        { /* High School degree title*/}
                        <h3 className={classes.subheading}>High School Diploma</h3>
                        { /* University */}
                        <h4 className={classes.heading3}>Modern Vidya Niketan, Faridabad, India</h4>
                          { /* Calendar and date */}
                          <div className={classes.daterange}>
                            <DateRange style={{marginRight:"20px"}}/><span>1999 - 2010</span>
                          </div>
                          { /* High School description */}
                        <p className={classes.description}>
                          Advanced classes: Mathematics, Physics, Chemistry
                        </p>
                      </div>
                    { /* High school degree end */}

                </div>
                { /* Education end */}
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Education;
