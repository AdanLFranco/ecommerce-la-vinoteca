export enum PATHROUTES {
  HOME = "/",
  PRODUCTS = "/products",
  ABOUT = "/about",
  OURSERVICES = "/ourservices",
  CART = "/cart",
  DASHBOARD = "/dashboard",
  LOGIN = "/login",
  REGISTER = "/register",
}

const NavItems = [
  {
    name: "Home",
    route: PATHROUTES.HOME,
    // icon: <Image/> si lo tuviera
  },
  {
    name: "Productos",
    route: PATHROUTES.PRODUCTS,
  },
  {
    name: "About",
    route: PATHROUTES.ABOUT,
  },
  {
    name: "Servicios",
    route: PATHROUTES.OURSERVICES,
  },
  {
    name: "Cart",
    route: PATHROUTES.CART,
  },
  {
    name: "Dashboard",
    route: PATHROUTES.DASHBOARD,
  },
];
export const GuestNavItems = NavItems.filter(
  (item) =>
    item.route === PATHROUTES.HOME ||
    item.route === PATHROUTES.PRODUCTS ||
    item.route === PATHROUTES.ABOUT ||
    item.route === PATHROUTES.OURSERVICES
);

export const LoggedInNavItems = NavItems.filter(
  (item) =>
    item.route === PATHROUTES.HOME ||
    item.route === PATHROUTES.PRODUCTS ||
    item.route === PATHROUTES.CART ||
    item.route === PATHROUTES.DASHBOARD
);
