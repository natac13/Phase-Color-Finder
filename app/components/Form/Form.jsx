import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

import Display from '../Display';
import FormDisplay from './FormDisplay';



class CircuitNumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circuitNumber: '',
      phaseColor: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, actions) {
    const { circuitNumber } = values;

    /* Logic for finding phase color */
    // remainders:
    // 1, 2 = RED
    // 3, 4 = BLACK
    // 5, 0 = BLUE
    const colorMatcher = (remainder) => {
      switch (remainder) {
        case 1:
        case 2:
          return 'RED';
        case 3:
        case 4:
          return 'BLACK';
        case 5:
        case 0:
          return 'BLUE';
        default:
          return null;
      }
    };
    const remainder = circuitNumber % 6;
    const color = colorMatcher(remainder);

    setTimeout(() => {
      console.log('Remainder', remainder);
      console.log('color', color);
      this.setState(prevState => ({
        ...prevState,
        phaseColor: color,
        circuitNumber,
      }));
      console.log(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 700);
  }

  render() {
    const { circuitNumber, phaseColor } = this.state;

    return (
      <div>
        <Formik
          initialValues={
            { circuitNumber }
          }
          onSubmit={this.handleSubmit}
          render={props => (
            <React.Fragment>
              <FormDisplay {...props} />
              <Display phaseColor={phaseColor} circuitNumber={circuitNumber} />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default CircuitNumberForm;


// validationSchema={yup.object({
  //   numOfLights: yup.number().min(1).positive('Positive value needed').required('Required'),
  //   lengthOfRoom: yup.number().required('Required'),
  //   widthOfRoom: yup.number(),
  //   lightsPerRow: yup.number().min(1).lessThan(maxLightPerRow, `Max ${maxLightPerRow} lights per Row.`),
  //   numOfRows: yup.number().min(1),
  //   orientation: yup.string().matches(/parallel|series/).required('Required'),
  //   units: yup.string().matches(/imperial|metric/).required('Required'),
  // })}
