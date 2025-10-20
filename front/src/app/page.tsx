import CategoryCardContainer from "@/components/CategoryCardContainer";
import HomeHero from "@/components/HomeHero";

export default async function Home() {
  return (
    <div>
      <div className="">
        <h1 className="bg-gray-100 text-5xl text-gray-800 text-center py-10 font-bold">
          Bienvenido a LA VINOTECA!
        </h1>
      </div>
      <HomeHero />

      <CategoryCardContainer />
    </div>
  );
}
