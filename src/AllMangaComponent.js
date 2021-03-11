import React, { userState, useReducer, useEffect } from "react";

function AllMangaComponent() {
  return (
    <div className="App">
      <img
        src="https://bit.ly/3t8CiUm"
        alt="av"
        referrerPolicy="no-referrer"
      ></img>
      <h2>AllMangaComponent</h2>
      <div className="container">
        <img src=""></img>
        <div class="row">
          <div class="col-md-4">
            <div
              className="card"
              style={{ width: 300, height: 400, margin: 32 }}
            >
              <img
                className="card-img-top"
                src=". .."
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">Description manga</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              className="card"
              style={{ width: 300, height: 400, margin: 32 }}
            >
              <img
                className="card-img-top"
                src=". .."
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">Description manga</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              className="card"
              style={{ width: 300, height: 400, margin: 32 }}
            >
              <img
                className="card-img-top"
                src=". .."
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">Description manga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllMangaComponent;
