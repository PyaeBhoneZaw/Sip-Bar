'use client'

import { useEffect, useState } from "react";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import { fetchData } from "@/libs/api";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HomePage() {

  // const [data, setData] = useState([]);

  const { data, error, isLoading } = useSWR('http://127.0.0.1:8800/drinks.json', fetcher)


  if (error) return <div className="text-2xl text-danger text-red-500 mt-5 text-center">Failed to load</div>
  if (!data) return <div>Loading...</div>
  // useEffect(() => {
  //   (async () => {
  //     setData(await fetchData())
  //   })()

  // }, [])

  return (
    <main className="font-poppins mx-10">
      <div className="text-center text-5xl mt-5 mb-5 font-semibold leading-normal">Drink Lists</div>
      <MenuContainer menuItems={data} />
    </main>
  )
}
