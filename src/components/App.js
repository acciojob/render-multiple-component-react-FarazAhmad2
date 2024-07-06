import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        <h1 data-ns-test="project-name">React App</h1>
        <h6 data-ns-test="project-description">This is my first React App</h6>
      </div>
    </div>
  )
}


export default App;
