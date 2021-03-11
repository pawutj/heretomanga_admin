import React, { Component } from "react";
import manga_card from "./manga_card.jpeg";

function MangaDetail() {
  return (
    <div className="App">
      <div className="container">
        <h2>MangaDetail</h2>
      </div>
      <div className="container" style={{ margin: 32 }}>
        <div class="row">
          <div class="col-4">
            <div class="card">
              <img src={manga_card} />
            </div>
          </div>
          <div class="col-8">
            <div class="card" style={{ height: 400 }}>
              <div className="card-text">Manga Description</div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="container">
            <div class="card" style={{ backgroundColor: "black" }}>
              <div class="card-body">
                <div class="card-text">
                  <table class="table">
                    <thead>
                      <tr>
                        <th style={{ color: "white" }}>Chapter</th>
                        {/* <th style={{color:'white'}}>Translate</th> */}
                        <th style={{ color: "white" }}>Action</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>
                        <a href="#" style={{ color: "red" }}>
                          Chapter 4
                        </a>
                      </td>
                      <td>
                        <div class="btn btn-danger">tranlate</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" style={{ color: "green" }}>
                          Chapter 3
                        </a>
                      </td>
                      <td>
                        <div class="btn btn-success">preview</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" style={{ color: "green" }}>
                          Chapter 2
                        </a>
                      </td>
                      <td>
                        <div class="btn btn-success">preview</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" style={{ color: "green" }}>
                          Chapter 1
                        </a>
                      </td>
                      <td>
                        <div style={{ marginLeft: 8}} class="btn btn-warning">edit</div>
                        <div style={{ marginLeft: 8}} class="btn btn-success">preview</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MangaDetail;
