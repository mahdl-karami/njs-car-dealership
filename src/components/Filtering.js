//? import hooks
import { useState } from "react";
import { useRouter } from "next/router";
//? import helpers
import subHandler from "@/helpers/priceFilter";
//? import components
import Link from "next/link";
//? import styles
import styles from "@/styles/filtering.module.css";
const { price, filtering } = styles;
//? import data
import categories from "@/data/categories";

const Filtering = () => {
  const router = useRouter();
  //! set states
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  //! JSX
  return (
    <div className={filtering}>
      <div className="wrapper">
        {/* //! price filter */}
        <form className={price} onSubmit={(ev) => subHandler(ev, router)}>
          <p>Price : </p>
          <input type="number" placeholder="Enter min-price" value={min} onChange={({ target: { value } }) => setMin(value)} />
          <input type="number" placeholder="Enter max-price" value={max} onChange={({ target: { value } }) => setMax(value)} />
          <button type="submit">Filter</button>
        </form>
        {/* //! category filter */}
        <div>
          <p>Categories : </p>
          {categories.map(({ name, path }, i) => (
            <Link href={path} key={i}>
              <button>{name}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtering;
