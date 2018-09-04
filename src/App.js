import React, { Component } from 'react';
import logo from './logo.svg';
import TMDB_logo from './tmdb.png';
import './App.css';
import  SearchBar  from './components/SearchBar';
import MovieCastDetailContainer from './components/MovieCastDetailContainer';
import { Container, Row, Col} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieID: "",
    }
  }

  updateMovieID(value) {
    this.setState({
      movieID: value
    });
  }

  render() {
    return (
      <Container id="App" className="App" fluid={false}>
        <div className="App-header">
          <h1 className="App-title">React Movies</h1>
        </div>
        <Row>
          <Col md={{size: 12}}>
            <SearchBar onSubmit={this.updateMovieID.bind(this)}/>
            <MovieCastDetailContainer movieID={this.state.movieID}/> 
          </Col> 
        </Row>
        <footer>
          <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          <a href="https://www.themoviedb.org/"><img src={TMDB_logo} className="tmdb-logo img-responsive" alt="The Movie Database"/></a>
        </footer>
      </Container>
    );
  }
}

export default App;