import { fetchData } from "@/libs/api";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  key: String;
  strDrink: String;
  strDrinkThumb: String;
  idDrink: String;
}

export default function MenuCon({
  strDrink,
  strDrinkThumb,
  idDrink,
}: MenuItem) {
  return (
    <div className="container">
      <h1>{strDrink}</h1>
      <Image src={strDrinkThumb + ""} alt="" width={150} height={150} />
      {/* <Link href={'#'}></Link> */}
    </div>
  )
}

