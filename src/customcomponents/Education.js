import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import Button from "components/CustomButtons/Button.js";
import {DateRange} from "@material-ui/icons";


const useStyles = makeStyles(styles);

const Education = () => {
  const classes = useStyles();
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8}>
                <div className={classes.resume}>

                      <div className={classes.cvheading_container}>
                        <i class="fas fa-graduation-cap fa-2x"></i><h2 className={classes.cvheading}>Education</h2>
                      </div>

                        <div style={{textAlign:"left", marginLeft:"100px"}}>
                          <h3 className={classes.cvshorttitle}>M.Sc.in Visual Computing</h3>
                          <h4 className={classes.cvuniversity}>Saarland University, Germany</h4>
                          <div className={classes.cv_date}>
                            <DateRange style={{marginRight:"20px"}}/><span>Oct 2014 - Mar 2018</span>
                          </div>
                          <p className={classes.description}>
                            <h4 className={classes.cvthesis}>Master Thesis:</h4>
                            Iso-Surface Extraction of Clinical CT Images for Surgery Planning
                            <h4 className={classes.cvthesis}>Courses:</h4>
                            Computer Graphics ( Check out the Ray Tracer project here), Image Processing and Computer Vision,
                            Image Acquisition Methods, Advanced Image Analysis, Image Compression, Perception in Computer Graphics,
                            Seminar: Groundbreaking Ideas in Computer Vision, Seminar: Perception, Display and Fabrication,
                            Partial Differential Equations and Boundary Value Problems and Calculus of Variations.
                         </p>
                        </div>

                        <br/>

                          <div style={{textAlign:"left", marginLeft:"100px"}}>
                            <h3 className={classes.cvshorttitle}>Bachelor of Technology in Computer Science and Engineering</h3>
                            <h4 className={classes.cvuniversity}>ITM University, India</h4>
                            <div className={classes.cv_date}>
                              <DateRange style={{marginRight:"20px"}}/><span>Jul 2010 - Jul 2014</span>
                            </div>
                            <p className={classes.description}>
                            <h4 className={classes.cvthesis}>Bachelor Thesis:</h4>
                            Segmentation of Occluded Vehicles in Traffic Surveillance Videos
                            <h4 className={classes.cvthesis}>Courses:</h4>
                            Object Oriented Programming, Database Management System, Computer Graphics,
                              Shell Programming, Software Engineering and Programming Language Concepts,
                              Digital Image Analysis and Statistical Methods.
                            </p>
                          </div>

                        <br/>

                          <div style={{textAlign:"left", marginLeft:"100px"}}>
                          <h3 className={classes.cvshorttitle}>High School Diploma</h3>
                              <h4 className={classes.cvuniversity}>Modern Vidya Niketan, Faridabad, India</h4>
                              <div className={classes.cv_date}>
                                <DateRange style={{marginRight:"20px"}}/><span>1999 - 2010</span>
                              </div>
                            <p className={classes.description}>
                              Advanced classes: Mathematics, Physics, Chemistry
                            </p>
                          </div>

                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Education;
