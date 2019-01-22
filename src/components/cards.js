import React , { Component } from 'react';

class Cards extends Component{
    render(){
        return ( 
        <div className="cards">
          {this.props.movies.map(movies => {
            return (
            <div className="col-lg-3 col-md-6 mb-5 movie_card">
            <div className="card-group h-100">
            <div className="view view-cascade overlay container">
            <img className="card-img-top image" src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt={movies.title}/>
                <a id="anchor">
                <div className="mask rgba-white-slight"></div>
                </a>
                <div className="middle">
                  <div className="text"><button type="button" className="btn btn-unique">Info</button></div>
                </div>
            </div>
            <br></br>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">{movies.title}</h4>
            </div>
            </div>
          </div>);
          })}
        
      </div>
      );
    }
}

export default Cards;
