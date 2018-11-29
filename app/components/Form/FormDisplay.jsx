import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import {
  Radio,
  Checkbox,
} from 'react-bootstrap';

import FormButtons from './FormButtons';
import FormInput from '../FormInput';

import style from './style.scss';

const FormDisplay = ({
  handleChange,
  handleReset,
  isSubmitting,
  values,
}) => {

  const { circuitNumber } = values;

  return (
    <Form className={style.form}>

      <section className={style.title}>
        Phase Color Finder
      </section>

      <section className={style.controls}>
        <FormButtons
          isSubmitting={isSubmitting}
          handleReset={handleReset}
          className={style.buttons}
        />
      </section>

      <section className={style.inputArea}>
        <FormInput
          name="circuitNumber"
          type="number"
        />
      </section>


    </Form>
  )
};

export default FormDisplay;
