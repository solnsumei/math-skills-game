import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ setShowHowToPlay }) => (
    <div className="card">
      <div className="card-body">
        <div className="card-title text-center">How To Play</div>
        <ul className="bold-text">
          <li>
            Click on the start button to begin the game. This will start the countdown
             timer at the top with a default of 1 minute for the game round.
          </li>
          <li>
            Select one or more numbers from the numbers frame that
             will sum up to the value of the random stars.
          </li>
          <li>
            Click on the = button to check your answer. If the answer is wrong,
             you can withdraw your answers by clicking on them or select new
              numbers from the numbers frame.
              If the answer is correct, the button will display a check mark.
          </li>
          <li>
            Click on the check button to accept the answer and go to next round.
          </li>
          <li>
            If there is no number or possible combinations of numbers that sum up
             to the random number of stars, you can click on the
              redraw button to choose another random number of stars.
             Note: You have only 5 redraws for each game session
          </li>
          <li>
            Repeat steps 1 to 3 until you have selected all the numbers from the numbers frame.
             You win the game when you successfully use all the numbers and you lose
              the game when you have numbers left unused after exhausting the redraws.
             Note: The game ends when the countdown gets to 0.
          </li>
          <li>
            When the game ends, either win or lose, click on the try again button
             to start a new game session. Have fun!
          </li>
        </ul>
        <div className="text-center">
          <button className="btn" onClick={setShowHowToPlay}><i className="fa fa-times"></i></button>
        </div>
      </div>
    </div>
);

Instructions.propTypes = {
  setShowHowToPlay: PropTypes.func
};

export default Instructions;
