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
<p>This speed detector program measures a driver's speed, assigns demerit points for speeding, and warns the driver that their license may be suspended if their demerit points is exceed 12</p>

<h1>Check out the Program code</h1>


       const speedLimit = 70;
      let demeritPoints = 0;
      const speedDifference = speed - speedLimit;
     if(speedDifference <= 70) {
    console.log("Ok");
    }else{
    demeritPoints = Math.floor(speedDifference / 5);
    console.log("Points", demeritPoints);
    if(demeritPoints > 12) {
        console.log("License suspended");
    }
} 


<h1>Net Salary Calculator </h1>
<h1>Description</h1>
<p>This JavaScript program utilizes a prompt to collect information regarding basic pay and benefits, then uses payee (tax) calculations to determine gross pay, payee (tax), NHIF deductions, NSSF deductions, and net pay. The results are then displayed in the console.</p>

