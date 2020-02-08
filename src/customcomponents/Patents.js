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

const Patents = () => {
  const classes = useStyles();
    return(
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={8}>
                <div className={classes.resume}>
                    <div className={classes.cvheading_container}>
                    <i class="fas fa-certificate fa-2x"></i><h2 className={classes.cvheading}>Patents and Publications</h2>
                    </div>

                      <div style={{textAlign:"left", marginLeft:"70px"}}>
                        <h3 className={classes.cvshorttitle}>Patents</h3>
                      <p className={classes.description}>
                        <ul style={{lineHeight: 1.7}}>
                          <li><b>An immersive telepresence system for the radiological workflow</b>, DE, Submitted in April 2019.</li>
                            <li><b>Technique for performing a quality assessment for a medical image</b>, DE, Submitted in January 2019.</li>
                            <li><b>Technique for configuring a medical imaging device,</b>, DE, Submitted in January 2019.</li>
                        </ul>

                        <br/>

                        <h3 className={classes.cvshorttitle}>Publications</h3>
                        <ul style={{lineHeight: 1.7}}>
                          <li>M. Juneja, M. Bode-Hofmann, K. S. Haong, S. Meißner, V. Merkel, J. Vogt, N.Wilke, A. Wolff, and T. Hartkens,
                            “Image quality assessments,” in Bildverarbeitungfür die Medizin 2019,
                            H. Handels, T. M. Deserno, A. Maier, K. H. Maier-Hein,C. Palm, and T. Tolxdorff, Eds., Wiesbaden:
                            Springer Fachmedien Wiesbaden, 2019,pp. 225–230,isbn: 978-3-658-25326-4.
                            </li>
                          <li>M. Juneja and P. Grover, “Improved segmentation of occluded and adjoining vehiclesin traffic surveillance videos,”
                            in Sixth International Conference on Machine Vision(ICMV 2013),
                            International Society for Optics and Photonics, vol. 9067, 2013,p. 90670M.
                          </li>
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

export default Patents;
