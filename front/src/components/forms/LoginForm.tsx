"use client";

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/auth.services";
import {
  LoginFormValuesType,
  loginInitialValues,
  loginValidationSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const LoginForm = () => {
  const { setDataUser } = useAuth();
  const router = useRouter();

  const formik = useFormik<LoginFormValuesType>({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await loginUser(values);
        setDataUser(response);
        Swal.fire({
          title: "Bienvenido a La Vinoteca!!",
          text: "Usuario ha iniciado sesión de manera exitosa.",
          imageUrl:
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424479/goodAlertImage_uooc2o.avif",
          imageWidth: 400,
          imageHeight: 250,
          imageAlt: "Custom image",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#930e28",
        });
        console.log("Login exitoso con respuesta del server:", response);
        resetForm();
        router.push("/products");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        Swal.fire({
          title: "Ups!!",
          text: error.message || "No se ha podido iniciar sesión.",
          imageUrl:
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424481/wrongAlertImage_kn3ybt.avif",
          imageWidth: 400,
          imageHeight: 230,
          imageAlt: "Custom image",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#930e28",
        });
      }
    },
  });

  return (
    <form
      className="flex flex-col bg-amber-400 text-2xl items-center gap-3 p-10 h-98 border-1"
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-amber-200 rounded-sm min-w-84"
      />
      {formik.errors.email && formik.touched.email ? (
        <p id="email-error" className="text-red-600 text-sm font-bold">
          {formik.errors.email}
        </p>
      ) : null}

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-amber-200 rounded-sm min-w-84"
      />
      {formik.errors.password ? (
        <p id="password-error" className="text-red-600 text-sm font-bold">
          {formik.errors.password}
        </p>
      ) : null}
      <div className="pt-2">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex flex-row justify-center items-center me-2 w-32 cursor-pointer "
        >
          {formik.isSubmitting ? "Iniciando Sesión" : "Inicia sesión"}
        </button>
      </div>
      <div className="mt-1 text-center flex justify-end items-center">
        <span className="text-sm text-gray-700 dark:text-gray-300 pr-2">
          No estás registrado aún?{" "}
        </span>
        <Link
          href="/register"
          className="text-rose-900 hover:text-rose-600 text-lg"
        >
          Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
