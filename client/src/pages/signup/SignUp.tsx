import { AuthSignUpDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';

import { useSignUp } from '../../api';
import { Input } from '../../components';
import { SignUpSchema } from './signup.schema';
import { SignUpContainer, SignUpForm } from './styles';

function SignUp(): ReactElement {
  const { mutate } = useSignUp();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      handle: '',
      password: '',
      firstName: '',
      lastName: '',
      repeatedPassword: ''
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
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <Input
          name="handle"
          placeholder="Handle"
          value={values.handle}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.handle && !!errors.handle}
        />
        <Input
          name="firstName"
          placeholder="Vorname"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.firstName && !!errors.firstName}
        />
        <Input
          name="lastName"
          placeholder="Nachname"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.lastName && !!errors.lastName}
        />
        <Input
          type="password"
          name="password"
          placeholder="Passwort"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.password && !!errors.password}
        />
        <Input
          type="password"
          name="repeatedPassword"
          placeholder="Passwort wiederholen"
          value={values.repeatedPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.repeatedPassword && !!errors.repeatedPassword}
        />
        <button type="submit">Sign up</button>
      </SignUpForm>
    </SignUpContainer>
  );
}

export { SignUp };
