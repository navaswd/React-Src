import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const schema = Yup.object().shape({
 // email: Yup.string().required('Email required'),
  pswrd: Yup.string().required('Password required'),
});

const Radio = () => (
  <div style={styles}>
    <Formik
      validationSchema={schema}
      initialValues={{ email: '', pswrd: '' }}
      onSubmit={(values, actions) => {
        actions.setStatus(undefined);

          if(!values.email){
          actions.setStatus({
            email: 'This is email already exists.',
            pswrd: 'This is password is incorrect',
          });
        }
       }}
      render={({ handleSubmit, handleChange, handleBlur, values, errors, status }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={values['email']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="pswrd"
            value={values['pswrd']}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Submit</button>

          {status && status.email ? (
            <div>API Error: {status.email}</div>
          ) : (
            errors.email && <div>Validation Error: {errors.email}</div>
          )}

          {status && status.pswrd ? (
            <div>API Error: {status.pswrd}</div>
          ) : (
            errors.pswrd && <div>Validation Error: {errors.pswrd}</div>
          )}
        </form>
      )}
    />
  </div>
);
export default Radio;