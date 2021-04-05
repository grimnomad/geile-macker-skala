import { AuthSignInDTO, createObject } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormButtonGroup,
  FormEntry,
  useAuth
} from '../../../components';
import { LogInContainer } from './styles';

interface FormValues {
  handle: string;
  password: string;
}

function Login(): ReactElement {
  const { login } = useAuth();

  const { register, handleSubmit } = useForm<FormValues>();

  function onSubmit(data: FormValues): void {
    const { handle, password } = data;

    const signInDTO = createObject<AuthSignInDTO>({
      handle,
      password
    });

    login(signInDTO);
  }

  return (
    <LogInContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormEntry
          label="Handle"
          {...register('handle', {
            required: 'Der Handle muss angegeben werden!'
          })}
        />
        <FormEntry
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
