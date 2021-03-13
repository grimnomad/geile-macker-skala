import { AuthSignInDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { useLogIn } from '../../api';
import { Button, Form, FormButtonGroup, FormEntry } from '../../components';
import { LogInSchema } from './login.schema';
import { LogInContainer } from './styles';

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
      <Form onSubmit={handleSubmit}>
        <FormEntry
          id="handle"
          label="Handle"
          value={values.handle}
          onChange={handleChange}
        />
        <FormEntry
          id="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <FormButtonGroup>
          <Button type="submit">Log in</Button>
        </FormButtonGroup>
      </Form>
    </LogInContainer>
  );
}

export { Login };
