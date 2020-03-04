/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Email, Home, ListAlt, Settings, Stars } from "@material-ui/icons";
import {Link} from "react-scroll";
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
      <Link activeClass="active" to="profilepic"  spy={true} smooth={true} offset={-70} duration= {500} >
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
    </Link>
      { /* Home Link end */}

      { /* Skills Link start */}
      <Link activeClass="active" to="skills"  spy={true} smooth={true} offset={-70} duration= {500} >
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <Settings className={classes.icons} />
          My Skills
        </Button>
      </ListItem>
    </Link>
      { /* Skills Link end */}

      { /* Resume Link start */}
      <Link activeClass="active" to="workex"  spy={true} smooth={true} offset={-70} duration= {500} >
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <ListAlt className={classes.icons} />
          CV
        </Button>
      </ListItem>
    </Link>
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
      { /* Patents Link start */}
      <Link activeClass="active" to="patents"  spy={true} smooth={true} offset={-70} duration= {500} >
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          size ="lg"
          target="_blank"
          className={classes.navLink}
        >
          <Stars className={classes.icons} />
          Patents
        </Button>
      </ListItem>
    </Link>
      { /* Patents Link end */}

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
