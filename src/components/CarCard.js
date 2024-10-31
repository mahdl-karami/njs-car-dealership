//? import styles
import styles from "@/styles/carCard.module.css";
const { card, lead } = styles;
const CarCard = ({ car }) => {
  const { image, name, model, year, distance, location, price } = car;
  return (
    <div className={card}>
      <img src={image} />
      <h3>{name + " " + model}</h3>
      <p className={lead}>{year + " . " + distance + "Km"}</p>
      <span>
        <p>{"$ " + String(price)}</p>
        <p>{location}</p>
      </span>
    </div>
  );
};

export default CarCard;
