import React from 'react';
import Header from './components/Header/Header.js';
import ProfilePic from './customcomponents/ProfilePic.js';
import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
      <Header color="info"></Header>
      <ProfilePic />
      </div>

    )
  }
}
export default App;
