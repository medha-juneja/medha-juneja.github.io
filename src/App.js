import React from 'react';
import Header from './components/Header/Header.js';
import  {RightHeaderLinks, LeftHeaderLinks} from './customcomponents/NavMenu.js';
import ProfilePic from './customcomponents/ProfilePic.js';
import NavPills from "components/NavPills/NavPills.js";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header color="info" rightLinks={<RightHeaderLinks />} leftLinks={<LeftHeaderLinks />}></Header>
      <ProfilePic />
      </div>

    )
  }
}
export default App;
