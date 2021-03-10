import React, { useState, useReducer, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";

function MainComponent() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [focusId, setFocusId] = useState(1);
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
        text: "",
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
  };

  useEffect(() => {
    console.log(selectionArea);
    forceUpdate();
  }, [selectionArea, focusId]);

  const setSelectionAreaText = (e) => {
    const t = {
      ...selectionArea.filter((c) => c.id == focusId)[0],
      text: e.target.value,
    };
    setSelectionArea([...selectionArea.filter((c) => c.id != focusId), t]);
  };

  const handleSelectionAreaUpdate = (t) => {
    setSelectionArea([...selectionArea.filter((c) => c.id != t.id), t]);
    setFocusId(t.id);
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
          {selectionArea.map((c, k) => (
            <div
              style={{
                position: "absolute",
                left: c.coordinates.x,
                top: c.coordinates.y,
                zIndex: 1000000,
                width: c.dimensions.width - 20,
                height: c.dimensions.height - 20,
                backgroundColor: "white",
                margin: 15,
              }}
            >
              <div style={{ margin: "auto" }}>
                <h4>{c.text}</h4>
              </div>
            </div>
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
            {selectionArea
              .filter((c) => c.id == focusId)
              .map((c, k) => (
                <input
                  type="text"
                  name="name"
                  value={c.text}
                  onChange={setSelectionAreaText}
                />
              ))}
          </label>
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
