/** @format */

const analyzeCarMileage = (carArray) => {
  const totalMileage = carArray.reduce((sum, car) => {
    return sum + car.mileage;
  }, 0);

  const averageMileage = totalMileage / carArray.length;

  const highMileage = carArray.reduce((high, car) => {
    return car.mileage > high.mileage ? car : high;
  }, carArray[0]);

  const lowestMileage = carArray.reduce((lowest, car) => {
    return car.mileage < lowest.mileage ? car : lowest;
  }, carArray[0]);

  return {
    AverageMileage: parseFloat(averageMileage.toFixed(2)),

    HighMileageCar: highMileage,

    LowestMileage: lowestMileage,

    TotalMileage: totalMileage,
  };
};
