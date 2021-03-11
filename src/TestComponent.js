import React, { useState, useReducer, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";
import domtoimage from "dom-to-image";

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

function TestComponent() {
  return (
    <div style={{ backgroundColor: "black", height: 6000 }}>
      <SelectionContainer>
        <div style={{ position: "absolute" }}>
          <Selection
            area={selectionArea}
            className="my-selection"
            interactive
          />
        </div>
      </SelectionContainer>
    </div>
  );
}

export default TestComponent;
