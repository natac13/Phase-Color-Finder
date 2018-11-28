import React from 'react';
import PropTypes from 'prop-types';


import style from './style.scss';

function Display({ color }) {


  return (
    <section className={style.container}>
      <div className={style.answer}>
        {color}
      </div>
    </section>
  );
}

Display.propTypes = {
  color: PropTypes.string,
};

Display.defaultProps = {
  color: undefined,
};

export default Display;
