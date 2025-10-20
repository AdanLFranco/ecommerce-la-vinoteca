"use client";

import { registerUser } from "@/services/auth.services";
import {
  RegisterFormValuesType,
  registerInitialValues,
  registerValidationSchema,
} from "@/validators/registerSchema";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  const formik = useFormik<RegisterFormValuesType>({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await registerUser(values);
        console.log("Registro procesado, con respuesta del server:", response);
        Swal.fire({
          title: "Ya eres parte de nuestro club!!",
          text: "Usuario se ha registrado de manera exitosa.",
          imageUrl:
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424479/goodAlertImage_uooc2o.avif",
          imageWidth: 400,
          imageHeight: 250,
          imageAlt: "Custom image",
          icon: "success",
          confirmButtonColor: "#930e28",
        });

        resetForm();
        router.push("/login");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        Swal.fire({
          title: "Ups!!",
          text: "No se ha podido generar el registro de usuario.",
          imageUrl:
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424481/wrongAlertImage_kn3ybt.avif",
          imageWidth: 400,
          imageHeight: 230,
          imageAlt: "Custom image",
          icon: "error",
          confirmButtonColor: "#930e28",
        });
      }
    },
  });

  return (
    <div className="p-5">
      <div className="shadow-md rounded-lg border-1 ">
        <form
          className="flex flex-row bg-amber-400 text-2xl gap-5 p-5 rounded-t-lg "
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.email ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.email}
              </p>
            ) : null}

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.password ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.password}
              </p>
            ) : null}

            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.confirmPassword ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.confirmPassword}
              </p>
            ) : null}

            <label htmlFor="name">Nombre Completo</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.name ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.name}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col justify-start gap-1">
            <label htmlFor="address">Dirección</label>
            <input
              id="address"
              name="address"
              type="text"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.address ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.address}
              </p>
            ) : null}

            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="bg-amber-200 rounded-sm min-w-92"
            />
            {formik.errors.phone ? (
              <p className="text-red-600 text-sm font-bold">
                {formik.errors.phone}
              </p>
            ) : null}
            <div className="pt-4 flex flex-row justify-end mr-[-8]">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex flex-row justify-center items-center me-2 w-28 disabled:bg-stone-400"
              >
                {formik.isSubmitting ? "Registrando..." : "Regístrate"}
              </button>
            </div>
            <div className="mt-1 text-center flex justify-end items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300 pr-2">
                Ya estás registrado?{" "}
              </span>
              <Link
                href="/login"
                className="text-rose-900 hover:text-rose-600 text-lg"
              >
                Inicia Sesión
              </Link>
            </div>
          </div>
        </form>
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759420795/registerFormBottomImage_iuv8gj.jpg"
          }
          alt="formImage"
          height={516}
          width={800}
          className="rounded-b-lg h-auto w-200"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
