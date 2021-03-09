import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";

function App() {
  const [count, setCount] = useState([]);
  const [selectionArea, setSelectionArea] = useState([
    {
      id: 1,

      dimensions: {
        height: 150,
        width: 300,
      },
      coordinates: {
        x: 100,
        y: 100,
      },
    },
    {
      id: 2,

      dimensions: {
        height: 300,
        width: 300,
      },
      coordinates: {
        x: 100,
        y: 100,
      },
    },
    {
      id: 3,

      dimensions: {
        height: 100,
        width: 300,
      },
      coordinates: {
        x: 2,
        y: 2,
      },
    },
  ]);

  const createSelectionArea = () => {
    // const ind = selectionArea.filter((c) => c.display == false)[0];
    // const newArea = { ...ind, display: true };
    // setSelectionArea([...selectionArea.filter((c) => c.id != ind.id), newArea]);
  };

  const handleSelectionAreaUpdate = (t) => {
    setSelectionArea([...selectionArea.filter((c) => c.id != t.id), t]);
    console.log(selectionArea);
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
          {selectionArea.map((c, k) => (
            <Selection
              backgroundImage
              interactive
              area={c}
              onAreaUpdate={handleSelectionAreaUpdate}
            />
          ))}
        </SelectionContainer>
      </div>
      <header className="App-header">
        <h1>{`${count.length}, ${selectionArea.length}`}</h1>
        <button onClick={createSelectionArea}> Create </button>
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
