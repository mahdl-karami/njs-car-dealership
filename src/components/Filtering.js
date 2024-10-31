//? import styles
import styles from "@/styles/filtering.module.css";
const { price, filtering } = styles;

const Filtering = () => {
  return (
    <div className={filtering}>
      <div className="wrapper">
        <form className={price}>
          <p>Price : </p>
          <input type="number" placeholder="Enter min-price" />
          <input type="number" placeholder="Enter max-price" />
          <button type="submit">Filter</button>
        </form>
        <div>
          <p>Categories : </p>
          <button>Senad</button>
          <button>SUV</button>
          <button>Hackback</button>
          <button>Sport</button>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
