//Declaring Prompt as a variable
const prompt  = require("prompt-sync")({sigint: true});

//Prompting student marks input
let studentMarks = parseInt(prompt("Enter student marks"));
//Prompting student name input
let studentName = prompt("Enter student name");

// Verifying that student makrks are between 0 and 100
function inputStudentMarks(){
    if (studentMarks >= 0 && studentMarks <= 100 && !isNaN(studentMarks)){
        let grade = getGrade(studentMarks);
        // Output of student grade
        console.log ("The grade of " + studentName + " is " + grade);
    } else {
        // Output of invalid input
        console.log("Please enter a valid value between 0 and 100");
    }
}

//Creating the function to calculate the grade
function getGrade(studentMarks){
    //Calculating if student grade is A
    if (studentMarks > 79){
        return "A";
    }
    //Calculating if student grade is B
    else if (studentMarks >= 60 && studentMarks <= 79){
        return "B";
    }
    //Calculating if student grade is C
    else if (studentMarks >= 50 && studentMarks <= 59){
        return "C";
    }
    //Calculating if student grade is D
    else if (studentMarks >= 40 && studentMarks <= 49){
        return "D";
    }
    //Calculating if student grade is E
    else {
        return "E";
    }
}
//Calling the function
inputStudentMarks();