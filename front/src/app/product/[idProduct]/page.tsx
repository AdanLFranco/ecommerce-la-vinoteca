"use client";
import CategoryMenuBar from "@/components/CategoryMenuBar";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Product } from "@/interfaces/product.interface";
import { getProductById } from "@/services/products.services";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "@/components/Loader";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();

  const [productdata, setProductdata] = useState<Product>();
  const { addToCart } = useCart();
  const { dataUser } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const product = await getProductById(params.idProduct as string);

        setProductdata(product);
        setIsLoading(false);
      } catch (error) {
        console.log("error al cargar producto", error);
        Swal.fire({
          title: "Error",
          text: "No se ha podido encontrar el producto o producto inexistente.",
          imageUrl:
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424481/wrongAlertImage_kn3ybt.avif",
          imageWidth: 400,
          imageHeight: 230,
          imageAlt: "Custom image",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#930e28",
        }).then(() => {
          router.replace("/products");
        });
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [params.idProduct, router]);

  const handleAddCart = () => {
    if (!dataUser) {
      Swal.fire({
        title: "¡No estás logueado!",
        text: "Por favor, inicia sesión para poder agregar productos al carrito.",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
      return;
    }
    if (!productdata) return;

    const added = addToCart(productdata);
    if (added) {
      Swal.fire({
        title: "Producto agregado!",
        text: "El producto ha sido añadido a tu carrito de compras.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
    } else {
      Swal.fire({
        title: "Producto duplicado",
        text: "Este producto ya existe en tu carrito. No puedes agregarlo 2 veces",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className=" bg-gray-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className=" w-220 rounded border-1 bg-gray-100 shadow-xl p-10  mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center ">
              <div className="w-full md:w-1/2 px-5 mb-10 md:mb-0">
                <Image
                  src={productdata?.image || "/fallback.webp"}
                  alt="productImage"
                  height={300}
                  width={300}
                  className="h-96 w-auto"
                />
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {productdata?.name}
                  </h1>
                  <p className="text-sm">{productdata?.description}</p>
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {productdata?.price}
                    </span>
                    <span className="text-xl pl-5 leading-none align-baseline">
                      (Stock: {productdata?.stock})
                    </span>
                  </div>
                  <div className="inline-block align-bottom pt-5">
                    <button
                      type="button"
                      className="text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
                      onClick={handleAddCart}
                    >
                      <svg
                        className="w-3.5 h-3.5 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21"
                      >
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CategoryMenuBar />
      </div>
    </>
  );
}
