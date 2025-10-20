import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //esto lo estamos haciendo para cargar imagenes externas a nuestra DB , no es lo ideal
  // pero lo estamos usando ahora en un comienzo, está prohibido por temas de seguridad
  // Mas adelante vamos a querer cargar imagenes solo de nuestro servidor

  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
