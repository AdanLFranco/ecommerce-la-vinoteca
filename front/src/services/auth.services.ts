import { LoginFormValuesType } from "@/validators/loginSchema";
import { RegisterFormValuesType } from "@/validators/registerSchema";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: RegisterFormValuesType) => {
  const response = await fetch(`${apiURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("No se pudo registrar el usuario");
  }
  return await response.json();
};

export const loginUser = async (userData: LoginFormValuesType) => {
  const response = await fetch(`${apiURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("No se ha podido iniciar sesión");
  }

  return await response.json();
};
