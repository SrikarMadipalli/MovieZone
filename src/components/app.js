import React, { Component } from "react";
import Search from './search';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
      error: null
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c38bdd9b587d57a23bc55610b6e556a2&language=en-US&page=1"
      )
      .then(response =>
        response.data.results.map(movie => ({
          name: `${movie.title}`,
          image: `${movie.poster_path}`
        }
        )
        )
        
      )
      
      .then(movies => {
        this.setState({
          movies,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    
    const { isLoading, movies, error } = this.state;
    return (
      <React.Fragment>
        <Search/>
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          movies.map(movie => {
            const { name, image } = movie;
            return (

              <div key={name} className="col-lg-3 col-md-6 mb-5 movie_card">
                <div className="card card-cascade narrower collection">
                <div className="view view-cascade overlay">
                <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + image} alt={name}/>
                    <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <br></br>
                <div className="card-body card-body-cascade text-center">
                  <h4 className="card-title">{name}</h4>
                </div>
                </div>
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
export default App;
