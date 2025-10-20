import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const ProductsPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div>
        <div className="bg-amber-500">
          <div className="relative min-h-92 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414396/allProductsBackImage_a8kg3x.png"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                El Universo de La Vinoteca: ... donde cada Producto encierra una
                Historia✨
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Bienvenido a nuestra colección completa, un tesoro curado para
                elevar tu experiencia de sabor y estilo. Aquí convergen la
                nobleza de nuestros <strong>vinos</strong>, el carácter audaz de
                nuestros <strong>destilados y licores</strong>, y la
                sofisticación de nuestros <strong>accesorios</strong>{" "}
                esenciales. Te invitamos a explorar, a encontrar esa botella que
                se convertirá en el centro de tu próxima celebración o el
                detalle perfecto para transformar tu ritual diario. En{" "}
                <strong> La Vinoteca </strong>, tu próxima gran historia te está
                esperando.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gray-200 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts.map((product) => {
            return <ProductCard product={product} key={product.name} />;
          })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default ProductsPage;
