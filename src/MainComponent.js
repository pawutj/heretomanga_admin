import React, { useState, useReducer, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Selection, SelectionContainer } from "@madappgang/react-selections";
import testImg from "./test.png";
import domtoimage from "dom-to-image";

function MainComponent() {
  const imgUrl =
    "https://media.reaperscans.com/file/reaperscans/comics/951B222AB3EADADCBB32E241E817845AB609514BC21D2BAD/volumes/DCCF4189E27866A945D2DE5DF4590C18A4766EC85F4412C7/chapters/D9B37562BC16D93AC2B82523A5A8AC023005C3C9FA0FD341/003.png";
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [focusId, setFocusId] = useState(1);
  const [cameraMode, setCameraMode] = useState(false);

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
  }, [selectionArea, focusId, cameraMode]);

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

  const exportJPG = () => {
    const input = document.getElementById("divToPrint");
    console.log(input);
    //setCameraMode(!cameraMode);

    domtoimage
      .toPng(input)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        //document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div
        id="divToPrint"
        style={{
          backgroundImage: `url(https://media.reaperscans.com/file/reaperscans/comics/951B222AB3EADADCBB32E241E817845AB609514BC21D2BAD/volumes/DCCF4189E27866A945D2DE5DF4590C18A4766EC85F4412C7/chapters/D9B37562BC16D93AC2B82523A5A8AC023005C3C9FA0FD341/003.png)`,
          height: 1000,
          width: imgWidth,

          border: "1px solid rgba(0, 0, 0, 0.05)",
          flex: 2,
        }}
      >
        <SelectionContainer>
          {!cameraMode &&
            selectionArea.map((c, k) => (
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
      <div className="App-header" style={{ flex: 1 }}>
        <h3>FocusId {focusId}</h3>
        <button onClick={createSelectionArea}> Create </button>
        <button onClick={deleteSelectionArea}> Delete </button>
        <button onClick={exportJPG}> ExportJPG </button>

        <form>
          <label>
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
      </div>
    </div>
  );
}

export default MainComponent;
