//Declaring Prompt as a variable
const prompt  = require("prompt-sync")({sigint: true});

// Declaring the speed limit
const speedLimit = 70;
// Declaring the maximum demerit points
const maxDemeritPoints = 12;

// Prompting entry of the speed of the car
let speed = parseInt(prompt("Enter Speed of the Car"));

//Creating the function to calculate the demerit points
function calculateDemeritPoints(speed){
     if (speed > speedLimit){
    //Calculating the demerit points
    return Math.floor((speed - speedLimit) / 5);
    //Returning 0 if the speed is less than the speed limit
    } else{
        return 0
    }
    
}
//Creating a function to check the demerit points
function checkDemeritPoints(){
    //Calculating the demerit points
    let demeritPoints = calculateDemeritPoints(speed);

    //Checking if the demerit points are greater than the maximum demerit points
    if (demeritPoints > maxDemeritPoints){
        //Returning the license suspended
        return "License Suspended";

    //Checking if the demerit points are less than the maximum demerit points
    } else if (demeritPoints > 0 && demeritPoints <= maxDemeritPoints){
        //Returning the demerit points
        return "Points: " + demeritPoints;

    //Checking if the demerit points are equal to 0
    } else {
        return "Ok";
    }
}

//Displaying the demerit points
let display = checkDemeritPoints();
console.log(display)