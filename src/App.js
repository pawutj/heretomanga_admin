import React, { useState, useReducer, useEffect } from "react";
import MainComponent from "./MainComponent";
import AllMangaComponent from "./AllMangaComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="Width=device-width, initial-scale=1"
      ></meta>
      <div className="sidenav">
        <a>Here To Manga</a>
        <hr></hr>
        <a href="#">New Update</a>
        <hr></hr>
        <a href="#">All Manga</a>
        <hr></hr>
      </div>
      <div className="main">
        {/* <MainComponent /> */}
        <AllMangaComponent />
      </div>
    </div>
  );
}

export default App;
