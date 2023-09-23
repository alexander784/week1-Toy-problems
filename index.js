//Initialize variables
const speedLimit = 70;
let demeritPoints = 0;

// Prompt for input

const speed = Number(prompt("Enter speed of car"));

// Get the speed difference

const speedDifference = speed - speedLimit;
// Checkcondition whether speed is within the limit
if(speedDifference <= 0) {
  console.log("Ok");
}else{
  // Calculation of demeritPoints
  demeritPoints = Math.floor(speedDifference / 5);

  console.log("Points:", demeritPoints);

  // condition to checkif the license should be suspended

  if(demeritPoints > 12) {
    console.log("License suspended");
  }
}

