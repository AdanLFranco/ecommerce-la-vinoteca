import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <div className="relative h-160 overflow-hidden">
      <Image
        fill
        style={{ objectFit: "cover" }}
        src={
          "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759415285/heroBackImage_jjqjxh.webp"
        }
        alt="backPicture"
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-rose-950/85"></div>

      <div className="relative z-10 flex flex-row items-center justify-center pl-4 pr-12">
        <div className="pt-16 pb-24 sm:pt-8 sm:pb-16 lg:pt-32 lg:pb-48 flex justify-center">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className=" text-4xl font-bold tracking-tight text-gray-100 drop-shadow-red-950 sm:text-6xl">
                Encuentra la calidad a un precio inigualable
              </h1>
              <p className="mt-4 text-3xl text-amber-100 pb-4 font-semibold">
                Accede a nuestro catálogo de productos y encuentra a tus
                favoritos
              </p>
              <Link
                href="/products"
                className="flex items-center rounded-md py-3 px-4 w-38 bg-rose-800 hover:bg-rose-700 border border-transparent text-center text-sm text-white transition-all  focus:ring-4 focus:outline-none focus:ring-rose-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Ver Productos
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-10  shadow-md">
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759415040/heroMainPicture_g2ums3.webp"
            }
            alt="imagen del hero"
            width={500}
            height={650}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
