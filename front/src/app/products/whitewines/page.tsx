import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const WhiteWinesPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div className="bg-amber-500">
        <div>
          <div className="relative min-h-80 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414397/whitewinesBackImage_m3rrb3.jpg"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                Vinos Blancos: Frescura y Vitalidad 🥂
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Descubre la luminosidad y frescura en cada botella de nuestra
                selección de <strong>vinos blancos</strong>. Desde la vibrante
                acidez de un <strong>Sauvignon Blanc</strong> hasta la elegancia
                de un
                <strong> Chardonnay</strong>, cada vino captura la esencia de su
                terroir. Nuestros vinos blancos son el acompañante perfecto para
                una tarde soleada o una cena ligera. Déjate seducir por sus
                aromas a frutas, flores y cítricos, y eleva tus sentidos con una
                copa de pura vitalidad.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gray-200 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts
            .filter((product) => product.categoryId === 2)
            .map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default WhiteWinesPage;
