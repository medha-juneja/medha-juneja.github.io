import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const customStyle = {
  container,

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },

  mainRaised: {
    margin: "10px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },

    textCenter: {
      textAlign: "center",
    },
    ...imagesStyle,

    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },

    description: {
      textTransform:"none",
      color: "#000",
      textAlign: "left",
      fontFamily: "Open Sans",
      fontSize: "15px",
      fontWeight: "300",
    },
    // Profile Component Styles
      // Container for Profile text and image
      profile: {
        textAlign: "center",
        "& img": {
          maxWidth: "220px",
          width: "100%",
          margin: "0 auto",
          marginTop: "90px",
          transform: "translate3d(0, -50%, 0)"
        }
      },

      // Person's Name
        name: {
          marginTop: "-110px"
        },
      // Container for Details in Profile Component
      profileDetails_container: {
          display:"flex",
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: "15px",
          marginLeft: "150px",
          color: "#999",
      },
      // Link style for Github, Xing, Linkedin Buttons in Profile Component
      profileDetails_links: {
        "&:hover": {
          color: "#00acc1 !important"
        }
      }

};

export default customStyle;
