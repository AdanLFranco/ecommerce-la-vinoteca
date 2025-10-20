import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rose-950 shadow-sm ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-end">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-rose-200 sm:mb-0 ">
            <li>
              <a className="hover:underline me-4 md:me-6">
                Políticas de Privacidad
              </a>
            </li>
            <li>
              <a className="hover:underline me-4 md:me-6">Licencias</a>
            </li>
            <li>
              <a className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-rose-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-rose-200 sm:text-center ">
          © 2025 La Vinoteca Wines & Spirits™ . Creación de Adán Franco para la
          escuela SoyHenry. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
