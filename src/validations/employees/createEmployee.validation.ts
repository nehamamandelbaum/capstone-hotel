import * as yup from "yup"

const createEmployeeSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("Name is Required"),
        cpf: yup
          .string()
          .required("CPF is required!")
          .length(11, "Cpf must have 11 digits")
          .matches(/^\d+$/, "The field should have digits only"),
        password: yup.string().required("Password is required!"),
        admin: yup.boolean(),
        status: yup.boolean(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
}
export default createEmployeeSchema
