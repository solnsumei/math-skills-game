import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  selectedNumbers, answerIsCorrect, checkAnswer, acceptAnswer, redraw, redraws,
  doneStatus
}) => {
  const numbersWereSelected = selectedNumbers.length > 0;
  let button;

  switch (answerIsCorrect) {
    case true:
      button = <button
        className="btn btn-success"
        onClick={acceptAnswer}>
          <i className="fa fa-check"></i>
      </button>;
      break;
    case false:
      button = <button
        className="btn btn-danger"><i className="fa fa-times"></i>
      </button>;
      break;
    default:
      button = <button
        className={`btn ${numbersWereSelected ? 'btn-warning' : ''}`}
        disabled={!numbersWereSelected}
        onClick={checkAnswer}>=
      </button>;
      break;
  }

  return (
    <div className="col-2 text-center">
      {button}
      <br/><br/>
      {!doneStatus && <button className="btn btn-primary btn-sm" onClick={redraw}
        disabled={redraws === 0}>
        <i className="fa fa-sync-alt"></i> {redraws}
      </button>}
    </div>
  );
};

Button.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  answerIsCorrect: PropTypes.bool,
  checkAnswer: PropTypes.func,
  acceptAnswer: PropTypes.func,
  redraw: PropTypes.func,
  redraws: PropTypes.number,
  doneStatus: PropTypes.string
};

export default Button;
