import { AuthSignInDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Form,
  FormButtonGroup,
  FormField,
  useAuth
} from '../../../components';
import { LogInContainer } from './styles';

function Login(): ReactElement {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<AuthSignInDTO>();

  function logIn(signInDTO: AuthSignInDTO): void {
    login(signInDTO, () => navigate('/dashboard'));
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
