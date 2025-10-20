"use client";

import { Product } from "@/interfaces/product.interface";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => boolean;
  removeFromCart: (productId: number) => void;

  clearCart: () => void;
  getIdItems: () => number[];
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => false,
  removeFromCart: () => {},

  clearCart: () => {},
  getIdItems: () => [],
  getTotal: () => 0,
  getItemCount: () => 0,
});

interface CartProviderProps {
  children: React.ReactElement;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth();

  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    if (!dataUser) {
      // alert("Debes estar logueado para agregar items");
      return false;
    }

    const productExist = cartItems.some((item) => item.id === product.id);
    if (productExist) {
      // alert( "Éste producto ya se encuentra en el carrito, no puedes agregarlo 2 veces");
      return false;
    }
    setCartItems((prevItems) => [...prevItems, product]);
    return true;
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const getItemCount = () => {
    return cartItems.length;
  };
  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("cart");
    }
  };
  const getIdItems = () => {
    return cartItems.map((item) => item.id);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotal,
        clearCart,
        getItemCount,
        getIdItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  return context;
};
