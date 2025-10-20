import Link from "next/link";

const links = [
  { name: "Todos los Productos", href: "/products" },
  { name: "Vinos Tintos", href: "/products/redwines" },
  { name: "Vinos Blancos", href: "/products/whitewines" },
  { name: "Espumosos", href: "/products/champagnes" },
  { name: "Espirituosos", href: "/products/spirits" },
  { name: "Accesorios", href: "/products/accesories" },
];

const CategoryMenuBar = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {links.map((link, index) => (
        <div key={link.name} className="flex items-center ">
          <Link
            href={link.href}
            className="mx-2 text-gray-600 hover:text-red-900"
          >
            {link.name}
          </Link>
          {index < links.length - 1 && (
            <div className="h-4 w-px bg-gray-400 mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenuBar;
