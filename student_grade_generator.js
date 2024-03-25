//Declaring Prompt
const prompt  = require("prompt-sync")({sigint: true});

//Prompting user input
let studentMarks = parseInt(prompt("Enter student marks"));
let studentName = prompt("Enter student name");

// Verifying user input
function inputStudentMarks(){
    if (studentMarks >= 0 && studentMarks <= 100 && !isNaN(studentMarks)){
        let grade = getGrade(studentMarks);
        console.log ("The grade of " + studentName + " is " + grade);
    } else {
        console.log("Please enter a valid value between 0 and 100");
    }
}

//Creating the function to calculate the grade
function getGrade(studentMarks){
    if (studentMarks > 79){
        return "A";
    }
    else if (studentMarks >= 60 && studentMarks <= 79){
        return "B";
    }
    else if (studentMarks >= 50 && studentMarks <= 59){
        return "C";
    }
    else if (studentMarks >= 40 && studentMarks <= 49){
        return "D";
    }
    else {
        return "E";
    }
}

inputStudentMarks();