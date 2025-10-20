import React from "react";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-300  items-center py-5">
      <div className="flex flex-col items-center">
        <h3 className="font-extrabold text-3xl   py-4 pb-8">
          Nuestra historia: de la pasión por el vino a tu copa ...
        </h3>
        <div className="flex flex-row items-center gap-5">
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759604328/aboutLeftImage_ydkmio.jpg"
            }
            alt="imagenPageLeft"
            width={200}
            height={250}
            className="shadow-lg rounded-l-md"
          />
          <p className="max-w-120 text-center text-xl text-red-100 font-libre-franklin p-5 bg-rose-950 rounded-md">
            <strong className="font-semibold">
              La Vinoteca Wines & Spirits{" "}
            </strong>
            nació de un sueño sencillo: compartir con el mundo el arte de un
            buen maridaje y la alegría de un brindis perfecto. Lo que empezó
            como una aventura entre amigos, se transformó en este espacio, un
            lugar donde cada botella de vino y cada botella de licor es
            seleccionada con una dedicación que nace del corazón. No solo
            vendemos bebidas; ofrecemos una experiencia. Cada producto en
            nuestro catálogo tiene una historia que contar, una que te invita a
            explorar sabores, a descubrir nuevas etiquetas y a crear momentos
            inolvidables. Gracias por permitirnos ser parte de esos momentos.
            <strong className="font-semibold">¡Salúd!</strong>
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759604328/aboutRightImage_fyb0sc.avif"
            }
            alt="imagenPageRight"
            width={250}
            height={300}
            className="shadow-md rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
