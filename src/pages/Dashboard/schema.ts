import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().trim().required("Nome do produto é obrigatório"),

  category: yup.string().trim().required("Categoria do produto é obrigatório"),

  price: yup.number().positive("Preço do produto tem que ser positivo"),
});

export default schema;
