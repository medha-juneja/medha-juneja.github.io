import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import styles from 'assets/jss/material-kit-react/customviews/customStyle.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ReactPlayer from "react-player" 


const useStyles = makeStyles(styles);

const VideoExpansionPanel = () => {
    const classes = useStyles();
      return(

                <div>                          
                <ExpansionPanel className={classes.videopanel}>

                    { /* Expansion Panel Heading*/}
                    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>                    
                    <Typography style={{color: "#00acc1"}}>Video : Surgery Planning GUI</Typography>                    
                    </ExpansionPanelSummary>

                    { /* Expansion Panel Content*/}
                    <ExpansionPanelDetails>
                    <Typography>
                        <ReactPlayer
                            url="https://vimeo.com/267974369"
                        /> 
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </div>
            )
}

export default VideoExpansionPanel;