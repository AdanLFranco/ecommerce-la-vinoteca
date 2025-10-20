import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-gray-300 flex flex-col items-center justify-center p-5">
      <div className="bg-zinc-100 border-1  flex flex-row items-center gap-5 rounded-lg shadow-md">
        <Image
          src={
            "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759424480/notFoundImage_ghy1bm.webp"
          }
          alt="404Image"
          height={250}
          width={300}
          className="rounded-l-lg"
        />
        <div className="flex flex-col justify-around max-w-88 gap-4">
          <div>
            <h2 className="font-extrabold text-5xl">404</h2>
            <h2 className=" font-extrabold text-3xl">Página no encontrada</h2>
          </div>
          <p className="font-libre-franklin pr-2 text-md">
            No podemos acceder al recurso que estás solicitando. Pero no te
            preocupes, hay cosas interesantes para ver en nuestra página de
            inicio.
          </p>

          <Link
            href="/"
            className="text-white bg-rose-900 hover:bg-rose-800 transition-colors focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 w-36"
          >
            Volver al Home
          </Link>
        </div>
      </div>
    </div>
  );
}
