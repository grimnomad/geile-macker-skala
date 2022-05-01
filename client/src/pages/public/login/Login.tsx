import { Button, Form, FormButtonGroup, FormField } from '@gms/components';
import { AuthSignInDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '../../common';
import { LogInContainer } from './Login.styles';

function Login(): ReactElement {
  const login = useLogin();

  const { register, handleSubmit } = useForm<AuthSignInDTO>();

  return (
    <LogInContainer>
      <Form onSubmit={handleSubmit(login)}>
        <FormField
          label="Handle"
          {...register('handle', {
            required: 'Der Handle muss angegeben werden!'
          })}
        />
        <FormField
          label="Password"
          type="password"
          {...register('password', {
            required: 'Das Passwort muss angegeben werden!'
          })}
        />
        <FormButtonGroup>
          <Button type="submit">Log in</Button>
        </FormButtonGroup>
      </Form>
    </LogInContainer>
  );
}

export { Login };
