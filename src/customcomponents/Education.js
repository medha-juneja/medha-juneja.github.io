import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/customviews/resumePage.js";
import Button from "components/CustomButtons/Button.js";
import {Code, Language, DateRange} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


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
                          <h2>Saarland University, Germany</h2>
                          <div className={classes.cv_date}>
                            <DateRange style={{marginRight:"20px"}}/><span>Oct 2014 - Mar 2018</span>
                          </div>
                          <h4>Master Thesis:</h4>
                          <span>Iso-Surface Extraction of Clinical CT Images for Surgery Planning</span>
                          <h4>Courses:</h4>
                          <span>Computer Graphics ( Check out the Ray Tracer project here), Image Processing and Computer Vision,
                           Image Acquisition Methods, Advanced Image Analysis, Image Compression, Perception in Computer Graphics,
                           Seminar: Groundbreaking Ideas in Computer Vision, Seminar: Perception, Display and Fabrication,
                           Partial Differential Equations and Boundary Value Problems and Calculus of Variations.</span>
                        </div>

                        <br/>

                          <div style={{textAlign:"left", marginLeft:"100px"}}>
                            <h2 className={classes.cvshorttitle}>Bachelor of Technology in Computer Science and Engineering</h2>
                            <h3>ITM University, India</h3>
                            <div className={classes.cv_date}>
                              <DateRange style={{marginRight:"20px"}}/><span>Jul 2010 - Jul 2014</span>
                            </div>
                            <h4>Bachelor Thesis:</h4>
                            <span>Segmentation of Occluded Vehicles in Traffic Surveillance Videos</span>
                            <h4>Courses:</h4>
                            <span>Object Oriented Programming, Database Management System, Computer Graphics,
                              Shell Programming, Software Engineering and Programming Language Concepts,
                              Digital Image Analysis and Statistical Methods.</span>
                          </div>

                        <br/>

                          <div style={{textAlign:"left", marginLeft:"100px"}}>
                            <h2 className={classes.cvshorttitle}>High School Diploma</h2>
                            <h3>Modern Vidya Niketan, Faridabad, India</h3>
                              <div className={classes.cv_date}>
                                <DateRange style={{marginRight:"20px"}}/><span>1999 - 2010</span>
                              </div>
                            <span>Advanced classes: Mathematics, Physics, Chemistry</span>
                          </div>

                </div>
              </GridItem>
            </GridContainer>
        </div>
      </div>
    )
}

export default Education;
