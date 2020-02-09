import React from 'react';
import Header from 'components/Header/Header.js';
import  {RightHeaderLinks, LeftHeaderLinks} from 'customcomponents/NavMenu.js';
import ProfilePic from 'customcomponents/ProfilePic.js';
import Resume from 'customcomponents/Resume.js';
import Education from 'customcomponents/Education.js';
import SkillSet from 'customcomponents/SkillSet.js';
import Patents from 'customcomponents/Patents.js';
import 'App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header color="info" rightLinks={<RightHeaderLinks />} leftLinks={<LeftHeaderLinks />}></Header>
        <ProfilePic />
        <SkillSet />
        <Resume />
        <Education />
        <Patents />
      </div>

    )
  }
}
export default App;
