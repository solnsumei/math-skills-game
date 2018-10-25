import React from 'react';
import PropTypes from 'prop-types';

/**
 * Frame to show when the game is over
 * @param {string} doneStatus
 * @param {func} restartGame
 * @returns {Object} jsx
 */
const DoneFrame = ({ doneStatus, restartGame }) => {
  const classToShow = doneStatus === 'Hurray, you won!' ? 'success' : 'danger';
  return (
    <div className="done text-center">
      <h2 className={`text-${classToShow}`}>{doneStatus}</h2>
      <br />
      <button className="btn btn-primary btn-sm" onClick={restartGame}>
        <i className="fa fa-sync"></i> Play Again
    </button>
    </div>
  );
};

DoneFrame.propTypes = {
  doneStatus: PropTypes.string,
  restartGame: PropTypes.func
};

export default DoneFrame;
