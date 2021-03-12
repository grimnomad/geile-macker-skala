import { AuthSignInDTO, AuthSignUpDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { useLogIn, useSignUp } from '../../api';
import { FormEntry } from '../../components';
import { SignUpSchema } from './signup.schema';
import { SignUpContainer, SignUpForm } from './styles';

function SignUp(): ReactElement {
  const { mutate: signUp } = useSignUp();
  const { mutate: logIn } = useLogIn();

  const history = useHistory();

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
    onSubmit: (values) => {
      const { firstName, handle, lastName, password } = values;

      const signUpDTO = createObject<AuthSignUpDTO>({
        first_name: firstName,
        handle,
        last_name: lastName,
        password
      });

      signUp(signUpDTO, {
        onSuccess: () => {
          const signInDTO = createObject<AuthSignInDTO>({
            handle,
            password
          });

          logIn(signInDTO, {
            onSuccess: () => {
              history.push('/');
            }
          });
        }
      });
    }
  });

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <FormEntry
          id="handle"
          label="Handle"
          value={values.handle}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.handle && !!errors.handle}
        />
        <FormEntry
          id="firstName"
          label="Vorname"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.firstName && !!errors.firstName}
        />
        <FormEntry
          id="lastName"
          label="Nachname"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.lastName && !!errors.lastName}
        />
        <FormEntry
          id="password"
          label="Passwort"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.password && !!errors.password}
        />
        <FormEntry
          id="repeatedPassword"
          label="Passwort wiederholen"
          type="password"
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
