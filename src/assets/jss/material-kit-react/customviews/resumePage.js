import { container, title, infoColor } from "assets/jss/material-kit-react.js";

const resumePageStyle = {
  container,
  resume: {
    textAlign: "center",
    "& img": {
      maxWidth: "800px",
      width: "100%",
      margin: "0 auto",
      marginTop: "200px",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    textTransform:"none",
    color: "#000",
    textAlign: "left",
    fontFamily: "Open Sans",
    fontSize: "15px",
    fontWeight: "300",
  },

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
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },
  cvheading:{
    fontFamily:'"Roboto" sans-serif',
    fontWeight:"400",
    marginLeft: "10px"
  },

  cvheading_container: {
    display:"flex",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: "#00acc1",
    marginLeft: "270px"
},

cv_date:{
  display:"flex",
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  color: "#00acc1",
  fontFamily:"Roboto",
  fontWeight: "400"
},

  cvshorttitle_container:{
    display:"flex",
    flex: "0 0 auto",
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "left"
  },

cvshorttitle:{
  color:"#757575",
  fontFamily:"Roboto",
  fontWeight: "400",
  textShadow:"0.3px 0.3px 0.3px grey"
},

  cvdescription_container:{
    display:"flex",
    flex: "0 0 auto",
    flexDirection: 'column',
    position:"relative"
  },



  cvlinks:{
    textDecoration: "underline",
    color: "inherit",
    "&:hover": {
      color: "#00acc1 !important"
    }
  },

profilebuttons: {
  fontSize: "15px",
  textTransform: "none",
  marginLeft: "100px",
},
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5Left: {
    marginLeft:"5px"
  },
  margin10Left:{
    marginLeft:"10px"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },

tag:{
  backgroundColor:"#00acc1",
  color:"#fff",
  display:"inline-block",
  paddingLeft:"8px",
  paddingRight:"8px",
  paddingTop:"2px",
  paddingBottom:"2px",
  textAlign:"center",
  borderRadius:"4px",
  marginLeft: "4px"
}


};

export default resumePageStyle;
