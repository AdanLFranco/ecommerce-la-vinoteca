import React from "react";
import Image from "next/image";

const OurServicesPage = () => {
  return (
    <div className="bg-gray-300 items-center py-5 ">
      <div className="flex flex-col items-center">
        <h3 className="font-extrabold text-3xl py-4 pb-8">
          Nuestros servicios: del catálogo a tu puerta...
        </h3>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759516554/ourservicesTopImage_cxzqgo.avif"
            }
            alt="imagenServicios1"
            width={550}
            height={250}
            className="shadow-md rounded-t-md"
          />
          <p className="max-w-200 text-center text-xl text-red-100 font-libre-franklin p-5 bg-rose-950 rounded-md">
            En{" "}
            <strong className="font-semibold">
              La Vinoteca Wines & Spirits
            </strong>
            , nuestra misión es enriquecer cada ocasión. Te ofrecemos un
            catálogo selecto con una amplia variedad de bebidas, cada una con
            información detallada para que explores sus orígenes y notas de
            cata. Te invitamos a{" "}
            <strong className="font-semibold">registrarte y loguearte</strong>{" "}
            para desbloquear un mundo de beneficios exclusivos. Al unirte a
            nuestro{" "}
            <strong className="font-semibold">Club de La Vinoteca</strong>,
            accederás a precios especiales, promociones increíbles y ofertas
            personalizadas. Para que disfrutes sin límites, ofrecemos{" "}
            <strong className="font-semibold">
              envíos gratis a todo el país
            </strong>
            , llevando la calidad directamente a tu puerta.
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759516553/ourservicesBottomImage_dbhjtv.webp"
            }
            alt="imagenServicios2"
            width={550}
            height={250}
            className="shadow-md rounded-b-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
