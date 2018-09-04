import React, { Component } from 'react';
import './styles/CastDetail.css';
import { Row, Col } from 'reactstrap';
class CastDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var cast = this.props.cast;
    var castMembers = cast.map(function(d, index) {
      return (
        <Col sm={{size: 6}} md={{size: 4}} lg={{size: 4}} key={index+1} >
          <div className="actor-container">
            <Row>
              <Col xs={{size: 7}} sm={{size: 12}}>
                <p className="actor-name">{d.name}</p>
                <p className="character-name">as {d.character}</p>
              </Col>
              <Col xs={{size: 5}} sm={{size: 12}} >
                <img className="actor-picture img-responsive" src={d.profile_path} alt={d.name} alt={d.name}/>
              </Col>  
            </Row>
          </div> 
        </Col>
      );
    });

    return(
      <div>
        <h2 className="section-header">Top Billed Cast</h2> 
        <Row>
          {castMembers}
        </Row>
      </div>
    );
  }
}

export default CastDetail;