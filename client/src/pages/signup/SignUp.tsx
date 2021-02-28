import { AuthSignUpDTO, createObject } from '@gms/shared';
import { ReactElement, useState } from 'react';
import { useMutation } from 'react-query';

async function signUp(signUpDTO: AuthSignUpDTO): Promise<void> {
  const requestInit = createObject<RequestInit>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(signUpDTO)
  });

  const response = await fetch(
    'http://localhost:3001/auth/signup',
    requestInit
  );

  const data = await response.json();

  console.log(data);
}

function SignUp(): ReactElement {
  const { mutate } = useMutation(signUp);
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={handle}
        onChange={(event) => setHandle(event.currentTarget.value)}
      />
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.currentTarget.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.currentTarget.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <button
        onClick={() =>
          mutate({
            first_name: firstName,
            handle,
            last_name: lastName,
            password
          })
        }
      >
        Sign up
      </button>
    </div>
  );
}

export { SignUp };
