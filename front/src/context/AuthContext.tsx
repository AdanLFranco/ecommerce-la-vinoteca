"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "./CartContext";

interface AuthContextProps {
  dataUser: userSessionInterface | null;
  setDataUser: (dataUser: userSessionInterface | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<userSessionInterface | null>(null);
  const { clearCart } = useCart();

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataUser = localStorage.getItem("userSession");
      if (dataUser) {
        setDataUser(JSON.parse(dataUser));
      }
    }
  }, []);

  const logout = () => {
    setDataUser(null);
    clearCart();
    if (typeof window !== "undefined" && window.localStorage) {
      Swal.fire({
        title: "Cerraste tu sesión en La Vinoteca!!",
        text: "Usuario ha cerrado sesión de manera exitosa.",
        imageUrl:
          "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424479/goodAlertImage_uooc2o.avif",
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: "Custom image",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#930e28",
      });
      localStorage.removeItem("userSession");
    }
  };
  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
