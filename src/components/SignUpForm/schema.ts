import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().trim().required("Nome é obrigatório"),
  email: yup
    .string()
    .trim()
    .required("E-mail é obrigatório")
    .email("Não é um e-mail válido"),
  password: yup
    .string()
    .trim()
    .required("Senha é obrigatória")
    .min(5, "Senha deve ter no mínimo 5 dígitos"),
  passwordConfirmation: yup
    .string()
    .trim()
    .required("Confirmação de senha é obrigatória")
    .min(5, "Senha deve ter no mínimo 5 dígitos")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
});

export default schema;
