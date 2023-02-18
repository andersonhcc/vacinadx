import * as yup from 'yup';

export const schemaSignUpStep2 = yup.object({
  password: yup.string().min(8, 'A senha deve ter mais que 8 caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'A senha deve ter mais que 8 caracteres')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
});
