import { Button, Form, FormButtonGroup, FormField } from '@gms/components';
import { AuthSignUpDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { useSignUp } from '../../../api';
import { useLogin } from '../../common';
import { SignUpContainer } from './SignUp.styles';

interface FormValues {
  handle: string;
  password: string;
  firstName: string;
  lastName: string;
  repeatedPassword: string;
}

function SignUp(): ReactElement {
  const login = useLogin();

  const { mutate: signUp } = useSignUp();

  const { register, handleSubmit, getValues, formState } =
    useForm<FormValues>();
  const { errors } = formState;

  function onSubmit(data: FormValues): void {
    const { firstName, handle, lastName, password } = data;

    const signUpDTO: AuthSignUpDTO = {
      first_name: firstName,
      handle,
      last_name: lastName,
      password
    };

    signUp(signUpDTO, {
      onSuccess: () => {
        login({ handle, password });
      }
    });
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
        <FormField
          label="Handle"
          hint="Das Handle muss zwischen 3 und 20 Zeichen haben."
          hasError={!!errors.handle}
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
        />
        <FormField
          label="Vorname"
          hint="Der Vorname muss eine Länge zwischen 2 und 50 Zeichen haben."
          hasError={!!errors.firstName}
          {...register('firstName', {
            required: 'Der Vorname muss angegeben werden!',
            minLength: {
              value: 2,
              message:
                'Der Vorname muss mindestens eine Länge von 2 Zeichen haben!'
            },
            maxLength: {
              value: 50,
              message:
                'Der Vorname darf maximal eine Länge von 50 Zeichen haben!'
            }
          })}
        />
        <FormField
          label="Nachname"
          hint="Der Nachname muss eine Länge zwischen 2 und 50 Zeichen haben."
          hasError={!!errors.lastName}
          {...register('lastName', {
            required: 'Der Nachname muss angegeben werden!',
            minLength: {
              value: 2,
              message:
                'Der Nachname muss mindestens eine Länge von 2 Zeichen haben!'
            },
            maxLength: {
              value: 50,
              message:
                'Der Nachname darf maximal eine Länge von 50 Zeichen haben!'
            }
          })}
        />
        <FormField
          label="Passwort"
          type="password"
          hasError={!!errors.password}
          {...register('password', {
            required: 'Das Password muss angegeben werden!'
          })}
        />
        <FormField
          label="Passwort wiederholen"
          hint={errors.repeatedPassword?.message}
          type="password"
          hasError={!!errors.repeatedPassword}
          {...register('repeatedPassword', {
            validate: (value) => matchesPassword(value)
          })}
        />
        <FormButtonGroup>
          <Button type="submit">Sign up</Button>
        </FormButtonGroup>
      </Form>
    </SignUpContainer>
  );
}

export { SignUp };
