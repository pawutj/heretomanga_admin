import React, { useState, useReducer, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";

function MainComponent() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [focusId, setFocusId] = useState(0);
  const [selectionArea, setSelectionArea] = useState([
    {
      id: 1,
      text: "",
      dimensions: {
        height: 150,
        width: 300,
      },
      coordinates: {
        x: 100,
        y: 100,
      },
    },
  ]);

  const deleteSelectionArea = () => {
    setSelectionArea(selectionArea.filter((t) => t.id != focusId));
  };

  const createSelectionArea = () => {
    const _id = selectionArea.length + 1;
    setSelectionArea([
      ...selectionArea,
      {
        id: _id,

        dimensions: {
          height: 100,
          width: 200,
        },
        coordinates: {
          x: 1,
          y: 0,
        },
      },
    ]);
    setFocusId(_id);
    forceUpdate();
  };

  useEffect(() => {
    forceUpdate();
    console.log(selectionArea);
  }, [selectionArea]);

  const handleSelectionAreaUpdate = (t) => {
    setSelectionArea([...selectionArea.filter((c) => c.id != t.id), t]);
    setFocusId(t.id);
    console.log(selectionArea);
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${testImg})`,
          height: 400,
          width: 800,
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <SelectionContainer>
          {selectionArea.map((c, k) => (
            <Selection
              key={c.id}
              backgroundImage
              interactive
              area={c}
              onAreaUpdate={handleSelectionAreaUpdate}
            />
          ))}
        </SelectionContainer>
      </div>
      <header className="App-header">
        <h3>FocusId {focusId}</h3>
        <button onClick={createSelectionArea}> Create </button>
        <button onClick={deleteSelectionArea}> Delete </button>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
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

export default MainComponent;
