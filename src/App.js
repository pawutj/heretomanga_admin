import React, { useState, useReducer, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";
import MainComponent from "./MainComponent";
function App() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
