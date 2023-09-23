// Initialize the Variables
const speedLimit = 70;
let demeritPoints = 0;

//Get speed Difference
const speedDifference = speed - speedLimit;

//Check whether speed is within the limit
if(speedDifference <= 0) {
    console.log("Ok");
}else{
    //Calculation of demeritspoints
    demeritPoints = Math.floor(speedDifference / 5);

    console.log("Points", demeritPoints);
    //condition to check if the license should be suspended or not
    if(demeritPoints > 12) {
        console.log("License suspended");
    }
}