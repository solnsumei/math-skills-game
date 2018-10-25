import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ setShowHowToPlay, showHowToPlay }) => {
  const btnText = showHowToPlay
    ? <span><i className="fa fa-times"></i></span>
    : <span><i className="fa fa-info-circle"></i> Help</span>;

  return (
  <div>
    <div className="row">
      <div className="col-8 col-sm-10">
        <h3>Play Nine</h3>
      </div>
      <div className="col-4 col-sm-2 text-right">
        <button title={showHowToPlay ? 'Close' : ''}
          className={`btn btn-${showHowToPlay ? '' : 'primary'}`}
          onClick={setShowHowToPlay}>
            {btnText}
        </button>
      </div>
    </div>
    <hr />
  </div>
  );
};

Header.propTypes = {
  showHowToPlay: PropTypes.bool,
  setShowHowToPlay: PropTypes.func
};

export default Header;
