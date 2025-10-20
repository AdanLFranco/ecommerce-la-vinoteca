# 🍷 La Vinoteca | E-commerce Frontend Avanzado

[![Demo Online](https://img.shields.io/badge/Demo-Ver%20Aplicaci%C3%B3n-blue)]([AQUÍ VA EL LINK DE LA DEMO DESPLEGADA])
[![GitHub](https://img.shields.io/badge/Repositorio-Frontend-gray)]([AQUÍ VA EL LINK DE TU REPOSITORIO])

Este proyecto es una aplicación e-commerce de venta de bebidas, desarrollada como parte de mi especialización. Se centra en la implementación de una arquitectura Frontend robusta, segura y escalable con React y Next.js.

## 🛠️ Tecnologías Utilizadas

* **Framework:** Next.js (React)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS
* **Validación y Formularios:** Formik y Yup
* **Gestión de Estado:** React Context
* **Integraciones:** JWT (para autenticación), PostgreSQL (a través de Backend), Cloudinary (para imágenes).

 ## ✨ Características Frontend

* **Autenticación Segura (JWT):** Gestión del token JWT (generado por el backend) en el cliente para mantener la sesión y proteger rutas.
* **Control de Acceso (Renderizado Condicional):** La `NavBar` y las rutas críticas (`/dashboard`, `/carrito`) se renderizan o protegen únicamente para usuarios autenticados.
* **Lógica de Negocio Compleja:** Implementación completa del **Carrito de Compras** y gestión de la sesión de usuario utilizando React Context.
* **Manejo de Formularios y Errores:** Validación de esquemas rigurosa para Login y Registro con Formik y Yup. Los mensajes de éxito/error de la API se gestionan con **SweetAlert**.

* ## 🚀 Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://www.youtube.com/watch?v=dnxdIzF8p3k](https://www.youtube.com/watch?v=dnxdIzF8p3k)
    cd la-vinoteca-frontend
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install  # o yarn install
    ```
3.  **Configurar Variables de Entorno:**
    Crea un archivo llamado `.env.local` en la raíz del proyecto y añade las variables necesarias (ej: URL de la API del backend de la escuela, claves de Cloudinary, etc.).
    ```
    # Ejemplo de archivo .env.local
    NEXT_PUBLIC_API_URL=http://[url-del-backend-de-la-escuela]/api/
    # Otras variables necesarias...
    ```
4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev  # o yarn dev
    ```
    El proyecto estará disponible en `.........`.

    
