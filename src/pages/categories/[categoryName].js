//? import hooks
import { useRouter } from "next/router";
//? import data
import cars from "@/data/carsData";
//? import components
import CarCard from "@/components/CarCard";

const Category = () => {
  //? getting url(route) information
  const router = useRouter();
  const queries = router?.query || [];
  //? find cars by category
  const filteredCars = cars.filter((car) => car.category == queries?.categoryName);
  return (
    <div className="wrapper">
      <h2 className="title">{queries?.categoryName}</h2>
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

export default Category;
