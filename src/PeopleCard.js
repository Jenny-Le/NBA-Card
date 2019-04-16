import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './index.css';

  class PeopleCard extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    render () {
        let { id } = this.props.player;
        let { removePlayer } = this.props;

        return (
            <div>
            <Card>
            <CardImg top width="50%" height="280px" src={this.props.player.image} alt="Card image cap" />
            <CardBody>
                <CardTitle className="player">Player: {this.props.player.name}</CardTitle>
                <CardSubtitle>Team: <span className="team">{this.props.player.team}</span></CardSubtitle>
                <CardText>Position: {this.props.player.position}</CardText>
                <Button onClick={() => this.props.removePlayer(id)}> Delete</Button>
            </CardBody>
            </Card>
        </div>
        )
        }
  }

  
  export default PeopleCard;