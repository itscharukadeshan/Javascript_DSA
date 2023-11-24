/** @format */

const roleDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const diceGameSim = (NumberOfTimes) => {
  const results = [];

  for (let index = 0; index < NumberOfTimes; index++) {
    const roleDice_01 = roleDice();
    const roleDice_02 = roleDice();
    const sum = roleDice_01 + roleDice_02;

    let result = "";

    if (sum === 7 || sum === 11) {
      result = "Win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "Loss";
    } else {
      result = "Role again";
    }

    results.push({ roleDice_01, roleDice_02, sum, result });
  }

  return results;
};

console.log(diceGameSim(13));
