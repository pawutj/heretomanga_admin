import React, { useState, useReducer, useEffect } from "react";
import MainComponent from "./MainComponent";
function App() {
  return (
    <div className="App">
      <meta name='viewport' content='Width=device-width, initial-scale=1'></meta>
      <div className="sidenav">
        <a>Here To Manga</a>
        <hr></hr>
        <a href="#">New Update</a>
        <hr></hr>
        <a href="#">All Manga</a>
        <hr></hr>
      </div>
      <div className="main">
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
