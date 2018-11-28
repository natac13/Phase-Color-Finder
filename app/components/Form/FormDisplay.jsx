import React from 'react';

import {
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import {
  FormGroup,
  Radio,
  HelpBlock,
  Checkbox,
} from 'react-bootstrap';

import FieldGroup from '../FieldGroup';
import FormButtons from './FormButtons';

import FormInput from '../FormInput';

import style from './style.scss';

const FormDisplay = ({
  isSubmitting,
  handleReset,
}) => {

  const {

  } = values;




  return (
    <Form className={style.form}>

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
