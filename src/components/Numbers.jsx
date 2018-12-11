import React from 'react';
import PropTypes from 'prop-types';
import { range } from '../utils/helpers';

const Numbers = ({ selectedNumbers, selectNumber, usedNumbers }) => {
  const numberClassName = (number) => {
    if (usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="card-title">Select appropriate answer or answer combination from the buttons below</div>
        {Numbers.list.map((number, i) => (
          <span key={i}
            className={`rounded-span ${numberClassName(number)}`}
            onClick={() => selectNumber(number)}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};
Numbers.list = range(1, 10);

Numbers.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  selectNumber: PropTypes.func,
  usedNumbers: PropTypes.arrayOf(PropTypes.number)
};

export default Numbers;
