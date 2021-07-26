import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // implicit return maybe shouldn't necessarily need the explicit return on top of that? 
    return movieData.map((movie, index) => 
    <MovieCard // calling the MovieCard class on each movie of the movieData hash?
      key={index} // referring to each index item, review your map method
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
      // look at the original data set; each object in the array has title, IMDBRating, etc
      // the values they're now named will go into the movie card object which will then process each of these as props
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
