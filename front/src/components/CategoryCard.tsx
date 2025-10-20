import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  categoryImage: string;
  categoryTitle: string;
  categoryDescription: string;
  categoryURL: string;
}

const CategoryCard = (categoria: CategoryProps) => {
  return (
    <div>
      <div className="flex flex-col  items-center h-64 w-96 bg-gray-200 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-50">
        <Image
          height={230}
          width={200}
          src={categoria.categoryImage}
          alt="Imagen de la categoría"
          className="h-64 w-44  rounded-l-lg"
        />

        <div className="flex flex-col justify-between p-2 leading-normal gap-1">
          <h5 className="mb-1 text-lg font-extrabold tracking-tight text-gray-900">
            {categoria.categoryTitle}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {categoria.categoryDescription}
          </p>
          <div className="flex flex-row justify-end">
            <Link
              href={categoria.categoryURL}
              className="inline-flex justify-end w-44 items-center px-3 py-2.5 text-sm font-medium text-center rounded-lg text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 transition-colors focus:outline-none focus:ring-rose-200"
            >
              Explorar Categoría
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
