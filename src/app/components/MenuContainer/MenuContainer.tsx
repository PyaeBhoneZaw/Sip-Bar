import Image from "next/image";
import dummy_image from "@/../public/images/dummy.jpg";
import Link from "next/link";

interface MenuItem {
  "id": number,
  "name": string,
  "thumbnail": string,
  "drink_id": string,
  "price": string,
  "description": string,
  "created_at": string,
  "updated_at": string,
}

interface MenuContainerProps {
  menuItems?: MenuItem[];
}

export default function MenuContainer({ menuItems }: MenuContainerProps) {

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {menuItems?.map((item, index) => (
          <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <Image
                src={dummy_image}
                alt="cocktail_image"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-cyan-600">
                  {item.name}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {item.price} Ks
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an
                available wireless charging case.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="justify-center text-center w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                type="button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
