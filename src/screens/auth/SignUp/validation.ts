import * as yup from 'yup';

export const schemaSignUp = yup.object({
  firstName: yup.string().required('Campo obrigatório'),
  lastName: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});
