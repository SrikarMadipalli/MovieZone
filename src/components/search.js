import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <div id="home" className="view jarallax">
          <div className="mask h-100 d-flex justify-content-center align-items-center rgba-black-light">
            <div className="container search">
              <blockquote className="blockquote b-reverse smooth-scroll">
                <div className="white-text text-right mr-3">
                  <div className="active-black-3 active-black-4 mb-4">
                    <input
                      id="searchApi"
                      className="form-control"
                      type="text"
                      placeholder="Enter the Movie..."
                      aria-label="Search"
                    />
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <h1>The Top Rated Movies</h1>
        <div className="floral">
          <img
            width="120"
            height="44"
            src="../src/assets/floral.png"
            alt="Flowers"
          />
        </div>
      </div>
    );
  }
}

export default Search;
