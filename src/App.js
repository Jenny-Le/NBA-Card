import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import Nav from './Nav';
import MainArea from './MainArea'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <MainArea />
      </div>
    );
  }
}

export default App;
