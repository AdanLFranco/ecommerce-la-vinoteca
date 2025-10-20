"use client";
import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { dataUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (dataUser) {
      router.replace("/");
    }
  }, [dataUser, router]);

  return (
    <div className="flex flex-col w-screen items-center justify-center p-4 bg-gray-300">
      <h3 className="text-3xl font-sans font-bold p-5">
        Únete al club. Tus bebidas favoritas están a un solo click ...
      </h3>

      <div className="p-5 flex flex-row">
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759420793/loginFormLeftImage_l0p0px.jpg"
          }
          alt="loginLeftImage"
          width={180}
          height={178}
          className="h-98
         w-auto rounded-l-lg "
        />
        <LoginForm />
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759420794/loginFormRightImage_a9fjxo.jpg"
          }
          alt="loginRightImage"
          width={180}
          height={178}
          className="h-98 w-auto rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
