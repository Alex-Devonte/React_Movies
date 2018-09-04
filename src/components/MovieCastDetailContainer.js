import React, { Component } from 'react';
import MovieDetail from './MovieDetail';
import CastDetail from './CastDetail';
import axios from 'axios';

var apikey = "3f84ef56382d3586c37f2ba57c07528b";
var posterURL = "https://image.tmdb.org/t/p/original";

class MovieCastDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      cast: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    /* Call API for new data if the previous ID isn't equal to the current */
    if (prevProps.movieID !== this.props.movieID) {
      var url  = "https://api.themoviedb.org/3/movie/" + this.props.movieID + "?api_key=" + apikey + "&language=en-US&append_to_response=credits";
      axios.get(url).then(res => {
        var numberOfGenres = res.data.genres.length;
        var genres = [];

        for (var i = 0; i < numberOfGenres; i++) {
          genres.push({
            id: res.data.genres[i].id,
            genre: res.data.genres[i].name
          });
        }

        var movieData = {
          title: res.data.original_title,
          releaseYear: res.data.release_date,
          genre: genres,
          overview: res.data.overview,
          user_score: res.data.vote_average,
          poster_path : posterURL + res.data.poster_path
        };
   
        var castData = [];
        var i = 0;

        while (i < 5)
        {
          castData.push({
            name:  res.data.credits.cast[i].name,
            character: res.data.credits.cast[i].character,
            profile_path: posterURL + res.data.credits.cast[i].profile_path
          }); 
          i++;
        }

        this.setState({
          movie: movieData,
          cast: castData
        }); 
      }); 
    }
  }

  render() {
    /* Only display components if the movieID is set */
    if (this.props.movieID !== "") {
      return(
        <div>
          <MovieDetail movieID={this.props.movieID}
                       title={this.state.movie.title}
                       releaseYear={this.state.movie.releaseYear}
                       genres={this.state.movie.genre}
                       overview={this.state.movie.overview}
                       user_score={this.state.movie.user_score}
                       poster_path={this.state.movie.poster_path}/>      
          <CastDetail cast={this.state.cast}/>
          <a href="#App">return to top</a>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default MovieCastDetailContainer