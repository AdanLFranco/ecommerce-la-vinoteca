import RegisterForm from "@/components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center p-4 bg-gray-300">
      <h3 className="text-4xl p-3 font-sans font-bold">
        Crea tu cuenta y vive una experiencia única de sabor
      </h3>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
