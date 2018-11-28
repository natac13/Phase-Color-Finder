import React from 'react';
import { hot } from 'react-hot-loader';

import CircuitNumberForm from 'Components/Form';
import Header from 'Components/Header';

import style from './style.scss';

const App = (props) => {
  return (
    <div className={style.app}>
      <Header title="Phase Color From Circuit Number" />
      <CircuitNumberForm />
    </div>
  );
};

export default hot(module)(App);
