import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const RedWinesPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div className="bg-amber-500">
        <div>
          <div className="relative min-h-72 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414397/redwinesBackImage_umhh82.webp"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                Vinos Tintos: Elegancia en cada Copa 🍷
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Adéntrate en el universo de los <strong>vinos tintos</strong>,
                la expresión más pura de la tradición vinícola. Desde la
                robustez de un
                <strong> Malbec</strong> hasta la elegancia de un{" "}
                <strong>Pinot Noir</strong>, cada botella de nuestra selección
                te invita a un viaje de sabor inigualable. Descubre el
                acompañante perfecto para tus momentos especiales y eleva tus
                sentidos con la pasión de una copa de puro deleite.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-300 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts
            .filter((product) => product.categoryId === 1)
            .map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default RedWinesPage;
