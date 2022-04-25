import { Button, Form, FormButtonGroup, FormField } from '@gms/components';
import { AuthSignInDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth, useLogger } from '../../../components';
import { LogInContainer } from './Login.styles';

function Login(): ReactElement {
  const { login } = useAuth();
  const navigate = useNavigate();
  const logger = useLogger(Login.name);

  const { register, handleSubmit } = useForm<AuthSignInDTO>();

  function logIn(signInDTO: AuthSignInDTO): void {
    login(signInDTO, () => {
      logger.info('User has successfully logged in.');
      navigate('/dashboard');
    });
  }

  return (
    <LogInContainer>
      <Form onSubmit={handleSubmit(logIn)}>
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
