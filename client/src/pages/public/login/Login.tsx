import {
  Button,
  Form,
  FormButtonGroup,
  FormField,
  useTitle
} from '@gms/components';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Location, useLocation } from 'react-router-dom';

import { useLogin } from '../../../components';
import { AuthSignIn } from '../../../models';
import { TitleFactory } from '../../../utils';
import { LogInContainer } from './Login.styles';

interface LocationState {
  readonly from: Location;
}

function Login(): ReactElement {
  useTitle(TitleFactory.createTitle('Anmeldung'));

  const location = useLocation();

  const from = (location.state as LocationState | null)?.from.pathname;

  const login = useLogin(from);

  const { register, handleSubmit } = useForm<AuthSignIn>();

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
