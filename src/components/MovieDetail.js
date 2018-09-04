import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './styles/MovieDetail.css'        ;
import { Row, Col } from 'reactstrap';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    /* Call map function only after the props have been set
       Props don't load on first render */
    var genres = this.props.genres && this.props.genres.map(function(d, index) {
    return (
      <p className="genre" key={index}>{d.genre},&nbsp;</p>
    );
  });

    return(
      <div>
        <Row id="movie-container" className="section-container">
          <Col sm={{size: 6, order: 2}} md={{size: 7, order: 2}} lg={{size: 7}}>
            <h1 className="title">{this.props.title}<span className="release-year">({this.props.releaseYear})</span></h1>
            <br/>
            {genres}
            <div id="overview-container" className="section-container d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
              <h2 className="section-header">Overview</h2>
            <p className="overview">{this.props.overview}</p>
            </div>
          </Col>
          <Col sm={{size: 6}} md={{size: 5, order: 1}} lg={{size: 5}}>
            <img src={this.props.poster_path} alt={this.props.title} className="poster" height="400"/>
          </Col>
        </Row>
          <hr className="divider d-block d-sm-none d-none d-sm-block d-md-none"/>
          <div id="overview-container" className="section-container d-block d-sm-none d-none d-sm-block d-md-none">
            <h2 className="section-header">Overview</h2>
            <p className="overview">{this.props.overview}</p>
          </div>
          <hr className="divider"/>
      </div>
    );
  }
}

export default MovieDetail;