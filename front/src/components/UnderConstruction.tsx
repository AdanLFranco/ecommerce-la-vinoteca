import React from "react";
import Image from "next/image";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div className="bg-gray-100 border-1 flex flex-col sm:flex-row items-center gap-5 p-5 rounded-lg shadow-xl max-w-4xl">
      <Image
        src={
          "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759534219/enConstruccion_rrvfsv.webp"
        }
        alt="Página en Construcción"
        height={280}
        width={330}
        className="rounded-lg sm:rounded-l-lg sm:rounded-r-none"
      />

      <div className="flex flex-col justify-around gap-4 text-center sm:text-left">
        <div>
          <h2 className="font-extrabold text-5xl text-rose-900">
            Página no disponible
          </h2>
          <h2 className="font-extrabold text-3xl text-gray-800 py-2">
            Estamos trabajando en ella
          </h2>
        </div>

        <p className="font-libre-franklin pr-2 text-md text-gray-700">
          Esta sección de nuestro sitio está actualmente bajo construcción.
          Vuelve pronto para descubrir su contenido.
        </p>

        <div className="mt-2 sm:mt-0 flex justify-center sm:justify-start">
          <Link
            href="/"
            className="text-white bg-rose-900 hover:bg-rose-800 transition-colors focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 w-36"
          >
            Volver al Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
