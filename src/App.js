import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="test">
      <Nav />
      </div>
    );
  }
}

export default App;
