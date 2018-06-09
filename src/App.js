import React, { Component } from "react";
import logo from "./logo.svg";
import Memes from "./components/Memes/Memes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Meme Generator</h1>
        </header>
        <Memes />
      </div>
    );
  }
}

export default App;
