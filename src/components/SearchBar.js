import React, { Component } from 'react';
import "./styles/SearchBar.css";
import {Row, Col, Button} from 'reactstrap';
import axios from 'axios';

var apikey = "";
var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + apikey + "&language=en-US&page=1&include_adult=false&query=";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''}
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Keep up with the currrent value of the search bar */
  handleChange(event) {
    this.setState({query: event.target.value});
  }


  /* Search using the user supplied query and pass
   on the movie id to the parent submit function */
  handleSubmit(e) {
    e.preventDefault();
    axios.get(searchUrl + this.state.query).then(res => {
      this.props.onSubmit(res.data.results[0].id);
    });
  }

  render() {
    return (
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <div className="searchContainer">
              <input type="search" className="searchBar form-control" placeholder="Search for a movie" onChange={this.handleChange} />
              <Button color="default" className="searchBtn" type="submit">Search</Button>    
              </div>
          </form>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;