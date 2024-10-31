//? import hooks
import { useRouter } from "next/router";
//? import data
import cars from "@/data/carsData";
//? import styles
import styles from "@/styles/carPage.module.css";
const { page, desc } = styles;

const Car = () => {
  //? getting url(route) information
  const router = useRouter();
  const carId = router.query.carId;
  //? find car by id
  const car = cars.filter((car) => car.id == carId)[0];
  const { image, name, model, year, distance, description, location, price } = car;

  return (
    <div className="wrapper">
      <div className={page}>
        <img src={image} />
        <h3>{name + " " + model}</h3>
        <div>
          <span>
            <p>Company</p>
            <p>Model</p>
            <p>First registration</p>
            <p>km/s driven</p>
          </span>
          <span>
            <p>{name}</p>
            <p>{model}</p>
            <p>{year}</p>
            <p>{distance}</p>
          </span>
        </div>
        <div>
          <p>location</p>
          <p>{location}</p>
        </div>
        <div className={desc}>
          <h3>Extra Information</h3>
          <p>{description}</p>
        </div>
        <div>
          <p>Price : </p>
          <p>{price}</p>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Car;
