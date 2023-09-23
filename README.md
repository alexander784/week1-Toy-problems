<h1>Student Grade Generator</h1>

<h1>Author</h1>
Alexander Nyaga

<h1>Description</h1>
<p>The calculateGrade function determines the grade depending on the value of the marks input using a simple if-else condition. The textContent property is used to display the grade once it has been determined in the grade paragraph element.</p>

<h1>Check out the function:</h1>
function calculateGrade(){

    let Marks = parseFloat(prompt(`Enter student marks (between 0 and 100):`));
let grade;
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
console.log(`The student's grade is: ${grade}`);

}

<h4>Clone this Repository</h4>
<p>Clone this program from Github using the git clone command.
  git clone {Github link}



<h1>Speed Detector</h1>

<h3>Description</h3>
<p>get the value of an input field with the speed id.The result of the getElementById() method is then converted to an integer using the parseInt() function and put to the speed variable.</p>

<h1>Check out the Program code</h1>
<ul>const speedLimit = 70;
let demeritPoints = 0;
const speedDifference = speed - speedLimit;
if(speedDifference <= 0) {
    console.log("Ok");
}else{
    demeritPoints = Math.floor(speedDifference / 5);
    console.log("Points", demeritPoints);
    if(demeritPoints > 12) {
        console.log("License suspended");
    }
}
</ul>

