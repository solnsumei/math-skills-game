import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ selectedNumbers, removeNumber }) => (
  <div className="col-5">
    {selectedNumbers.map((number, i) => (
      <span className="rounded-span answer"
        key={i}
        onClick={() => removeNumber(number)}>{number}
      </span>
    ))}
  </div>
);

Answer.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  removeNumber: PropTypes.func
};

export default Answer;
