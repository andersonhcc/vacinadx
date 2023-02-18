import * as yup from 'yup';

export const schemaLogin = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'A senha deve ter mais que 6 caracteres'),
});
