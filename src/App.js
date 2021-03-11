import React, { useState, useReducer, useEffect } from "react";
import MainComponent from "./MainComponent";
import AllMangaComponent from "./AllMangaComponent";
import MangaDetail from "./MangaDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="Width=device-width, initial-scale=1"
      ></meta>
      <div className="sidenav">
        <h2 style={{ backgroundColor: "white" }}>Here To Manga</h2>
        <hr></hr>
        <a href="#">New Update</a>
        <hr></hr>
        <a href="#">All Manga</a>
        <hr></hr>
      </div>
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <AllMangaComponent />
            </Route>
            <Route exact path="/detail">
              <MangaDetail />
            </Route>
            <Route exact path="/main">
              <MainComponent />
            </Route>
            <Route exact path="/allmanga">
              <AllMangaComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
