import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PlayerCard from './PlayerCard';

class MainArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [
                {
                    id: 1,
                    name: "Kevin Durant",
                    team: "Golden State Warrios",
                    position: "Everything",
                    image: "https://sportshub.cbsistatic.com/i/r/2019/01/27/367ca5d9-a85c-41a9-b0d4-c31a2319486a/thumbnail/770x433/0298bf67b74465e72e408e357cc61d1a/kevin-durant-warriors.jpg"

                },
                {   
                    id: 2,
                    name: "Lebron James",
                    team: "Lakers",
                    position: "Small forward, Power forward",
                    image: "https://cdnph.upi.com/svc/sv/upi/6021547669776/2019/1/127b3c18cb2ae973bc292527ae956fb4/Lakers-LeBron-James-to-miss-at-least-two-more-games.jpg"

                },
                {   
                    id: 3,
                    name: "James Harden",
                    team: "Houston Rockets",
                    position: "Point guard, Shooting guard",
                    image: "https://sportshub.cbsistatic.com/i/r/2019/01/27/367ca5d9-a85c-41a9-b0d4-c31a2319486a/thumbnail/770x433/0298bf67b74465e72e408e357cc61d1a/kevin-durant-warriors.jpg"
                },
                {   
                    id: 4,
                    name: "Stephen Curry",
                    team: "Houston Rockets",
                    position: "Point guard, Shooting guard",
                    image: "https://sportshub.cbsistatic.com/i/r/2019/01/27/367ca5d9-a85c-41a9-b0d4-c31a2319486a/thumbnail/770x433/0298bf67b74465e72e408e357cc61d1a/kevin-durant-warriors.jpg"
                }
            ]
        }
    }
        removePlayer(id) {
            this.setState({player: this.state.player.filter(player => player.id !== id)})
        }

    render () {
        let playerCards = this.state.player.map(player => {
            return (
                <Col sm="4">
                    <PlayerCard key={player.id} removePlayer={this.removePlayer.bind(this)}player={player}/>
                </Col>
            )
        })
        return (
            <Container>
                <Row>
                    {playerCards}
                </Row>
            </Container>
        )
        }
};



export default MainArea;