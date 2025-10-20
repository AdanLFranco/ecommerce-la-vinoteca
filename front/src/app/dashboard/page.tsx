"use client";

import OrderList from "@/components/OrderList";
import { useAuth } from "@/context/AuthContext";
import AccessRestricted from "@/components/AccessRestricted";
import Image from "next/image";

const Dashboard = () => {
  const { dataUser } = useAuth();

  if (!dataUser) {
    return <AccessRestricted />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-6 ">
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759603108/dashboardLeftImage_q5t3no.avif"
          }
          alt="imagenPageLeft"
          width={180}
          height={230}
          className="shadow-lg rounded-l-md h-80"
        />
        <section className="bg-gray-50 rounded-xl shadow-lg p-8 w-full max-w-xl mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800 tracking-wide">
              Mi Perfil
            </h3>
          </div>

          <div className="bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-amber-300 rounded-full flex items-center justify-center mb-2">
              <Image
                src={
                  "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759519965/loggedUserAvatar_qdq3m2.png"
                }
                alt="Profile Picture"
                width={88}
                height={88}
                className="rounded-full"
              />
            </div>

            <ul className="w-full text-center space-y-2 text-gray-700">
              <li className="flex justify-between items-center w-full">
                <span className="font-semibold">Nombre Completo:</span>
                <span>{dataUser?.user.name}</span>
              </li>
              <li className="flex justify-between items-center w-full">
                <span className="font-semibold">Dirección:</span>
                <span>{dataUser?.user.address}</span>
              </li>
              <li className="flex justify-between items-center w-full">
                <span className="font-semibold">Correo electrónico:</span>
                <span>{dataUser?.user.email}</span>
              </li>
              <li className="flex justify-between items-center w-full">
                <span className="font-semibold">Teléfono:</span>
                <span>{dataUser?.user.phone}</span>
              </li>
            </ul>
          </div>
        </section>
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759603108/dashboardRightImage_ukdl4g.jpg"
          }
          alt="imagenPageRight"
          width={200}
          height={250}
          className="shadow-lg rounded-r-md"
        />
      </div>
      <OrderList />
    </div>
  );
};
export default Dashboard;
