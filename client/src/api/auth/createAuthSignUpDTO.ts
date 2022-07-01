import { AuthSignUp } from '../../models';
import { AuthSignUpDTO } from './AuthSignUpDTO';

function createAuthSignUpDTO(authSignUp: AuthSignUp): AuthSignUpDTO {
  const dto: AuthSignUpDTO = {
    first_name: authSignUp.firstName,
    handle: authSignUp.handle,
    last_name: authSignUp.lastName,
    password: authSignUp.password
  };

  return dto;
}

export { createAuthSignUpDTO };
