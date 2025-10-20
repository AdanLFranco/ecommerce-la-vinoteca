import Link from "next/link";
import React from "react";
import { PATHROUTES } from "@/helpers/navItems";
import Image from "next/image";

const AccessRestricted = () => {
  return (
    <div>
      <div className="bg-gray-300 flex flex-row items-center justify-center p-10">
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759499681/restrictedPageImage_bpeikx.jpg"
          }
          alt="locked image"
          width={450}
          height={600}
          className="h-88 w-auto rounded-l-lg"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-center p-8 bg-gray-50 rounded-r-lg shadow-xl h-88 max-w-lg">
            <h2 className="text-3xl font-extrabold text-rose-900 mb-4">
              Acceso Exclusivo para Miembros 🔒
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Ésta página es solo para usuarios registrados y que hayan iniciado
              sesión. Únete a nuestro club para ver tus productos y disfrutar de
              beneficios exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={PATHROUTES.LOGIN}>
                <button className="bg-rose-900 text-white py-2 px-6 rounded-lg text-sm font-semibold hover:bg-rose-700 transition-colors">
                  Inicia Sesión
                </button>
              </Link>
              <h3>O</h3>
              <Link href={PATHROUTES.REGISTER}>
                <button className="bg-amber-900 text-white py-2 px-6 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors">
                  Regístrate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessRestricted;
