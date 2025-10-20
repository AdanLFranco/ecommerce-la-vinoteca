"use client";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/services/orders.services";
import Image from "next/image";
import AccessRestricted from "@/components/AccessRestricted";
import Link from "next/link";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    cartItems,
    clearCart,
    getIdItems,
    getItemCount,
    getTotal,
    removeFromCart,
  } = useCart();

  const { dataUser } = useAuth();

  if (!dataUser) {
    return <AccessRestricted />;
  }

  const handleCheckout = async () => {
    try {
      await createOrder(getIdItems(), dataUser?.token);
      clearCart();
      Swal.fire({
        title: "Compra realizada!",
        text: "Tu orden se ha generado de manera exitosa.",
        imageUrl:
          "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759532508/compraExitosa_iddcxu.webp",
        imageWidth: 180,
        imageHeight: 250,
        imageAlt: "Custom image",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
    } catch (error) {
      console.log("Error en la compra", error);
      Swal.fire({
        title: "Error",
        text: "No se ha podido realizar ésta compra.",
        imageUrl:
          "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759532508/compraFallida_fjzsay.avif",
        imageWidth: 180,
        imageHeight: 250,
        imageAlt: "Custom image",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
    }
  };

  return (
    <div className="bg-gray-200 min-h-100">
      <div className="flex flex-col md:flex-row gap-8 p-6">
        <div id="leftColumn" className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Mi carrito</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">No hay productos en el carrito.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image || "/fallback.png"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-700">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          id="RightColumn"
          className="w-full md:w-1/3 bg-amber-300 p-6 rounded-lg shadow-md border-1"
        >
          <h3 className="text-xl font-bold mb-4">Resumen de mi pedido</h3>
          <p className="mb-2">Cantidad de productos: {getItemCount()}</p>
          <p className="mb-4 font-semibold text-3xl">
            Total: ${getTotal().toFixed(2)}{" "}
            {getTotal() > 100 && (
              <span className="text-gray-100 text-xl text-shadow-md">
                <br /> ¡Califica para envío gratis!
              </span>
            )}
          </p>
          <div className=" flex flex-col items-center font-semibold text-sm">
            <Link
              href={"/products"}
              className=" items-center bg-rose-900 hover:bg-rose-700  text-red-100 py-2 px-4 rounded-lg"
            >
              seguir Comprando
            </Link>
          </div>
          <div className="flex flex-col items-center font-semibold text-sm">
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className=" cursor-pointer mt-4 bg-green-700 hover:bg-green-500 disabled:opacity-50 text-white py-2 px-4 rounded-lg"
            >
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
