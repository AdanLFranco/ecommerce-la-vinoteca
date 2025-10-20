import * as Yup from "yup";

export interface LoginFormValuesType {
  email: string;
  password: string;
}

export const loginInitialValues: LoginFormValuesType = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});
