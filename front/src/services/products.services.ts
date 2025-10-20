/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "@/interfaces/product.interface";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${apiURL}/products`, {
      method: "GET",
    });
    const products: Product[] = await res.json();
    return products;
  } catch (error: any) {
    throw error;
  }
};

export const getProductById = async (idByParam: string) => {
  try {
    const allProducts = await getAllProducts();
    const product = allProducts.find(
      (product) => product.id.toString() === idByParam
    );
    if (!product) {
      throw new Error("No se encontró el producto.");
    }
    return product;
  } catch (error: any) {
    throw error;
  }
};
