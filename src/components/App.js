import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';


class App extends Component{

  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {

    if (this.props.fetchState === fetchStates.error){
      return(
        <div>
          <h3>Error occured, please refresh</h3>
          <p>{this.props.message}</p>
        </div>
      )
    }
      return(
        <div>
          <h2>♥ ♠ Evens or Odds ♠ ♥</h2>
          {
            this.props.gameStarted ? (
              <div>
                <h3>The game is on!</h3>
                <br />
                <DrawCard />
                <hr />
                <button onClick={this.props.cancelGame}>Cancel Game</button>

              </div>
            ) : (
              <div>
                <h3>A new game awaits</h3>
                <br />
                <button onClick={this.startGame}>Start Game</button>
                <hr />
                <Instructions />
              </div>                    
            )
          }
        </div> 
      )
  }
}

const mapStateToProps = state => {
  const { gameStarted } = state.settings;
  const { fetchState, message } = state.deck;

  return { 
    gameStarted, fetchState, message 
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   };
// }

const componentConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App);