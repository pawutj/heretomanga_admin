import React, { userState, useReducer, useEffect } from "react";
import manga_card from "./manga_card.jpeg";

const testImg = "https://bit.ly/3t8CiUm";

function AllMangaComponent() {
  return (
    <div className="App">
      <div className="container">
        <div style={{ margin: 32 }}>
          <h2>AllMangaComponent</h2>
        </div>
        {/* <img src="https://bit.ly/3t8CiUm"></img> */}
        <div class="row">
          <div class="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src={manga_card}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Return of the King</p>
                <p className="card-text">20/30</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src={manga_card}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">Area</p>
                <p className="card-text">10/20</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card">
            <img
                className="card-img-top"
                src={manga_card}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">My Hero Academia</p>
                <p className="card-text">Description manga</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src={manga_card}
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
