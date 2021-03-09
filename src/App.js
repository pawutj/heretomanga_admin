import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";

const selectionArea = {
  id: 1,
  dimensions: {
    height: 150,
    width: 300,
  },
  coordinates: {
    x: 100,
    y: 100,
  },
};

function App() {
  const [selectionArea, setSelectionArea] = useState({
    id: 1,
    dimensions: {
      height: 150,
      width: 300,
    },
    coordinates: {
      x: 100,
      y: 100,
    },
  });

  const createSelectionArea = () => {
    //setSelectionArea()
  };

  const handleSelectionAreaUpdate = (t) => {
    console.log(t);
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${testImg})`,
          height: 700,
          width: 1000,
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <SelectionContainer>
          <Selection
            backgroundImage
            interactive
            area={selectionArea}
            onAreaUpdate={handleSelectionAreaUpdate}
          />
        </SelectionContainer>
      </div>
      <header className="App-header">
        <button> Create </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
