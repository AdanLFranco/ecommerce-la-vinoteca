"use client";

import { useAuth } from "@/context/AuthContext";
import { Order } from "@/interfaces/orders.interface";
import { getAllOrders } from "@/services/orders.services";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const OrderList = () => {
  const { dataUser } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!dataUser?.token) {
        setOrders([]);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const ordersResponse = await getAllOrders(dataUser.token);
        setOrders(ordersResponse);
      } catch (err) {
        console.error("Error al traer informacion", err);
        setError("Ups!! No pudimos cargar esta informacion.");
        setOrders([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [dataUser?.token]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-10 w-full min-h-40">
        <Loader />
      </div>
    );
  if (error) return <p className="text-red-600">{error}</p>;
  if (orders.length === 0)
    return (
      <p className="text-xl font-semibold text-rose-50 pt-5">
        No tienes órdenes todavía...
      </p>
    );

  return (
    <div className="w-full mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-100">Mis órdenes</h2>
      <ul className="space-y-3">
        {orders.map((order) => (
          <li
            key={order.id}
            className="p-4 bg-gray-200 rounded-lg shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">Orden #{order.id}</p>
              <p className="text-sm text-gray-600">
                Estado: {order.status || "pendiente"}
              </p>
            </div>

            <p className="font-bold">
              Total: $
              {order.products
                .reduce((sum, product) => sum + product.price, 0)
                .toFixed(2)}
            </p>
            <div className=" bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Productos:</h3>
              <ul className="space-y-2">
                {order.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between text-sm text-gray-800"
                  >
                    <span>- {product.name}</span>
                    <span className="pl-4">${product.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
