import React, { Component } from 'react';

import { possibleCombinationSum, range } from '../utils/helpers';

import Stars from './Stars';
import Button from './Button';
import Numbers from './Numbers';
import Answer from './Answer';
import DoneFrame from './DoneFrame';
import Instructions from './Instructions';
import Header from './Header';

/**
 * @class Game
 * @extends {Component}
 */
class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);

  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null,
    showHowToPlay: false
  });

  state = Game.initialState();

  setShowHowToPlay = () => this.setState(prevState => ({
    showHowToPlay: !prevState.showHowToPlay
  }));

  /**
   * @description
   * Reset game state to play again
   * @returns {void}
   * @memberof Game
   */
  restart = () => this.setState(Game.initialState());

  /**
   *@param {int} clickedNumber
   *@returns {void}
   */
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0
      || this.state.usedNumbers.indexOf(clickedNumber) >= 0) return;

    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  /**
   *@param {int} clickedNumber
   *@returns {void}
   */
  removeSelectedNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }

  /**
   * @memberof Game
   * @returns {void}
   */
  checkAnswer = () => this.setState(prevState => ({
    answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    )
  }));

  /**
   * @returns {void}
   * @memberof Game
   */
  acceptAnswer = () => this.setState(prevState => ({
    usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
    selectedNumbers: [],
    answerIsCorrect: null,
    randomNumberOfStars: Game.randomNumber()
  }), this.updateDoneStatus);

  /**
   * @returns {void}
   * @memberof Game
   */
  redraw = () => {
    if (this.state.redraws === 0) return;

    this.setState(prevState => ({
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
      redraws: prevState.redraws - 1
    }), this.updateDoneStatus);
  };

  /**
   * @description
   * Check possible solution to game play options
   * @param {int} randomNumberOfStars
   * @param {Array} usedNumbers
   * @returns {void}
   * @memberof Game
   */
  posibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = range(0, 10)
      .filter(number => usedNumbers.indexOf(number) === -1);

    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }

  /**
   * @description
   * Finish game and update state
   * @returns {void}
   * @memberof Game
   */
  updateDoneStatus = () => this.setState((prevState) => {
    if (this.state.usedNumbers.length === 9) {
      return { doneStatus: 'Hurray, you won!' };
    }

    if (prevState.redraws === 0 && !this.posibleSolutions(prevState)) {
      return { doneStatus: 'Game Over, you lose!' };
    }
  });

  /**
   * @returns {Object} jsx
   * @memberof Game
   */
  render() {
    const {
      randomNumberOfStars,
      selectedNumbers,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus,
      showHowToPlay,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <Header
              showHowToPlay={showHowToPlay}
              setShowHowToPlay={this.setShowHowToPlay} />

            {(!doneStatus && !showHowToPlay) && <div className="row">
              <Stars numberOfStars={randomNumberOfStars} />

              <Button
                selectedNumbers={selectedNumbers}
                checkAnswer={this.checkAnswer}
                acceptAnswer={this.acceptAnswer}
                answerIsCorrect={answerIsCorrect}
                redraw={this.redraw}
                redraws={redraws}
                doneStatus={doneStatus} />

              <Answer
                selectedNumbers={selectedNumbers}
                removeNumber={this.removeSelectedNumber} />
            </div>}
            {showHowToPlay
              ? <Instructions setShowHowToPlay={this.setShowHowToPlay}/>
              : <div>
              <div className="margin"></div>
              <div className="margin"></div>
              {doneStatus
                ? <DoneFrame doneStatus={doneStatus}
                  restartGame={this.restart} />
                : <Numbers
                  selectedNumbers={selectedNumbers}
                  selectNumber={this.selectNumber}
                  usedNumbers={usedNumbers} />
              } </div>
            }
            <div className="margin"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
