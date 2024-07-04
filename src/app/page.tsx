// 'use client'
// import { useCounterStore } from "./store/store";

// const CounterPage = () => {
//   const count = useCounterStore((state) => state.count);


//   return (
//     <Show count={count} />
//   )

// };

// const Show = ({ count }: { count: number }) => {

//   const increment = useCounterStore((state) => state.increment);
//   const decrement = useCounterStore((state) => state.decrement);


//   return (
//     <div className="container mt-5 g-0">
//       <div className="d-flex justify-content-center">
//         <button onClick={decrement} className="btn btn-outline-dark">-</button>
//         <span className="mx-5 fs-4">
//           {count}
//         </span>
//         <button onClick={increment} className="btn btn-outline-dark">+</button>

//       </div>

//     </div>
//   )
// };

// export default CounterPage;



// app/page.tsx
import { fetchData } from "@/libs/api";

interface MenuItem {
  key: String;
  strDrink: String;
  strDrinkThumb: String;
  idDrink: String;
}

export default function HomePage({ }) {
  return (
    <div className="container">
      <h1>Helloo</h1>
    </div>
  )

}

