import Image from "next/image";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
        {menuItems?.map((item) => (
          <Link
            key={item.id}
            href={`/drink/${item.id}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/#"
              alt={item.thumbnail}
              width={150}
              height={150}
            />
            <div className="flex justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white wrap">
                {item.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
