import CategoryCard from "./CategoryCard";

export const CategoryCardContainer = () => {
  return (
    <>
      <h3 className="font-sans text-4xl font-bold text-center p-10 bg-gray-900 text-amber-50">
        Más que un producto, una historia. Descubre la tuya en nuestras
        categorías.
      </h3>
      <div className="bg-gray-400  flex flex-wrap px-7 py-5 gap-3  justify-center ">
        <CategoryCard
          categoryImage="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759500502/vinoTinto_wq43h8.webp"
          categoryTitle="Nuestros Tintos"
          categoryDescription="Descubre en nuestra selecta variedad de vinos tintos, el vino favorito para que tus momentos sean especiales."
          categoryURL="/products/redwines"
        />
        <CategoryCard
          categoryImage="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759500499/vinoBlanco_hvjn37.webp"
          categoryTitle="Nuestros Blancos"
          categoryDescription="Deléitate con nuestra colección de vinos blancos, frescos y elegantes, ideales para maridar momentos únicos y sabores inolvidables."
          categoryURL="/products/whitewines"
        />
        <CategoryCard
          categoryImage="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759500501/vinoEspumoso_rtiksh.webp"
          categoryTitle="Nuestros Espumosos"
          categoryDescription="Explora nuestra cuidada selección de champagnes premium y encuentra el acompañamiento perfecto para tus celebraciones más memorables."
          categoryURL="/products/champagnes"
        />

        <CategoryCard
          categoryImage="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759500498/espirituoso_i1ngda.webp"
          categoryTitle="Nuestros Espirituosos"
          categoryDescription="¿Buscas el toque perfecto para tu próxima celebración? Descubre nuestra selección de espirituosos, pensada para elevar cada brindis."
          categoryURL="/products/spirits"
        />

        <CategoryCard
          categoryImage="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759500497/accesoriosBar_e3zr9m.webp"
          categoryTitle="Nuestros Accesorios"
          categoryDescription="Los detalles marcan la diferencia. Explora nuestra colección de accesorios y encuentra la pieza clave para completar tu estilo."
          categoryURL="/products/accesories"
        />
      </div>
    </>
  );
};
export default CategoryCardContainer;
