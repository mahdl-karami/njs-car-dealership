//? import styles
import styles from "@/styles/carCard.module.css";
import Link from "next/link";
const { card, lead } = styles;
const CarCard = ({ car }) => {
  const { image, name, model, year, distance, location, price, id } = car;
  return (
    <Link href={`/cars/${id}`}>
      <div className={card}>
        <img src={image} />
        <h3>{name + " " + model}</h3>
        <p className={lead}>{year + " . " + distance + "Km"}</p>
        <span>
          <p>{"$ " + String(price)}</p>
          <p>{location}</p>
        </span>
      </div>
    </Link>
  );
};

export default CarCard;
