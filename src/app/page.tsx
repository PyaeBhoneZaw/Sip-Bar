import Image from "next/image";
import Link from "next/link";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import { fetchData } from "@/libs/api";

export default async function HomePage() {

  const data = await fetchData();

  interface MenuProps {
    key: String;
    strDrink: String;
    strDrinkThmb: String;
    idDrink: String;
  }


  return (
    <div className="container">
      <h1 className="text-center text-blue-600">CockTail List</h1>
      {data.drinks.map(function (item: MenuProps) {
        return (
          <MenuContainer
            key={item.idDrink.toString()}
            strDrink={item.strDrink}
            strDrinkThumb={item.strDrinkThmb}
            idDrink={item.idDrink}>
          </MenuContainer>
        )
      })}
    </div>
  )
}

