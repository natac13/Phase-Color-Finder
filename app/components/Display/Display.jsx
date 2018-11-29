import React from 'react';
import PropTypes from 'prop-types';


import style from './style.scss';

function Display({ phaseColor, circuitNumber }) {
  return (
    <React.Fragment>
      {phaseColor && (
        <section className={style.container}>
          <div className={style.circuit}>
            {`Circuit # ${circuitNumber}`}
          </div>
          <div className={style.phaseColor}>
            {phaseColor}
            </div>
        </section>)}
    </React.Fragment>
  );
}

Display.propTypes = {
  phaseColor: PropTypes.string,
  circuitNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Display.defaultProps = {
  phaseColor: undefined,
  circuitNumber: undefined,
};

export default Display;
