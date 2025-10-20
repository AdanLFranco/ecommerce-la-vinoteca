import { Product } from "@/interfaces/product.interface";
import Image from "next/image";

interface CardProps {
  product: Product;
}

const ProductCard = ({ product }: CardProps) => {
  return (
    <div
      key={product.id}
      className="w-74 max-w-sm bg-gray-50 border border-gray-400 rounded-lg shadow-sm pt-4 flex flex-col justify-between"
    >
      <a href={`/product/${product.id}`} className="flex justify-center">
        <Image
          height={100}
          width={150}
          src={product.image}
          alt={`Imagen de producto ${product.name}`}
          className="h-40 w-auto"
        />
      </a>
      <div className="px-5 pb-5">
        <p className="text-xl font-bold tracking-tight  text-gray-900 ">
          {product.name}
        </p>

        <div className="flex items-center justify-between pt-3">
          <p className="text-3xl font-extrabold text-gray-900">
            ${product.price}
          </p>
          <a href={`/product/${product.id}`}>
            <button className="inline-flex justify-end w-40 items-center px-3 py-2.5 text-sm font-semibold  text-center rounded-lg text-white bg-rose-900 hover:bg-rose-700 transition-colors focus:ring-4 focus:outline-none focus:ring-rose-200">
              Ver Información
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
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
