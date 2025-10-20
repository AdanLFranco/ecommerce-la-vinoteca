import * as Yup from "yup";

export interface RegisterFormValuesType {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  address: string;
  phone: string;
}

export const registerInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las 2 contraseñas deben coincidir")
    .required("Debe confirmar su contraseña"),
  name: Yup.string().required("El nombre es obligatorio"),
  address: Yup.string().required("La dirección es obligatoria"),
  phone: Yup.string()
    .matches(
      /^[0-9+\-\s()]+$/,
      "El teléfono solamente debe contener números y caracteres válidos"
    )
    .required("Debe agregar un número telefónico"),
});
