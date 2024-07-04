import Image from "next/image";
import Link from "next/link";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import { fetchData } from "@/libs/api";

export default async function HomePage() {

  const data = await fetchData();

  interface MenuProps {
    key: string;
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  }

  return (
    <main className="font-poppins mx-10">
      <div className="text-center text-5xl mt-5 mb-5 font-semibold leading-normal">Drink Lists</div>
      <MenuContainer menuItems={data.drinks} />
    </main>
  )
}
