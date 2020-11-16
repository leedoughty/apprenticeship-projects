function rockPaperScissors() {
  const rockPaperScissorsArray = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * rockPaperScissorsArray.length);
  //   console.log(rockPaperScissorsArray[randomIndex]);
}

rockPaperScissors();

//

function convertToLengthOfRoom(areaOfTheRoom) {
  // static method
  // console.log(Math.sqrt(areaOfTheRoom));
}

convertToLengthOfRoom(25);

//

function convertToRoundedLengthOfRoom(areaOfTheRoom) {
  //   console.log(Math.round(Math.sqrt(areaOfTheRoom)));
}

convertToRoundedLengthOfRoom(23);

//

function convertToRoundedNearestPointNoughtOneLengthOfRoom(areaOfTheRoom) {
  const length = Math.sqrt(areaOfTheRoom).toFixed(2);
  const lengthNum = Number(length);
  //   console.log(lengthNum);
}

convertToRoundedNearestPointNoughtOneLengthOfRoom(19);

//

/*
The term "significant figures refers to the digits, in a number or measurement, 
which show the precision of the number. 
For example, in the number 2300, the count of significant digits is 2.
 In the number 2040, the significant digits are "204" as a total of 3.
*/

function roundToSignificantDigits(areaOfTheRoom) {
  const length = Math.sqrt(areaOfTheRoom).toPrecision(3);
  const lengthNum = Number(length);
  //   console.log(lengthNum);
}

roundToSignificantDigits(23);

//

function rabbits(startingRabbits, months) {
  console.log(startingRabbits * Math.pow(2, months));
}

rabbits(5, 3);

//

function splitTheBill(numberOfPeople, totalCostOfBill) {
  const billPerPerson = totalCostOfBill / numberOfPeople;
  const roundedBillPerPerson = Math.ceil(billPerPerson);
  //   console.log(roundedBillPerPerson);
}

splitTheBill(3, 26.82);

//

function returnTheDifference(firstNumber, secondNumber) {
  // firstNumber > secondNumber
  //   ? console.log(firstNumber - secondNumber)
  //   : console.log(secondNumber - firstNumber);
  // abs - absolute number
  console.log(Math.abs(firstNumber - secondNumber));
}

returnTheDifference(22, 37);

//

function vehicleFuelCalculator(weightOfVehicle) {
  const tonsOfFuelNeeded = weightOfVehicle / 2;
  const tonsOfFuelNeededRoundedDown = Math.floor(tonsOfFuelNeeded);
  //   console.log(tonsOfFuelNeededRoundedDown);
}

vehicleFuelCalculator(25);

//

function fuelCalculator(weightOfVehicle) {
  let fuelCounter = 0;
  function vehicleFuelCalculatorOverall(weightOfVehicle) {
    let tonsOfFuelNeeded = Math.floor(weightOfVehicle / 2);
    if (tonsOfFuelNeeded > 0) {
      fuelCounter += tonsOfFuelNeeded;
      vehicleFuelCalculatorOverall(tonsOfFuelNeeded);
    }
    return fuelCounter;
  }
  return vehicleFuelCalculatorOverall(weightOfVehicle);
}

console.log(fuelCalculator(25));
console.log(fuelCalculator(15));
