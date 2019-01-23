import React, { Component } from "react";
import Cards from './cards';
import CardsTabularLayout from './CardsTabularLayout';
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    console.log("I am Entering into the World of Search");
    this.state = {
      movieName:'',
      radio:false
      // radio:true
      // isSearching: true,
      
      // center:true,
      // error: null

    };

    // this.searchChangeHandler = this.searchChangeHandler.bind(this);

  }

  // componentDidMount(searchTerm) {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=c38bdd9b587d57a23bc55610b6e556a2&query=" +
  //       searchTerm
  //     )
  //     .then(response =>
  //       response.data.results.map(movieSearch => ({
  //         searchName: `${movieSearch.title}`,
  //         searchImage: `${movieSearch.poster_path}`,
  //         searchDescription: `${movieSearch.overview}`
  //       }))
  //     )
  //     .then(movieSearchList => {
  //       this.setState({
  //         movieSearchList,
  //         isSearching: false
  //       });
  //     })
  //     .catch(error => this.setState({ error, isSearching: false }));
  // }

  // searchChangeHandler(event) {
  //   console.log(event.target.value);
  //   const boundObject = this;
  //   const searchTerm = event.target.value;
  //   boundObject.componentDidMount(searchTerm);
  // }

  // searchPositionHandler(e) {
    
  // }

  onChange(event){
    console.log(`${event.target.name} ${event.target.value}`);
    this.setState({[event.target.name]: event.target.value});
  }

  layoutHandlerTrue(){
    
    this.setState({radio:true})
    console.log(this.state.radio);
  }

  layoutHandlerFalse(){
    this.setState({radio:false})
    console.log(this.state.radio);
  }

  render() {
    console.log(this.state);
    
          let searchingList = this.props.movies.filter(searchData => {
            return searchData.title.toLowerCase().indexOf(this.state.movieName.toLowerCase())!==-1;
          });

    // const { movieSearchList, isSearching, error } = this.state;

    return (
      <React.Fragment>

        {/* {error ? <p>{error.message}</p> : null} */}

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
                        value ={this.state.movieName}
                        name="movieName"
                        placeholder="Enter the Movie..."
                        aria-label="Search"
                        // onChange={this.searchChangeHandler}
                        onChange={this.onChange.bind(this)}
                        // onClick={this.searchPositionHandler}
                      />
                      <div className="form-check" >
                        <input type="radio" className="form-check-input" id="materialUnchecked" onClick ={this.layoutHandlerTrue.bind(this)} name="materialExampleRadios" />
                        <label className="form-check-label">Tabular View</label>
                        <input type="radio" className="form-check-input" id="materialUnchecked" onClick ={this.layoutHandlerFalse.bind(this)} name="materialExampleRadios" />
                        <label className="form-check-label">Grid View</label>
                      </div>

                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="floral">
            <img
              width="120"
              height="44"
              src="../src/assets/floral.png"
              alt="Flowers"
            />
          </div>
          <br />
        </div>

        {/* {!isSearching ? (
          movieSearchList.map(movieSearch => {
            console.log("Searching");
            const { searchName, searchImage, searchDescription } = movieSearch;
            return (
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td><img className="" src={"https://image.tmdb.org/t/p/w185/" + searchImage} alt={searchName} /></td>
                    <td>
                      <h2>{searchName}</h2>
                      <p>{searchDescription}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })
        ) : (
            <h3>Searching...</h3>
          )} */}
          
      {/* <Cards movies ={searchingList}/> */}
      {/* <CardsTabularLayout movies ={searchingList}/> */}
      <div>
        {this.state.radio?<CardsTabularLayout movies ={searchingList}/>:<Cards movies ={searchingList}/>}
      </div>
      </React.Fragment>
    );
  }
}

export default Search;
