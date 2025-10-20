"use client";
import {
  LoggedInNavItems,
  GuestNavItems,
  PATHROUTES,
} from "@/helpers/navItems";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const { dataUser, logout } = useAuth();

  const currentNavItems = dataUser ? LoggedInNavItems : GuestNavItems;

  return (
    <nav>
      <div className="bg-rose-950 p-9 text-center flex flex-row items-center justify-between">
        <section>
          <Logo />
        </section>
        <div className=" text-red-100">
          {currentNavItems.map((navigationItem) => {
            return (
              <Link
                href={navigationItem.route}
                key={navigationItem.name}
                prefetch={false}
                className="text-2xl px-4"
              >
                {navigationItem.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-rose-100 text-gray-700  font-libre-franklin font-semibold flex flex-row items-center justify-end py-2 pr-13 gap-5">
        {dataUser ? (
          <Image
            src={
              "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759519965/loggedUserAvatar_qdq3m2.png"
            }
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <Image
            src="https://res.cloudinary.com/dtbpi3bic/image/upload/v1759520155/guestUserAvatar_vf3qiw.webp"
            alt="Guest Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <h3>Hola, {dataUser ? dataUser.user.name : " Usuario Invitado"}</h3>
        {dataUser ? (
          <Link href={""} onClick={() => logout()}>
            {" "}
            Cerrar sesión
          </Link>
        ) : (
          <Link href={PATHROUTES.LOGIN}>Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
