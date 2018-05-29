import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakesList from "./Components/CakesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Beautiful Cakes</h1>
        </header>
        <p className="App-intro">
          Below is a list of free Cakes you can choose from !<br />
          <strong>Eat Responsibly</strong>
        </p>
        <CakesList />
      </div>
    );
  }
}

export default App;
