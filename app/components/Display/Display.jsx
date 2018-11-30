import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import toLower from 'lodash/toLower';

import style from './style.scss';

function Display({ phaseColor, circuitNumber }) {
  const containerClass = classnames({
    [`${style.container}`]: true,
    [`${style[toLower(phaseColor)]}`]: phaseColor,
  })
  return (
    <React.Fragment>
      {phaseColor && (
        <section className={containerClass}>
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
