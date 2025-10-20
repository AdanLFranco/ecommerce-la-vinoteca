import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const ChampagnesPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div className="bg-amber-500">
        <div>
          <div className="relative min-h-88 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414396/champagnesBackImage_oroa0r.jpg"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                Vinos Espumosos: Celebración en Cada Burbuja 🥂
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Descubre la magia de los <strong>vinos espumosos</strong>, la
                bebida por excelencia para celebrar los momentos más especiales.
                Nuestra colección captura la alegría en cada botella, con una
                exquisita selección de <strong>Champagne</strong>, el vibrante{" "}
                <strong>Prosecco</strong>, y el festivo <strong>Cava</strong>.
                Estos vinos son una explosión de frescura y aromas, con notas
                que van desde la manzana verde y los cítricos hasta la brioche y
                los frutos secos. Ya sea que brindes por un logro o simplemente
                disfrutes de una tarde soleada, un espumoso es siempre la
                elección perfecta para elevar cualquier ocasión.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-200 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts
            .filter((product) => product.categoryId === 3)
            .map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default ChampagnesPage;
