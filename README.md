# week1-Toy-problems

<h1>JAVASCRIPT GRADE CALCULATOR</h1>

A simple program to calculate Students Grades 


<h5>Clone this project from Github.</h5>
  <h6>Using git clone command: git clone {link from Github}</h6>

   <p>You  input student marks into an JavaScript function, and it will determine the relevant grades based on the following requirements: </p>
   
            A: Greater than 79
            B: 60 to 79
            C: 50 to 59
            D: 40 to 49
            E: Less than 40




Invoke the gradeCalculator function with the student's marks as an argument to get the corresponding grade.
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



Implemete Function
<h2>Look at the JavaScript Grade Calculator Function:</h2>
<br>
   <h3>Define Function</h3>

     function calculateGrade(){

let marks = parseFloat(prompt(`Enter student marks (between 0 and 100):`));

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

    // Output Calculated grade

    console.log(`The student's grade is: ${grade}`);
}




<h3>Invoke the function to calculate and display the grade</h3>
calculateGrade();


<h1>Author</h1>
Alexander Nyaga
<h6>Feel free to customize this README as needed for your specific project and add any additional sections or information that may be relevant</h6>


