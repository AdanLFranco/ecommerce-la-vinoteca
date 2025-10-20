"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Product } from "@/interfaces/product.interface";

const CartItem = ({ item }: { item: Product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold">{item.name}</h4>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700 font-bold text-sm"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
