// Define the function
function calculateGrade(){

    //input Student Marks
    let Marks = parseFloat(prompt(`Enter student marks (between 0 and 100):`));
// Declare grade variable
let grade;
// Check marks against Grade ranges and assign the corresponding Grade
if (marks > 79){
    grade = "A";
}else if (marks>= 60){
    grade = "B"
}else if (marks >= 50) {
    grade = "C"
}else if(marks>= 40) {
    grade ="D"

}else{
    grade = "E"
}
// Output Calculated grade

console.log(`The student's grade is: ${grade}`);

}



//SPEED DETECTOR.
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


//Net Salary Calculator 
//initialize Variables
let benefits = parseFloat(prompt("Enter benefits: "));
let basicSalary = parseFloat(prompt("Enter basic salary: "));





    