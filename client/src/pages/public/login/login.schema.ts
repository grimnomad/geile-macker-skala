import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  handle: Yup.string().required('Der Handle muss angegeben werden!'),
  password: Yup.string().required('Das Passwort muss angegeben werden!')
});

export { LogInSchema };
