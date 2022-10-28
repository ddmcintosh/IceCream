"use strict";

window.onload = init; 

function init() {
    // need to find the button element
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = onSubmitBtnClicked;
}

//define the submit button function 
function onSubmitBtnClicked() {
    //find variables and initialize
let oneScoop = 2.25;
let numberOfScoop;
let totalScoop = (numberofScoop * 1.25) + oneScoop;
let sprinkles = .50;
let whipCream = .25;
let hotFudge = 1.25;
let cherry = .25;



//only cups can have toppings 
const sprinklesCheckbox = document.getElementById(" sprinklesCheckbox");
const whipCreamCheckbox = document.getElementById("whipCreamCheckbox");
const hotFudgeCheckbox = document.getElementById("hotFudgeCheckbox");
const cherryCheckbox = document.getElementById("cherryCheckbox");


//cups pricing 




//cone pricing 
let cone = document.getElementById("coneCheck").checked;
const cone = document.getElementById("coneCheck");
if (cone) {
    cone = (2.25);
}
else {
    cone = (totalScoop);
}






return onSubmitBtnClicked();

}