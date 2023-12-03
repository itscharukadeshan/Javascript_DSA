/** @format */

const analyzeCarMileage = (carArray) => {
  const totalMileage = carArray.reduce((sum, car) => {
    return sum + car.mileage;
  }, 0);
};
