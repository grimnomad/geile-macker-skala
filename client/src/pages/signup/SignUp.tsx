import { AuthSignUpDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';

import { useSignUp } from '../../api';
import { SignUpSchema } from './signup.schema';

function SignUp(): ReactElement {
  const { mutate } = useSignUp();

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      handle: '',
      password: '',
      firstName: '',
      lastName: ''
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, helpers) => {
      const { firstName, handle, lastName, password } = values;
      const { resetForm } = helpers;

      const signUpDTO = createObject<AuthSignUpDTO>({
        first_name: firstName,
        handle,
        last_name: lastName,
        password
      });

      mutate(signUpDTO, {
        onSuccess: () => {
          resetForm();
        }
      });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="handle"
        value={values.handle}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}

export { SignUp };
