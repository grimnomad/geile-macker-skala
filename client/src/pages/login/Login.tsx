import { AuthSignInDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { useLogIn } from '../../api';
import { Input } from '../../components';
import { LogInSchema } from './login.schema';
import { LogInContainer, LogInForm } from './styles';

function Login(): ReactElement {
  const { mutate: logIn } = useLogIn();
  const history = useHistory();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      handle: '',
      password: ''
    },
    validationSchema: LogInSchema,
    onSubmit: (values) => {
      const { handle, password } = values;

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

  return (
    <LogInContainer>
      <LogInForm onSubmit={handleSubmit}>
        <Input
          id="handle"
          placeholder="Handle"
          value={values.handle}
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="Passwort"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </LogInForm>
    </LogInContainer>
  );
}

export { Login };
