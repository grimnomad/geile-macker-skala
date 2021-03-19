import { AuthSignInDTO, createObject } from '@gms/shared';
import { useFormik } from 'formik';
import { ReactElement } from 'react';

import { Button, Form, FormButtonGroup, FormEntry } from '../../../components';
import { useAuth } from '../../../components/auth';
import { LogInSchema } from './login.schema';
import { LogInContainer } from './styles';

function Login(): ReactElement {
  const { login } = useAuth();

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

      login(signInDTO);
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
