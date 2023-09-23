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



    