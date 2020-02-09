/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Email, Home, ListAlt } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export function LeftHeaderLinks(props) {
  const classes = useStyles();
  return (
    // Left links start
    <List className={classes.list}>
      { /* Home Link start */}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <Home className={classes.icons} />
          Home
        </Button>
      </ListItem>
      { /* Home Link end */}

      { /* Resume Link start */}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <ListAlt className={classes.icons} />
          Resume
        </Button>
      </ListItem>
      { /* Resume Link end */}

    </List>
    );
    // Left Links end
  }

export function RightHeaderLinks(props) {
  const classes = useStyles();
  return (
    // Right links start
    <List className={classes.list}>
      { /* Blog Link start */}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <Apps className={classes.icons} />
          Blog
        </Button>
      </ListItem>
      { /* Blog Link end */}

      { /* Contact Link start */}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <Email className={classes.icons} />
          Contact Me
        </Button>
      </ListItem>
      { /* Contact Link end */}
      </List>
    );
    // Right links end
  }
