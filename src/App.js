import React, { Component } from 'react';
import logo from './tpg-logo.png';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentContainer from './containers/CommentContainer'
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Post Commets</h1>
        </header>
        <CommentContainer />
      </div>
    );
  }
}

export default App;
