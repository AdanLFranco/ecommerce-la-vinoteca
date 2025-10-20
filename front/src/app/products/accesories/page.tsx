import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const AccesoriesPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div className="bg-amber-500">
        <div>
          <div className="relative min-h-96 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414395/accesoriesBackImage_k5r4h8.jpg"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                Accesorios: La Experiencia Completa de Beber 🥂
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Descubre nuestra exclusiva colección de{" "}
                <strong>accesorios</strong>, diseñados para realzar cada bebida
                que disfrutas. Desde elegantes copas y decantadores que liberan
                el aroma de tus vinos, hasta cocteleras profesionales y
                medidores que te permiten crear cócteles perfectos, cada pieza
                ha sido seleccionada por su calidad y funcionalidad. Nuestros
                accesorios son el complemento ideal para cualquier ocasión, ya
                sea que sirvas un espumoso para celebrar, un whisky para
                relajarte o un trago exótico para compartir. Equípate con las
                herramientas que necesitas para elevar el arte de servir y
                disfrutar.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gray-200 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts
            .filter((product) => product.categoryId === 5)
            .map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default AccesoriesPage;
