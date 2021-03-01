import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  handle: Yup.string()
    .min(3, 'Der Handle muss mindestens eine Länge von 3 Zeichen haben!')
    .max(20, 'Der Handle darf maximal eine Länge von 20 Zeichen haben!')
    .required('Der Handle muss angeben werden!'),
  firstName: Yup.string()
    .min(2, 'Der Vorname muss mindestens eine Länge von 2 Zeichen haben!')
    .max(50, 'Der Vorname darf maximal eine Länge von 50 Zeichen haben!')
    .required('Der Vorname muss angegeben werden!'),
  lastName: Yup.string()
    .min(2, 'Der Nachname muss mindestens eine Länge von 2 Zeichen haben!')
    .max(50, 'Der Nachname darf maximal eine Länge von 50 Zeichen haben!')
    .required('Der Nachname muss angegeben werden!'),
  password: Yup.string().required('Das Password muss angegeben werden!')
});

export { SignUpSchema };
