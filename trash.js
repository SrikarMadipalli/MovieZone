performSearch(searchTerm) {
    console.log("Performing Search");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=c38bdd9b587d57a23bc55610b6e556a2&query="+searchTerm;

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Search is Fruitful");
        // console.log("searchResults");
        const results = searchResults.results;
        // console.log(results[0]);

        var movieRows = [];

        results.forEach(movieSearch => {
          movieSearch.poster_src =
            "https://image.tmdb.org/t/p/w185/" + movieSearch.poster_path;
            console.log(movieSearch.poster_src);
          const movieRow = <MovieRow movieSearch={movieSearch} />;
          movieRows.push(movieRow);
        })
        this.setState({rows:movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Search UnFruitful");
      }
    });
  }

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
                      onChange={this.searchChangeHandler}
                    />
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          <MovieRow/>
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
        {this.state.rows}
      </div>
    );
  }

  <div key={searchImage}>
  <div  className="col-lg-4 col-md-6 mb-5 movie_card">
        <div className="card card-cascade narrower collection">
        <div className="view view-cascade overlay">
        <img className="" src={"https://image.tmdb.org/t/p/w185/" + searchImage} alt={searchName}/>
            <a id="anchor">
            <div className="mask rgba-white-slight"></div>
            </a>
        </div>
        <br></br>
        <div className="card-body card-body-cascade text-center">
          <h4 className="">{searchName}</h4>
          <a href="#" className="btn btn-success">View</a>
        </div>
        </div>
      </div>
      <br/>
  </div>