import React, { Component } from "react";
import "./App.css";
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
