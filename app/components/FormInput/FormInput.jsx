import React from 'react';
import PropTypes from 'prop-types';

import {
  Field,
  ErrorMessage,
} from 'formik';
import { HelpBlock } from 'react-bootstrap';

import {
  split,
  map,
  capitalize,
  kebabCase,
  join,
} from 'lodash/fp';

import FieldGroup from './FieldGroup';

const FormInput = (props) => {
  const { name, type } = props;
  const splitOnDash = split('-');
  const label = join(' ')(map(capitalize)((splitOnDash(kebabCase(name)))))
  return (
    <React.Fragment>
      <Field
        name={name}
        label={label}
        type={type}
        {...props}
        component={FieldGroup}
      />
      <ErrorMessage name={name} component={HelpBlock} />
    </React.Fragment>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
