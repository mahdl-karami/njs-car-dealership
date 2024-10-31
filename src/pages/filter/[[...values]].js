//? import hooks
import { useRouter } from "next/router";
//? import data
import cars from "@/data/carsData";
//? import components
import CarCard from "@/components/CarCard";

const Filter = () => {
  //? getting url(route) information
  const router = useRouter();
  const queries = router.query?.values;
  const min = queries[0];
  const max = queries[1];
  //? find cars by price
  const filteredCars = cars.filter((car) => car.price > min && car.price < max);

  return (
    <div className="wrapper">
      <h2 className="title">
        Price filter : {min}$ to {max}$
      </h2>
      <div className="grid">
        {filteredCars.map((car, i) => (
          <div key={i}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
