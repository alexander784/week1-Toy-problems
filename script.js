// Initialize the Variables
const speedLimit = 70;
let demeritPoints = 0;

//Get speed Difference
const speedDifference = speed - speedLimit;

//Check whether speed is within the limit
if(speedDifference <= 0) {
    console.log("Ok");
}