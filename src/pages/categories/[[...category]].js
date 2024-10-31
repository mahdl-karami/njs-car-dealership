import { useRouter } from "next/router";
import cars from "@/data/carsData";
import CarCard from "@/components/CarCard";

const Category = () => {
  const router = useRouter();
  const queries = router.query;

  const x = cars.filter((car) => car.category == queries.category[0]);

  console.log(x);
  return (
    <div className="wrapper">
      <h2 className="title">{queries.category[0]}</h2>
      <div className="grid">
        {x.map((car, i) => (
          <div key={i}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
