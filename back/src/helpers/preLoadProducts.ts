import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Bodega Catena Zapata - Malbec Reserva",
    price: 25,
    description:
      "Un vino argentino con cuerpo, notas de ciruela, cuero y un final largo. Ideal para carnes rojas y quesos curados.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367558/id1_xzy1qv.jpg",
    categoryId: 1,
    stock: 45,
  },
  {
    name: "Robert Mondavi - Cabernet Sauvignon Napa Valley",
    price: 50,
    description:
      "Cabernet robusto y elegante de California, con aromas de frutas negras, roble y especias.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367558/id2_xc2hhh.jpg",
    categoryId: 1,
    stock: 28,
  },
  {
    name: "Domaine Faiveley - Pinot Noir Bourgogne",
    price: 39,
    description:
      "Delicado y sofisticado, este Pinot Noir francés ofrece notas de cereza, frambuesa y un toque terroso.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367558/id3_ppeacw.webp",
    categoryId: 1,
    stock: 62,
  },
  {
    name: "Marqués de Cáceres - Tempranillo Rioja",
    price: 22,
    description:
      "Vino español clásico, con sabores a vainilla, cuero y frutas rojas maduras.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367558/id4_rhchp8.webp",
    categoryId: 1,
    stock: 110,
  },
  {
    name: "E. Guigal - Syrah del Ródano",
    price: 30,
    description:
      "Complejo y especiado, este Syrah francés presenta notas de mora, pimienta negra y aceituna negra.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367559/id5_fgpvfm.jpg",
    categoryId: 1,
    stock: 63,
  },
  {
    name: "Ravenswood - Zinfandel Sonoma",
    price: 28,
    description:
      "Zinfandel californiano afrutado con notas de mermelada, especias y un toque de roble tostado.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367559/id6_htgl58.webp",
    categoryId: 1,
    stock: 23,
  },
  {
    name: "Concha y Toro - Carmenere Chileno",
    price: 19,
    description:
      "Carmenere suave con notas de pimiento rojo, mora y chocolate amargo. Perfecto para pastas.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367559/id7_e5hzye.webp",
    categoryId: 1,
    stock: 145,
  },
  {
    name: "Beringer - Merlot Californiano",
    price: 22,
    description:
      "Merlot suave y redondo, con aromas de cereza negra, vainilla y tabaco dulce.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367559/id8_hynjzm.webp",
    categoryId: 1,
    stock: 112,
  },
  {
    name: "Bouza - Tannat Uruguayo",
    price: 27,
    description:
      "Potente y tánico, con notas de moras, café tostado y cuero. Un vino para paladares intensos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367560/id9_lgoeps.jpg",
    categoryId: 1,
    stock: 110,
  },
  {
    name: "Feudi di San Marzano - Primitivo di Manduria",
    price: 32,
    description:
      "Vino italiano rico y especiado, con sabor a frutos rojos maduros y un toque de chocolate.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367561/id10_zggma9.jpg",
    categoryId: 1,
    stock: 30,
  },
  {
    name: "Marchesi di Barolo - Barbera d'Asti",
    price: 24,
    description:
      "Ligero y ácido, este vino del Piamonte italiano ofrece frescura y notas de cereza roja.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367561/id11_ndmsyd.webp",
    categoryId: 1,
    stock: 48,
  },
  {
    name: "Bodegas Borsao - Garnacha Española",
    price: 20,
    description:
      "Vino joven y jugoso, con notas de frambuesa, fresa silvestre y un final ligeramente picante.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367562/id12_q9v0jw.png",
    categoryId: 1,
    stock: 18,
  },
  {
    name: "Juan Gil - Monastrell Jumilla",
    price: 25,
    description:
      "Español de cuerpo medio, con notas de ciruela negra, hierbas secas y pimienta.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367562/id13_lcowcr.jpg",
    categoryId: 1,
    stock: 40,
  },
  {
    name: "Antinori - Sangiovese Toscana",
    price: 34,
    description:
      "Clásico toscano con sabor a cereza negra, tomillo seco y taninos firmes. Ideal para pastas con salsa.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367562/id14_au3spw.webp",
    categoryId: 1,
    stock: 92,
  },
  {
    name: "Produttori del Barbaresco - Nebbiolo Langhe",
    price: 44,
    description:
      "Elegante y estructurado, con aromas de rosas secas, cuero y cereza. Alta acidez y taninos marcados.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367563/id15_mlyk84.jpg",
    categoryId: 1,
    stock: 61,
  },
  {
    name: "Quinta do Crasto - Touriga Nacional Douro",
    price: 29,
    description:
      "Portugués floral y concentrado, con sabores a ciruela, especias dulces y violetas.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367563/id16_bfdysd.jpg",
    categoryId: 1,
    stock: 74,
  },
  {
    name: "Luigi Bosca - Petit Verdot Mendoza",
    price: 26,
    description:
      "Argentino intenso con notas de mora, café y un final largo con taninos firmes.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367565/id17_bp7rjp.png",
    categoryId: 1,
    stock: 105,
  },

  {
    name: "Dominio de Tares - Mencía Bierzo",
    price: 30,
    description:
      "Delicado y aromático, con notas de violetas, frutas rojas y un toque mineral.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367566/id18_c9py2e.png",
    categoryId: 1,
    stock: 21,
  },

  {
    name: "Catena Zapata - Chardonnay Adrianna Vineyard",
    price: 45,
    description:
      "Un Chardonnay de gran altitud de Mendoza, Argentina, con notas de manzana verde, cítricos y toques de vainilla y roble. Un vino complejo y mineral.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367565/id19_zp7zbr.webp",
    categoryId: 2,
    stock: 78,
  },
  {
    name: "Cloudy Bay - Sauvignon Blanc Marlborough",
    price: 38,
    description:
      "El Sauvignon Blanc más famoso de Nueva Zelanda. Intenso y vibrante, con aromas de fruta de la pasión, hierba recién cortada y un final cítrico.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367566/id20_e3sj3g.webp",
    categoryId: 2,
    stock: 35,
  },
  {
    name: "Stellenbosch - Chenin Blanc",
    price: 26,
    description:
      "Un Chenin Blanc de Sudáfrica, con aromas de melón, pera y un toque de miel. Es fresco y versátil, ideal para maridar con mariscos y pollo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367566/id21_livlig.png",
    categoryId: 2,
    stock: 62,
  },
  {
    name: "Viña Leyda - Sauvignon Blanc Leyda Valley",
    price: 24,
    description:
      "Un vino chileno de clima frío con notas salinas y minerales. Ofrece sabores de pomelo, lima y espárrago. Perfecto para ceviches y pescados.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367567/id22_sqyadr.webp",
    categoryId: 2,
    stock: 142,
  },
  {
    name: "Bouza - Albariño",
    price: 29,
    description:
      "Este Albariño uruguayo es fresco y vibrante, con notas de manzana verde y durazno blanco. Un vino con un toque atlántico perfecto para platos ligeros.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367568/id23_qlbz0s.jpg",
    categoryId: 2,
    stock: 107,
  },
  {
    name: "Familia Zuccardi - Serie A Torrontés",
    price: 21,
    description:
      "Vino blanco aromático de Argentina. Despliega notas florales de jazmín y toques cítricos de naranja y pomelo. Muy refrescante y único.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367568/id24_g6phmo.jpg",
    categoryId: 2,
    stock: 81,
  },
  {
    name: "Robert Mondavi - Fumé Blanc (Sauvignon Blanc)",
    price: 28,
    description:
      "Un Sauvignon Blanc de Napa Valley, California, con notas cítricas, toques de roble sutiles y una acidez refrescante.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367569/id25_th6rm4.png",
    categoryId: 2,
    stock: 29,
  },
  {
    name: "Penfolds - Bin 311 Chardonnay",
    price: 55,
    description:
      "Un elegante Chardonnay australiano. Combina frutas de hueso, cítricos y toques cremosos de roble, con una acidez bien integrada y un final persistente.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367570/id26_ejlpqr.webp",
    categoryId: 2,
    stock: 26,
  },
  {
    name: "Rombauer Vineyards - Chardonnay Carneros",
    price: 60,
    description:
      "Chardonnay de California, famoso por su estilo audaz y cremoso. Ofrece intensos aromas de manzana y mantequilla, con un final de vainilla tostada.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367571/id27_axpvs7.png",
    categoryId: 2,
    stock: 35,
  },
  {
    name: "Casas del Bosque - Sauvignon Blanc Reserva",
    price: 23,
    description:
      "Desde el Valle de Casablanca en Chile, este vino es vibrante y fresco, con notas de pomelo, lima y un distintivo toque de hierbas frescas.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367571/id28_eb5dry.webp",
    categoryId: 2,
    stock: 33,
  },
  {
    name: "Babich Wines - Pinot Gris",
    price: 25,
    description:
      "Un Pinot Gris de Nueva Zelanda, que combina dulzura y acidez. Sabores de pera, manzana y especias, con un final cremoso y suave.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367572/id29_iveaj6.webp",
    categoryId: 2,
    stock: 28,
  },

  {
    name: "Moët & Chandon Brut Impérial",
    price: 65,
    description:
      "Un champagne francés icónico y elegante, con notas de manzana verde, cítricos y un toque de bollería fresca. Perfecto para celebraciones.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367572/id30_fw0nge.jpg",
    categoryId: 3,
    stock: 18,
  },
  {
    name: "Freixenet Cordon Negro Brut",
    price: 20,
    description:
      "Un cava español clásico, fresco y ligero. Con aromas de manzana verde y pera, ideal como aperitivo o para acompañar mariscos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367572/id31_sq3ul4.webp",
    categoryId: 3,
    stock: 40,
  },
  {
    name: "La Marca Prosecco",
    price: 22,
    description:
      "Un Prosecco italiano vibrante y afrutado, con notas de cítricos y flores blancas. Ligero y refrescante, excelente para cócteles como el Aperol Spritz.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367573/id32_q2gjzm.jpg",
    categoryId: 3,
    stock: 38,
  },
  {
    name: "Chandon Brut Rosé",
    price: 28,
    description:
      "Un espumoso argentino con un color rosado brillante. Combina notas de frutos rojos como fresa y cereza, con una acidez equilibrada y un final persistente.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367574/id33_ja0qan.jpg",
    categoryId: 3,
    stock: 35,
  },
  {
    name: "Codorníu Cuvée Barcelona 1872",
    price: 24,
    description:
      "Este cava español rinde homenaje al primer espumoso elaborado en España. Ofrece notas de frutos secos y pan tostado, con una burbuja fina y elegante.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367575/id34_gv8m2n.jpg",
    categoryId: 3,
    stock: 26,
  },
  {
    name: "Mionetto Prosecco DOC",
    price: 19,
    description:
      "Un Prosecco italiano joven y fácil de beber, con aromas de miel y manzana. Fresco y con burbujas suaves, perfecto para cualquier ocasión.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367575/id35_fbjwc4.jpg",
    categoryId: 3,
    stock: 25,
  },
  {
    name: "Anna de Codorníu Brut",
    price: 21,
    description:
      "Un cava popular y accesible, con un 70% de uva Chardonnay. Sus sabores cítricos y de manzana verde lo hacen ideal para un brindis casual.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367576/id36_enrh1e.webp",
    categoryId: 3,
    stock: 19,
  },
  {
    name: "Bouvet Ladubay Brut Rosé",
    price: 26,
    description:
      "Un Crémant de la región del Loira en Francia. Elaborado con uvas Cabernet Franc, presenta notas de frutos rojos y un final largo y seco. Una excelente alternativa al champagne.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367576/id37_ylhmnr.png",
    categoryId: 3,
    stock: 30,
  },
  {
    name: "Ferrari Brut Trento DOC",
    price: 35,
    description:
      "Un espumoso italiano de alta calidad, elaborado con el Método Clásico. Ofrece notas de levadura y manzana, con una complejidad similar al champagne.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367577/id38_zadkol.webp",
    categoryId: 3,
    stock: 22,
  },
  {
    name: "Segura Viudas Brut Rosé",
    price: 23,
    description:
      "Un cava rosado español con sabores a cereza y fresa. Es refrescante, con un toque de dulzura, ideal para maridar con postres y ensaladas de frutas.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367578/id39_rhzvrw.webp",
    categoryId: 3,
    stock: 24,
  },
  {
    name: "Nicolas Feuillatte Brut Réserve",
    price: 58,
    description:
      "Un champagne elegante y equilibrado, con una excelente relación calidad-precio. Notas de pera, albaricoque y un final especiado. Una opción segura para cualquier celebración.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367578/id40_vabft6.webp",
    categoryId: 3,
    stock: 19,
  },
  {
    name: "Baron B Extra Brut",
    price: 45,
    description:
      "Un espumoso argentino de alta gama. Su complejidad y cuerpo lo hacen ideal para maridar con platos sofisticados. Presenta notas de tostado y frutos secos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367579/id41_nstuid.jpg",
    categoryId: 3,
    stock: 27,
  },
  {
    name: "Bodega Garzón - Espumoso Extra Brut",
    price: 31,
    description:
      "Desde Uruguay, este espumoso es fresco y mineral, con notas de manzana verde y cítricos. Un vino vibrante que refleja el terruño costero de Garzón.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367579/id42_rt0vwe.webp",
    categoryId: 3,
    stock: 83,
  },
  {
    name: "Veuve Clicquot Brut Yellow Label",
    price: 85,
    description:
      "Un champagne reconocido a nivel mundial, con una burbuja fina y persistente. Destacan sus notas de fruta madura, vainilla y brioche.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367580/id43_divtk8.webp",
    categoryId: 3,
    stock: 25,
  },
  {
    name: "Juvé & Camps Reserva de la Familia",
    price: 38,
    description:
      "Un cava Gran Reserva de alta calidad con 36 meses de crianza. Es complejo y estructurado, con sabores de pan tostado, frutos secos y notas de manzana. Ideal para maridajes.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367581/id44_zgdpr0.webp",
    categoryId: 3,
    stock: 31,
  },

  {
    name: "Johnnie Walker Black Label",
    price: 40,
    description:
      "Un whisky escocés blended con 12 años de añejamiento. Ofrece notas de frutos secos, vainilla, un toque ahumado y un final suave.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367582/id45_ikl5dy.jpg",
    categoryId: 4,
    stock: 50,
  },
  {
    name: "Hendrick's Gin",
    price: 55,
    description:
      "Un gin escocés infundido con pepino y rosa búlgara. Es suave y floral, con un perfil de sabor distintivo que lo hace perfecto para cócteles.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367583/id46_zrrzk1.jpg",
    categoryId: 4,
    stock: 45,
  },
  {
    name: "Fernet Branca",
    price: 30,
    description:
      "Un amaro italiano con un sabor intenso y herbal, perfecto para mezclar con cola. Sus 27 hierbas y especias crean un sabor único y amargo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367583/id47_xbycik.jpg",
    categoryId: 4,
    stock: 80,
  },
  {
    name: "Absolut Vodka",
    price: 25,
    description:
      "Un vodka sueco premium, destilado a partir de trigo de invierno. Se destaca por su sabor puro, sin azúcares añadidos ni impurezas.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367585/id48_sgjz3r.jpg",
    categoryId: 4,
    stock: 65,
  },
  {
    name: "Bacardi Superior",
    price: 20,
    description:
      "Un ron blanco puertorriqueño ligero y suave, ideal para la coctelería. Con notas de vainilla y almendra, es la base del clásico Mojito y Daiquirí.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367584/id49_yl3cnz.jpg",
    categoryId: 4,
    stock: 90,
  },
  {
    name: "Patrón Reposado",
    price: 60,
    description:
      "Un tequila 100% de agave de Jalisco, México, añejado en barricas de roble. Ofrece un equilibrio perfecto entre la frescura del agave y notas de vainilla, roble y caramelo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367585/id50_y8c209.jpg",
    categoryId: 4,
    stock: 38,
  },
  {
    name: "Tanqueray London Dry Gin",
    price: 35,
    description:
      "Un gin inglés clásico, famoso por su sabor fresco a enebro, con un toque de cítricos y especias. La base perfecta para un Gin & Tonic tradicional.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367585/id51_zg5mkh.jpg",
    categoryId: 4,
    stock: 48,
  },
  {
    name: "Jameson Irish Whiskey",
    price: 32,
    description:
      "Un whisky irlandés suave y triple destilado. Con notas de vainilla, nueces y especias, es conocido por su versatilidad y su sabor accesible.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367586/id52_mwwdwt.webp",
    categoryId: 4,
    stock: 55,
  },
  {
    name: "Campari",
    price: 28,
    description:
      "Un licor italiano amargo con un sabor distintivo a cáscara de naranja, hierbas y notas florales. Es el ingrediente clave en el icónico Negroni.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367587/id53_axvsua.webp",
    categoryId: 4,
    stock: 75,
  },
  {
    name: "Grey Goose Vodka",
    price: 45,
    description:
      "Un vodka de lujo de Francia, elaborado con trigo de la región de Picardía. Se distingue por su sabor excepcionalmente suave, con toques de almendra y cítricos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367587/id54_o72fzi.jpg",
    categoryId: 4,
    stock: 42,
  },
  {
    name: "Captain Morgan Original Spiced Rum",
    price: 23,
    description:
      "Un ron especiado caribeño, mezclado con especias naturales y sabores como vainilla y canela. Ideal para mezclar con refrescos de cola.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367587/id55_miowey.jpg",
    categoryId: 4,
    stock: 60,
  },
  {
    name: "Aperol",
    price: 25,
    description:
      "Un aperitivo italiano de color naranja brillante, con un sabor agridulce. Es el ingrediente principal del famoso Aperol Spritz, con notas de naranja, hierbas y un toque de ruibarbo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367588/id56_z3wkif.jpg",
    categoryId: 4,
    stock: 50,
  },
  {
    name: "Don Julio Blanco",
    price: 50,
    description:
      "Un tequila blanco puro y sin añejar. Con notas de agave dulce, cítricos y toques herbales, es la expresión más auténtica del tequila.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367588/id57_tzqfg7.webp",
    categoryId: 4,
    stock: 40,
  },
  {
    name: "Hennessy V.S.O.P Privilège",
    price: 80,
    description:
      "Un coñac francés de la reconocida casa Hennessy. Ofrece una complejidad aromática con notas de madera de roble, vainilla y un toque de canela.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367590/id58_nx8bpk.webp",
    categoryId: 4,
    stock: 35,
  },
  {
    name: "Baileys Original Irish Cream",
    price: 30,
    description:
      "Un licor de crema irlandesa, una mezcla de whisky, crema fresca y cacao. Delicioso solo, con hielo o en postres.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367591/id59_yqlqhf.jpg",
    categoryId: 4,
    stock: 48,
  },
  {
    name: "Jack Daniel's Old No. 7",
    price: 35,
    description:
      "Un Tennessee Whiskey suave y con carácter. Conocido por su proceso de filtrado en carbón de arce, ofrece notas de caramelo, vainilla y un final ahumado.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367592/id60_syneu4.jpg",
    categoryId: 4,
    stock: 55,
  },
  {
    name: "Havana Club Añejo 7 Años",
    price: 38,
    description:
      "Un ron cubano añejo, de sabor complejo y profundo. Con notas de tabaco, frutas tropicales, especias y un final largo y persistente.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367593/id61_zskv81.jpg",
    categoryId: 4,
    stock: 50,
  },
  {
    name: "Belvedere Vodka",
    price: 48,
    description:
      "Un vodka polaco de lujo, elaborado con centeno. Es cremoso y suave, con un sabor limpio y un toque de pimienta blanca.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367593/id62_fdzn6f.jpg",
    categoryId: 4,
    stock: 47,
  },
  {
    name: "The Glenlivet 12 Year Old",
    price: 60,
    description:
      "Un whisky Single Malt de Speyside, Escocia. Suave y frutal, con notas de piña, vainilla y un toque de miel. Un clásico para los amantes del whisky.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367594/id63_rpzx7g.webp",
    categoryId: 4,
    stock: 35,
  },
  {
    name: "Crown Royal",
    price: 32,
    description:
      "Un whisky canadiense blended, famoso por su botella y su distintiva bolsa morada. Ofrece un sabor suave y cremoso, con notas de roble, vainilla y caramelo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367594/id64_cgtade.jpg",
    categoryId: 4,
    stock: 46,
  },

  {
    name: "Sacacorchos de dos tiempos",
    price: 15,
    description:
      "Herramienta profesional con cortacápsulas y palanca de doble bisagra para una apertura de botellas de vino sin esfuerzo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367595/id65_tidlcy.webp",
    categoryId: 5,
    stock: 55,
  },
  {
    name: "Aireador de vino con base",
    price: 25,
    description:
      "Oxigena el vino al instante para liberar su aroma y sabor, mejorando la experiencia de degustación en segundos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367595/id66_as9nz1.webp",
    categoryId: 5,
    stock: 40,
  },
  {
    name: "Set de 4 piedras de whisky",
    price: 18,
    description:
      "Piedras de granito natural que enfrían tu whisky sin diluirlo, manteniendo el sabor original de la bebida.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367597/id67_qgaess.jpg",
    categoryId: 5,
    stock: 85,
  },
  {
    name: "Coctelera de acero inoxidable",
    price: 30,
    description:
      "Kit de coctelería profesional para preparar tus tragos favoritos. Incluye coctelera, medidor jigger y cuchara de bar.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367598/id68_khxo1o.jpg",
    categoryId: 5,
    stock: 35,
  },
  {
    name: "Decantador de vino de cristal",
    price: 45,
    description:
      "Decantador elegante con forma clásica para airear vinos tintos jóvenes y separar sedimentos en vinos añejos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367598/id69_xvrahb.jpg",
    categoryId: 5,
    stock: 25,
  },
  {
    name: "Tapón de botella de vino al vacío",
    price: 12,
    description:
      "Sistema de sellado al vacío que preserva el vino en la botella por más tiempo, evitando la oxidación.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367599/id70_txw5qp.webp",
    categoryId: 5,
    stock: 80,
  },
  {
    name: "Juego de 6 copas de vino tinto",
    price: 55,
    description:
      "Copas de cristal para vino tinto diseñadas para potenciar los aromas y sabores de vinos robustos.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367599/id71_mocmhr.jpg",
    categoryId: 5,
    stock: 38,
  },
  {
    name: "Enfriador de botellas de vino",
    price: 20,
    description:
      "Mantiene tu botella de vino blanco o espumoso a la temperatura perfecta por varias horas sin necesidad de hielo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367600/id72_nlawwk.webp",
    categoryId: 5,
    stock: 50,
  },
  {
    name: "Medidor de coctelería (Jigger)",
    price: 10,
    description:
      "Medidor de doble cara (1 oz / 2 oz) de acero inoxidable, esencial para medir las cantidades exactas en tus cócteles.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367601/id73_sgnqmx.jpg",
    categoryId: 5,
    stock: 40,
  },
  {
    name: "Tapón para botellas de champagne",
    price: 14,
    description:
      "Sella la botella de espumoso de manera hermética para mantener las burbujas y la frescura por más tiempo.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367602/id74_tw4hra.webp",
    categoryId: 5,
    stock: 45,
  },
  {
    name: "Cuchara de bar en espiral",
    price: 8,
    description:
      "Cuchara de mango largo ideal para mezclar cócteles en vasos altos y crear tragos con capas de diferentes densidades.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367602/id75_lxufuk.webp",
    categoryId: 5,
    stock: 60,
  },
  {
    name: "Enfriador de hielo de acrílico",
    price: 22,
    description:
      "Elegante cubetera de acrílico transparente con asas, perfecta para mantener tus botellas de vino o hielo a la temperatura adecuada.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367603/id76_olofdg.webp",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "Set de 4 posavasos de cuero",
    price: 16,
    description:
      "Protege tus mesas y superficies con estos posavasos elegantes y duraderos, con un diseño minimalista.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367604/id77_c0t1oi.webp",
    categoryId: 5,
    stock: 35,
  },
  {
    name: "Destapador de botellas de pared",
    price: 19,
    description:
      "Destapador de estilo vintage para montar en la pared. Ideal para uso en bares, cocinas o barbacoas al aire libre.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367604/id78_rln6se.jpg",
    categoryId: 5,
    stock: 38,
  },
  {
    name: "Set de 4 sorbetes de acero inoxidable",
    price: 9,
    description:
      "Sorbetes reutilizables y ecológicos, perfectos para disfrutar de cócteles y bebidas frías. Incluye cepillo de limpieza.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367605/id79_w8gfs3.webp",
    categoryId: 5,
    stock: 65,
  },
  {
    name: "Set de muddler y cuchara de bar",
    price: 24,
    description:
      "El 'muddler' es una herramienta esencial para triturar ingredientes como hierbas y frutas directamente en tu vaso, liberando sus sabores.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367606/id80_k0eio5.webp",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "Abrebotellas eléctrico",
    price: 35,
    description:
      "Abre botellas de vino de forma rápida y sin esfuerzo con solo presionar un botón. Incluye cortador de papel de aluminio.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367606/id81_bpoalw.jpg",
    categoryId: 5,
    stock: 42,
  },
  {
    name: "Sable de champagne",
    price: 90,
    description:
      "Una forma elegante y espectacular de abrir una botella de espumoso, ideal para celebraciones y eventos especiales.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367607/id82_ot8lyx.jpg",
    categoryId: 5,
    stock: 18,
  },
  {
    name: "Set de enfriador de botella con dos varillas",
    price: 28,
    description:
      "Mantén tu vino frío sin diluirlo. Simplemente congela la varilla y colócala en la botella para disfrutar de un vino fresco.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367608/id83_izpfx9.jpg",
    categoryId: 5,
    stock: 25,
  },
  {
    name: "Vertedor de vino con filtro",
    price: 13,
    description:
      "Evita goteos al servir el vino y mejora su sabor con su sistema de aireación integrado. Fácil de usar y limpiar.",
    image:
      "https://res.cloudinary.com/dtbpi3bic/image/upload/v1759367609/id84_gyzrlm.jpg",
    categoryId: 5,
    stock: 40,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
