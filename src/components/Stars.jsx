import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash-es';

const Stars = ({ numberOfStars }) => (
  <div className="col-5">
    {range(0, numberOfStars).map(number => <i key={number} className="fa fa-star"></i>)}
  </div>
);

Stars.propTypes = {
  numberOfStars: PropTypes.number
};

export default Stars;
