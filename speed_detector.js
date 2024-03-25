//Declaring Prompt
const prompt  = require("prompt-sync")({sigint: true});

// Declaring constants
const speedLimit = 70;
const maxDemeritPoints = 12;
let speed = parseInt(prompt("Enter Speed of the Car"));

//Creating the function to calculate the demerit points
function calculateDemeritPoints(speed){
     if (speed > speedLimit){
    return Math.floor((speed - speedLimit) / 5);
    } else{
        return 0
    }
    
}
//Creating a function to check the demerit points
function checkDemeritPoints(){
    let demeritPoints = calculateDemeritPoints(speed);
    if (demeritPoints > maxDemeritPoints){
        return "License Suspended";
    } else if (demeritPoints > 0 && demeritPoints <= maxDemeritPoints){
        return "Points: " + demeritPoints;
    } else {
        return "Ok";
    }
}

//Displaying the demerit points
let display = checkDemeritPoints();
console.log(display)