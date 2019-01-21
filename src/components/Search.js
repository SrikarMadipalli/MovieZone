import React, { Component } from "react";
import axios from 'axios';

class Search extends Component {

  constructor(props) {
    super(props);
    console.log("I am Entering into the World of Search")
    this.state= {
      movieSearchList:[],
      isSearching:true,
      error: null
    }

    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.componentDidMount("antman");
    
  }
  componentDidMount(searchTerm){
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=c38bdd9b587d57a23bc55610b6e556a2&query="+searchTerm
      )
      .then(response =>
        response.data.results.map(movieSearch => ({
          searchName: `${movieSearch.title}`,
          searchImage: `${movieSearch.poster_path}`
        }))
        ) 
      .then(movieSearchList => {
        this.setState({
          movieSearchList,
          isSearching : false
        });
      })
      .catch(error => this.setState({ error, isSearching: false }));
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.componentDidMount(searchTerm);
  }

  
  render() {
    const { movieSearchList,isSearching,error } = this.state;
    return (
      <React.Fragment>
        
        {error ? <p>{error.message}</p> : null}
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
                        onChange={this.searchChangeHandler}
                      />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <h1>The Top Rated Movies</h1>
        <br/>
          <div className="floral">
            <img
              width="120"
              height="44"
              src="../src/assets/floral.png"
              alt="Flowers"
            />
          </div>
          <br/>
          </div>
          
        {!isSearching ? (
          movieSearchList.map(movieSearch => {
            console.log("Searching")
            const { searchName, searchImage } = movieSearch;
            return (
          <div key={searchImage}>
          <div  className="col-lg-3 col-md-6 mb-5">
                <div className="card card-cascade collection">
                <div className="view view-cascade overlay">
                <img className="" src={"https://image.tmdb.org/t/p/w185/" + searchImage} alt={searchName}/>
                    <a id="anchor">
                    <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <br></br>
                <div className="card-body card-body-cascade text-center">
                  <h4 className="">{searchName}</h4>
                </div>
                </div>
              </div>
              <br/>
          </div>
     
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
