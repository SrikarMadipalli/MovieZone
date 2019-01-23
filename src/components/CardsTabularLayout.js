import React, { Component } from 'react';
export default class CardsTabularLayout extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map(movies => {
                    return (
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <td><div className="container"><img className="Tableimage image" src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt={movies.title} />
                                        <div className="middle">
                                            <div className="text"><button type="button" className="btn btn-unique">Info</button></div>
                                        </div></div>
                                    </td>
                                    <td>
                                        <h2 id="TableTitle">{movies.title}</h2>
                                        <p id="TableDesc">{movies.overview}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}

            </div>
        );
    }
}


