import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

import Display from '../Display';
import FormDisplay from './FormDisplay';



class LightSpacingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };


  }

  handleSubmit(values, actions) {
    // const {
    //
    // } = values;



    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={}
          onSubmit={this.handleSubmit}
          render={props => (
            <React.Fragment>
              <FormDisplay {...props} />
              <Display {...props.values} />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default LightSpacingForm;


// validationSchema={yup.object({
  //   numOfLights: yup.number().min(1).positive('Positive value needed').required('Required'),
  //   lengthOfRoom: yup.number().required('Required'),
  //   widthOfRoom: yup.number(),
  //   lightsPerRow: yup.number().min(1).lessThan(maxLightPerRow, `Max ${maxLightPerRow} lights per Row.`),
  //   numOfRows: yup.number().min(1),
  //   orientation: yup.string().matches(/parallel|series/).required('Required'),
  //   units: yup.string().matches(/imperial|metric/).required('Required'),
  // })}
