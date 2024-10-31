import CarCard from "@/components/CarCard";
import cars from "@/data/carsData";

const Cars = () => {
  return (
    <div className="wrapper">
      <h2 className="title">All Cars</h2>
      <div className="grid">
        {cars.map((car, i) => (
          <div key={i}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
