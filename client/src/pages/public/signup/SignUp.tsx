import { AuthSignUpDTO, createObject } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormButtonGroup,
  FormEntry,
  useAuth
} from '../../../components';
import { SignUpContainer } from './styles';

interface FormValues {
  handle: string;
  password: string;
  firstName: string;
  lastName: string;
  repeatedPassword: string;
}

function SignUp(): ReactElement {
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    formState
  } = useForm<FormValues>();
  const { errors } = formState;

  function onSubmit(data: FormValues): void {
    const { firstName, handle, lastName, password } = data;

    const signUpDTO = createObject<AuthSignUpDTO>({
      first_name: firstName,
      handle,
      last_name: lastName,
      password
    });

    signup(signUpDTO);
  }

  function matchesPassword(value: string): boolean | string {
    const { password } = getValues();

    const isEqual = password === value;
    const message = 'Beide Passwörter müssen gleich sein';

    return isEqual || message;
  }

  return (
    <SignUpContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormEntry
          label="Handle"
          {...register('handle', {
            required: 'Der Handle muss angegeben werden!',
            minLength: {
              value: 3,
              message:
                'Der Handle muss mindestens eine Länge von 3 Zeichen haben!'
            },
            maxLength: {
              value: 20,
              message:
                'Der Handle darf maximal eine Länge von 20 Zeichen haben!'
            }
          })}
          hasError={!!errors.handle}
        />
        <FormEntry
          label="Vorname"
          {...register('firstName', {
            required: 'Der Vorname muss angegeben werden!',
            minLength:
              'Der Vorname muss mindestens eine Länge von 2 Zeichen haben!',
            maxLength:
              'Der Vorname darf maximal eine Länge von 50 Zeichen haben!'
          })}
          hasError={!!errors.firstName}
        />
        <FormEntry
          label="Nachname"
          {...register('lastName', {
            required: 'Der Nachname muss angegeben werden!',
            minLength:
              'Der Nachname muss mindestens eine Länge von 2 Zeichen haben!',
            maxLength:
              'Der Nachname darf maximal eine Länge von 50 Zeichen haben!'
          })}
          hasError={!!errors.lastName}
        />
        <FormEntry
          label="Passwort"
          type="password"
          {...register('password', {
            required: 'Das Password muss angegeben werden!'
          })}
          hasError={!!errors.password}
        />
        <FormEntry
          label="Passwort wiederholen"
          type="password"
          {...register('repeatedPassword', {
            validate: (value) => matchesPassword(value)
          })}
          hasError={!!errors.repeatedPassword}
        />
        <FormButtonGroup>
          <Button type="submit">Sign up</Button>
        </FormButtonGroup>
      </Form>
    </SignUpContainer>
  );
}

export { SignUp };
