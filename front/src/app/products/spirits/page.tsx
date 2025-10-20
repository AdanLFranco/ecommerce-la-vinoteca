import React from "react";
import { getAllProducts } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import Image from "next/image";

const SpiritsPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div>
      <div className="bg-amber-500">
        <div>
          <div className="relative min-h-92 overflow-hidden">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={
                "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759414398/spiritsBackImage_snxhln.jpg"
              }
              alt="backPicture"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-950/75"></div>

            <div className="relative z-10 py-8 px-24 flex flex-col gap-5 items-center justify-center">
              <h3 className="text-3xl font-bold text-center py-3 text-amber-300">
                Destilados y Licores: El Arte de la Destilación 🥃
              </h3>
              <p className="font-libre-franklin text-2xl text-gray-200 text-center">
                Adéntrate en el universo de los{" "}
                <strong>destilados y licores</strong>, donde la tradición se
                encuentra con la innovación. Nuestra colección te invita a
                explorar una amplia gama de sabores, desde el carácter
                inconfundible del <strong>whisky</strong> y la versatilidad del{" "}
                <strong>ron</strong>, hasta la pureza del <strong>vodka</strong>{" "}
                y la complejidad del <strong>gin</strong>. Cada botella es un
                viaje sensorial, con perfiles que van desde notas ahumadas y
                terrosas hasta toques dulces y afrutados. Ya sea que busques el
                ingrediente principal para un cóctel clásico o un trago para
                disfrutar solo, nuestra selección de destilados y licores es el
                complemento perfecto para cualquier ocasión.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-200 flex flex-wrap p-4 gap-4 flex-row justify-center  border-neutral-600 border-y-1 shadow-2xs">
          {allProducts
            .filter((product) => product.categoryId === 4)
            .map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })}
        </section>
      </div>
      <CategoryMenuBar />
    </div>
  );
};

export default SpiritsPage;
